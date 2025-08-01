import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report, confusion_matrix, accuracy_score
import lightgbm as lgb

np.random.seed(42)
n_samples = 5000

# Monthly assignment (1..12)
month = np.random.randint(1, 13, size=n_samples)

# Base monthly means
temp_monthly = {1:20,2:21,3:20,4:18,5:15,6:12,7:11,8:13,9:16,10:18,11:19,12:20}
humidity_monthly = {1:60,2:63,3:60,4:55,5:50,6:45,7:44,8:46,9:44,10:50,11:55,12:58}
wind_mph_monthly = {1:13.7,2:13.4,3:12.3,4:11.1,5:10.8,6:11.2,7:11.5,8:11.6,9:11.9,10:12.6,11:13.3,12:13.4}
precip_monthly = {1:20,2:10,3:15,4:40,5:80,6:75,7:70,8:65,9:50,10:30,11:25,12:20}
cloud_monthly = {1:30,2:32,3:35,4:45,5:50,6:55,7:60,8:58,9:50,10:40,11:35,12:30}
season_flag    = {1:0, 2:0, 3:0, 4:1, 5:1, 6:1, 7:1, 8:1, 9:1,10:0,11:0,12:0}

# Deterministic per-sample features (no added noise)
temperature = np.array([temp_monthly[m] for m in month])
humidity    = np.array([humidity_monthly[m] for m in month])
wind_speed  = np.array([wind_mph_monthly[m]*0.44704 for m in month])  # convert mph to m/s
precipitation = np.array([precip_monthly[m] for m in month])
cloud_cover = np.array([cloud_monthly[m] for m in month])
season      = np.array([season_flag[m] for m in month])

# Expected NO₂ baseline + weather & season effects
base_no2 = 30
expected_no2 = (
    base_no2
    + 0.3  * (temperature - 25)
    - 1.5  * wind_speed
    - 2.0  * (precipitation > 1).astype(float)
    + 0.1  * (cloud_cover / 10)
    + 3.0  * season
)

# Observed NO₂ with added realistic noise and spikes
noise = np.random.normal(0, 2, n_samples)
spike_prob = np.where(season==0, 0.07, 0.03)  # more spikes in dry season
spike = (np.random.rand(n_samples) < spike_prob).astype(float) * np.random.uniform(5, 15, n_samples)
observed_no2 = expected_no2 + noise + spike

# Label: anomaly if >25% above expected OR any spike
delta_pct = (observed_no2 - expected_no2) / expected_no2 * 100
y = ((delta_pct > 25) | (spike > 0)).astype(int)

# Check class balance
unique, counts = np.unique(y, return_counts=True)
print("Class distribution:", dict(zip(unique, counts)))

# Assemble feature DataFrame
X = pd.DataFrame({
    "temperature": temperature,
    "humidity":    humidity,
    "wind_speed":  wind_speed,
    "precipitation": precipitation,
    "cloud_cover": cloud_cover,
    "season":      season,
    "expected_no2": expected_no2
})

# Train/test split (stratify to keep class ratio)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.3, random_state=0, stratify=y
)

# LightGBM classifier with early stopping
clf = lgb.LGBMClassifier(
    boosting_type='gbdt',
    objective='binary',
    learning_rate=0.05,
    n_estimators=500,
    num_leaves=31,
    max_depth=6,
    feature_fraction=0.8,
    subsample=0.8,
    subsample_freq=1,
    reg_alpha=0.1,
    reg_lambda=0.1,
    random_state=42
)

clf.fit(
    X_train, y_train,
    eval_set=[(X_test, y_test)],
    eval_metric='binary_logloss',
    callbacks=[lgb.early_stopping(stopping_rounds=30), lgb.log_evaluation(period=0)]
)

# Predict & evaluate
y_pred = clf.predict(X_test)
print(f"\nAccuracy: {accuracy_score(y_test, y_pred):.4f}")
print("Confusion Matrix:\n", confusion_matrix(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Feature importance
importances = (
    pd.DataFrame({
        "feature": X.columns,
        "importance": clf.feature_importances_
    })
    .sort_values("importance", ascending=False)
    .reset_index(drop=True)
)
print("\nFeature importances:\n", importances.to_string(index=False))
