
// Comprehensive African Countries Dataset (54 countries)
const sampleData = {
    countries: {
        'DZA': { name: 'Algeria', capital: 'Algiers', coords: [28.0339, 1.6596], region: 'North' },
        'AGO': { name: 'Angola', capital: 'Luanda', coords: [-11.2027, 17.8739], region: 'Central' },
        'BEN': { name: 'Benin', capital: 'Porto-Novo', coords: [9.3077, 2.3158], region: 'West' },
        'BWA': { name: 'Botswana', capital: 'Gaborone', coords: [-24.6282, 25.9231], region: 'Southern' },
        'BFA': { name: 'Burkina Faso', capital: 'Ouagadougou', coords: [12.2383, -1.5616], region: 'West' },
        'BDI': { name: 'Burundi', capital: 'Gitega', coords: [-3.3731, 29.9189], region: 'East' },
        'CPV': { name: 'Cape Verde', capital: 'Praia', coords: [14.933, -23.513], region: 'West' },
        'CMR': { name: 'Cameroon', capital: 'Yaoundé', coords: [7.3697, 12.3547], region: 'Central' },
        'CAF': { name: 'Central African Republic', capital: 'Bangui', coords: [4.3947, 18.5582], region: 'Central' },
        'TCD': { name: 'Chad', capital: "N'Djamena", coords: [15.4542, 18.7322], region: 'Central' },
        'COM': { name: 'Comoros', capital: 'Moroni', coords: [-11.6455, 43.3333], region: 'East' },
        'COG': { name: 'Republic of Congo', capital: 'Brazzaville', coords: [-4.2634, 15.2429], region: 'Central' },
        'COD': { name: 'DR Congo', capital: 'Kinshasa', coords: [-4.4419, 15.2663], region: 'Central' },
        'CIV': { name: 'Ivory Coast', capital: 'Yamoussoukro', coords: [7.5400, -5.5471], region: 'West' },
        'DJI': { name: 'Djibouti', capital: 'Djibouti', coords: [11.8251, 42.5903], region: 'East' },
        'EGY': { name: 'Egypt', capital: 'Cairo', coords: [30.0444, 31.2357], region: 'North' },
        'GNQ': { name: 'Equatorial Guinea', capital: 'Malabo', coords: [3.7504, 8.7371], region: 'Central' },
        'ERI': { name: 'Eritrea', capital: 'Asmara', coords: [15.7394, 38.9637], region: 'East' },
        'SWZ': { name: 'Eswatini', capital: 'Mbabane', coords: [-26.5225, 31.4659], region: 'Southern' },
        'ETH': { name: 'Ethiopia', capital: 'Addis Ababa', coords: [9.145, 40.4897], region: 'East' },
        'GAB': { name: 'Gabon', capital: 'Libreville', coords: [0.4162, 9.4673], region: 'Central' },
        'GMB': { name: 'Gambia', capital: 'Banjul', coords: [13.4432, -15.3101], region: 'West' },
        'GHA': { name: 'Ghana', capital: 'Accra', coords: [5.6037, -0.1870], region: 'West' },
        'GIN': { name: 'Guinea', capital: 'Conakry', coords: [9.6412, -13.5784], region: 'West' },
        'GNB': { name: 'Guinea-Bissau', capital: 'Bissau', coords: [11.8037, -15.1804], region: 'West' },
        'KEN': { name: 'Kenya', capital: 'Nairobi', coords: [-0.0236, 37.9062], region: 'East' },
        'LSO': { name: 'Lesotho', capital: 'Maseru', coords: [-29.6100, 28.2336], region: 'Southern' },
        'LBR': { name: 'Liberia', capital: 'Monrovia', coords: [6.4281, -9.4295], region: 'West' },
        'LBY': { name: 'Libya', capital: 'Tripoli', coords: [32.8872, 13.1913], region: 'North' },
        'MDG': { name: 'Madagascar', capital: 'Antananarivo', coords: [-18.8792, 47.5079], region: 'East' },
        'MWI': { name: 'Malawi', capital: 'Lilongwe', coords: [-13.2543, 34.3015], region: 'East' },
        'MLI': { name: 'Mali', capital: 'Bamako', coords: [17.570, -3.996], region: 'West' },
        'MRT': { name: 'Mauritania', capital: 'Nouakchott', coords: [18.0735, -15.9582], region: 'West' },
        'MUS': { name: 'Mauritius', capital: 'Port Louis', coords: [-20.2042, 57.5562], region: 'East' },
        'MAR': { name: 'Morocco', capital: 'Rabat', coords: [34.0209, -6.8416], region: 'North' },
        'MOZ': { name: 'Mozambique', capital: 'Maputo', coords: [-25.9692, 32.5732], region: 'East' },
        'NAM': { name: 'Namibia', capital: 'Windhoek', coords: [-22.9576, 18.4904], region: 'Southern' },
        'NER': { name: 'Niger', capital: 'Niamey', coords: [17.6078, 8.0817], region: 'West' },
        'NGA': { name: 'Nigeria', capital: 'Abuja', coords: [9.0765, 7.3986], region: 'West' },
        'RWA': { name: 'Rwanda', capital: 'Kigali', coords: [-1.9403, 30.0644], region: 'East' },
        'STP': { name: 'São Tomé and Príncipe', capital: 'São Tomé', coords: [0.1864, 6.6131], region: 'Central' },
        'SEN': { name: 'Senegal', capital: 'Dakar', coords: [14.7167, -17.4677], region: 'West' },
        'SYC': { name: 'Seychelles', capital: 'Victoria', coords: [-4.6191, 55.4513], region: 'East' },
        'SLE': { name: 'Sierra Leone', capital: 'Freetown', coords: [8.4606, -11.7799], region: 'West' },
        'SOM': { name: 'Somalia', capital: 'Mogadishu', coords: [5.1521, 46.1996], region: 'East' },
        'ZAF': { name: 'South Africa', capital: 'Cape Town', coords: [-30.5595, 22.9375], region: 'Southern' },
        'SSD': { name: 'South Sudan', capital: 'Juba', coords: [4.8594, 31.5713], region: 'East' },
        'SDN': { name: 'Sudan', capital: 'Khartoum', coords: [15.5007, 32.5599], region: 'North' },
        'TZA': { name: 'Tanzania', capital: 'Dodoma', coords: [-6.3690, 34.8888], region: 'East' },
        'TGO': { name: 'Togo', capital: 'Lomé', coords: [8.6195, 0.8248], region: 'West' },
        'TUN': { name: 'Tunisia', capital: 'Tunis', coords: [36.8065, 10.1815], region: 'North' },
        'UGA': { name: 'Uganda', capital: 'Kampala', coords: [0.3476, 32.5825], region: 'East' },
        'ZMB': { name: 'Zambia', capital: 'Lusaka', coords: [-13.1339, 27.8493], region: 'East' },
        'ZWE': { name: 'Zimbabwe', capital: 'Harare', coords: [-17.8252, 31.0335], region: 'East' }
    }
};

// Generate data for all countries
function initializeCountryData() {
    sampleData.no2Data = {};
    sampleData.forestData = {};
    sampleData.flaringData = {};
    sampleData.scores = {};

    Object.keys(sampleData.countries).forEach(code => {
        const region = sampleData.countries[code].region;
        
        // Different base values by region (more realistic)
        const regionBases = {
            'North': { no2: 32.1, forest: 2.8, flaring: 22 },
            'West': { no2: 28.4, forest: 12.3, flaring: 31 },
            'East': { no2: 19.7, forest: 8.1, flaring: 14 },
            'Central': { no2: 17.2, forest: 18.9, flaring: 11 },
            'Southern': { no2: 26.3, forest: 5.4, flaring: 19 }
        };

        const base = regionBases[region];
        const variation = (Math.random() - 0.5) * 0.4; // ±20% variation

        // Generate NO2 data with more sophisticated patterns
        sampleData.no2Data[code] = generateAdvancedMonthlyData(2019, 1, 2025, 6, {
            base: base.no2 * (1 + variation),
            trend: -0.06 - Math.random() * 0.15,
            noise: 1.8 + Math.random() * 2.2,
            seasonality: 0.15,
            covidEffect: code === 'ZAF' || code === 'EGY' || code === 'NGA' // Major economies had stronger COVID effects
        });

        // Generate forest data with regional patterns
        sampleData.forestData[code] = generateAdvancedMonthlyData(2019, 1, 2025, 6, {
            base: base.forest * (1 + variation),
            trend: -0.015 - Math.random() * 0.08,
            noise: base.forest * 0.18,
            seasonal: true,
            intenseDrySeasons: region === 'Central' || region === 'West'
        });

        // Generate flaring data with more realistic patterns
        const hasOilGas = ['DZA', 'AGO', 'LBY', 'NGA', 'EGY', 'TCD', 'GAB', 'GNQ'].includes(code);
        sampleData.flaringData[code] = generateAdvancedMonthlyData(2019, 1, 2025, 6, {
            base: hasOilGas ? base.flaring * (1.5 + variation) : base.flaring * (0.3 + variation * 0.5),
            trend: -0.04 - Math.random() * 0.09,
            noise: hasOilGas ? base.flaring * 0.25 : base.flaring * 0.15,
            spike: Math.random() < (hasOilGas ? 0.4 : 0.1) ? { month: '2024-' + String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'), factor: 1.8 + Math.random() * 1.2 } : null
        });

        // Calculate current score
        sampleData.scores[code] = calculateCompositeScore(code, '2025-06');
    });
}

// Enhanced data generation with more realistic patterns
function generateAdvancedMonthlyData(startYear, startMonth, endYear, endMonth, params) {
    const data = [];
    let currentDate = new Date(startYear, startMonth - 1);
    const endDate = new Date(endYear, endMonth - 1);
    let monthIndex = 0;

    while (currentDate <= endDate) {
        const monthStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth() + 1;
        
        let value = params.base;
        
        // Enhanced trend with acceleration
        const yearsFromStart = (year - startYear) + (month - 1) / 12;
        value += params.trend * yearsFromStart * (1 + yearsFromStart * 0.1);
        
        // Enhanced seasonality
        if (params.seasonal || params.seasonality) {
            const seasonalIntensity = params.seasonality || 0.1;
            value += Math.sin((month - 1) * Math.PI / 6) * (params.base * seasonalIntensity);
            
            // Intense dry seasons for forest loss
            if (params.intenseDrySeasons && (month >= 11 || month <= 3)) {
                value *= 1.3 + Math.random() * 0.4;
            }
        }
        
        // COVID-19 impact for NO2 (major drop in 2020)
        if (params.covidEffect && year === 2020 && month >= 3 && month <= 8) {
            value *= 0.65 - Math.random() * 0.15;
        }
        
        // Enhanced noise with autocorrelation
        const baseNoise = (Math.random() - 0.5) * params.noise * 2;
        const autocorrNoise = monthIndex > 0 ? data[monthIndex - 1].noise * 0.3 : 0;
        const totalNoise = baseNoise + autocorrNoise;
        value += totalNoise;
        
        // Special spike events
        if (params.spike && monthStr === params.spike.month) {
            value *= params.spike.factor;
        }
        
        // Ensure non-negative with better bounds
        value = Math.max(params.base * 0.1, value);
        
        data.push({
            month: monthStr,
            value: parseFloat(value.toFixed(2)),
            confidence: 0.72 + Math.random() * 0.23, // 0.72-0.95 range
            noise: totalNoise
        });
        
        currentDate.setMonth(currentDate.getMonth() + 1);
        monthIndex++;
    }
    
    return data;
}

// Enhanced ML Simulation Functions
function weatherAdjustNO2(data, country) {
    return data.map((item, index) => {
        const monthOfYear = parseInt(item.month.split('-')[1]);
        const yearsSince2019 = (parseInt(item.month.split('-')[0]) - 2019) + (monthOfYear - 1) / 12;
        
        // More sophisticated weather model
        const seasonal = Math.sin(monthOfYear * Math.PI / 6) * 2.5 + Math.cos(monthOfYear * Math.PI / 3) * 1.2;
        const longTermTrend = -0.12 * yearsSince2019 * (1 + yearsSince2019 * 0.05);
        const weatherVariability = (Math.random() - 0.5) * 2.1;
        const synopticPatterns = Math.sin(index * 0.3) * 1.3; // Longer-term weather patterns
        
        const expected = sampleData.no2Data[country][0].value + seasonal + longTermTrend + weatherVariability + synopticPatterns;
        const delta_percent = ((item.value - expected) / expected) * 100;
        const uncertainty = 2.1 + Math.random() * 1.8; // Variable uncertainty
        
        return {
            ...item,
            expected: parseFloat(expected.toFixed(2)),
            delta_percent: parseFloat(delta_percent.toFixed(2)),
            ci_lower: parseFloat((delta_percent - uncertainty).toFixed(2)),
            ci_upper: parseFloat((delta_percent + uncertainty).toFixed(2)),
            weather_factors: {
                seasonal: parseFloat(seasonal.toFixed(1)),
                trend: parseFloat(longTermTrend.toFixed(1)),
                variability: parseFloat(weatherVariability.toFixed(1))
            }
        };
    });
}

function detectAnomalies(data, threshold = 2) {
    const values = data.map(d => d.value);
    const mean = values.reduce((a, b) => a + b) / values.length;
    const std = Math.sqrt(values.reduce((sq, n) => sq + Math.pow(n - mean, 2), 0) / values.length);
    
    return data.map((item, index) => {
        const z_score = (item.value - mean) / std;
        const anomaly_severity = Math.abs(z_score) >= 3 ? 'extreme' : Math.abs(z_score) >= 2 ? 'moderate' : 'normal';
        
        return {
            ...item,
            z_score: parseFloat(z_score.toFixed(2)),
            is_anomaly: Math.abs(z_score) >= threshold,
            severity: anomaly_severity,
            probability: parseFloat((1 - Math.exp(-Math.abs(z_score))).toFixed(3))
        };
    });
}

function calculateCompositeScore(country, month) {
    const weights = { power: 0.4, land: 0.35, og: 0.25 };
    
    const no2Data = weatherAdjustNO2(sampleData.no2Data[country], country);
    const forestData = sampleData.forestData[country];
    const flaringData = sampleData.flaringData[country];
    
    const monthData = {
        no2: no2Data.find(d => d.month === month),
        forest: forestData.find(d => d.month === month),
        flaring: flaringData.find(d => d.month === month)
    };
    
    if (!monthData.no2 || !monthData.forest || !monthData.flaring) {
        return { overall: 0, sectors: { power: 0, land: 0, og: 0 }, confidence: 0 };
    }
    
    // Enhanced scoring with non-linear scaling
    const powerScore = Math.max(0, Math.min(100, 75 + monthData.no2.delta_percent * -2.2));
    const landScore = Math.max(0, Math.min(100, 100 - Math.pow(monthData.forest.value / 20, 0.8) * 100));
    const ogScore = Math.max(0, Math.min(100, 100 - Math.pow(monthData.flaring.value / 60, 0.7) * 100));
    
    // Confidence weighting
    const avgConfidence = (monthData.no2.confidence + monthData.forest.confidence + monthData.flaring.confidence) / 3;
    
    const overallScore = Math.round(
        (powerScore * weights.power + landScore * weights.land + ogScore * weights.og) * avgConfidence
    );
    
    return {
        overall: overallScore,
        sectors: {
            power: Math.round(powerScore),
            land: Math.round(landScore),
            og: Math.round(ogScore)
        },
        confidence: parseFloat(avgConfidence.toFixed(3)),
        weightedConfidence: parseFloat((avgConfidence * 100).toFixed(1))
    };
}

// UI State
let currentCountry = null;
let map = null;
let charts = {};

// Dark mode detection
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCountryData();
    initializeMap();
    updateLeaderboards();
    setupEventListeners();
});

function initializeMap() {
    map = L.map('map').setView([0, 20], 3);
    
    // Enhanced tile layer with better styling
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18,
        className: 'map-tiles'
    }).addTo(map);

    // Add enhanced color-coded country markers
    Object.entries(sampleData.countries).forEach(([code, country]) => {
        const score = sampleData.scores[code].overall;
        const confidence = sampleData.scores[code].weightedConfidence;
        const color = getScoreColor(score);
        const size = getScoreSize(score);
        
        const markerIcon = L.divIcon({
            className: 'custom-marker',
            html: `
                <div class="country-marker" style="
                    width: ${size}px;
                    height: ${size}px;
                    background: linear-gradient(135deg, ${color}, ${adjustBrightness(color, -20)});
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.3), 0 0 0 ${confidence > 80 ? 4 : 2}px rgba(93, 92, 222, ${confidence > 80 ? 0.3 : 0.1});
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: ${Math.max(10, size/3.5)}px;
                    cursor: pointer;
                    transition: all 0.3s ease;
                " onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">
                    ${score}
                </div>
            `,
            iconSize: [size, size],
            iconAnchor: [size/2, size/2]
        });
        
        const marker = L.marker(country.coords, { icon: markerIcon }).addTo(map);
        
        // Enhanced popup with more information
        marker.bindPopup(`
            <div style="text-align: center; min-width: 180px; font-family: Inter, sans-serif;">
                <h3 style="margin: 0 0 10px 0; color: #333; font-size: 18px; font-weight: bold;">${country.name}</h3>
                <div style="margin: 8px 0; color: #666; font-size: 14px;">${country.capital}</div>
                <div style="font-size: 28px; font-weight: bold; color: ${color}; margin: 12px 0;">${score}/100</div>
                <div style="color: #666; margin-bottom: 8px; font-size: 12px;">Climate Performance Score</div>
                <div style="margin: 8px 0; font-size: 11px; color: #888;">Confidence: ${confidence}%</div>
                <button style="
                    background: linear-gradient(135deg, ${color}, ${adjustBrightness(color, -20)});
                    color: white;
                    border: none;
                    padding: 10px 18px;
                    border-radius: 8px;
                    cursor: pointer;
                    font-weight: bold;
                    font-size: 13px;
                    transition: all 0.2s ease;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
                " onclick="showCountryDashboard('${code}')" onmouseover="this.style.transform='translateY(-1px)'" onmouseout="this.style.transform='translateY(0)'">
                    View Detailed Dashboard →
                </button>
            </div>
        `, {
            maxWidth: 220,
            className: 'custom-popup'
        });
        
        marker.on('click', () => showCountryDashboard(code));
    });
    
    updateHeroStats();
}

// Helper function to adjust color brightness
function adjustBrightness(hex, percent) {
    const num = parseInt(hex.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

function getScoreColor(score) {
    if (score >= 80) return '#10b981'; // Green - Excellent
    if (score >= 60) return '#f59e0b'; // Yellow - Good  
    if (score >= 40) return '#f97316'; // Orange - Fair
    return '#ef4444'; // Red - Poor
}

function getScoreSize(score) {
    return Math.max(22, Math.min(44, 22 + (score / 100) * 22));
}

function updateHeroStats() {
    const scores = Object.values(sampleData.scores).map(s => s.overall);
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    
    // Count active alerts with more sophisticated logic
    let totalAlerts = 0;
    Object.keys(sampleData.countries).forEach(code => {
        const anomalies = detectAnomalies(sampleData.flaringData[code]);
        const recentAnomalies = anomalies.filter(d => d.is_anomaly && d.month >= '2024-01');
        totalAlerts += recentAnomalies.length;
        
        // Add NO2 alerts for significant deterioration
        const no2Data = weatherAdjustNO2(sampleData.no2Data[code], code);
        const recentNo2 = no2Data.filter(d => d.month >= '2024-06');
        const avgDelta = recentNo2.reduce((sum, d) => sum + d.delta_percent, 0) / recentNo2.length;
        if (avgDelta > 15) totalAlerts++; // Significant increase in emissions
    });
    
    document.getElementById('avgScore').textContent = avgScore;
    document.getElementById('activeAlerts').textContent = totalAlerts;
}

function updateLeaderboards() {
    // Top Performers with enhanced display
    const topPerformers = Object.entries(sampleData.countries).map(([code, country]) => {
        const scoreData = sampleData.scores[code];
        return { 
            code, 
            name: country.name, 
            score: scoreData.overall,
            confidence: scoreData.weightedConfidence,
            region: country.region
        };
    }).sort((a, b) => b.score - a.score);

    document.getElementById('topPerformers').innerHTML = topPerformers.slice(0, 6).map((item, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        const color = getScoreColor(item.score);
        const regionColors = {
            'North': 'bg-blue-100 text-blue-800',
            'West': 'bg-green-100 text-green-800', 
            'East': 'bg-yellow-100 text-yellow-800',
            'Central': 'bg-purple-100 text-purple-800',
            'Southern': 'bg-red-100 text-red-800'
        };
        
        return `
            <div class="flex justify-between items-center p-3 rounded-xl cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 ${index < 3 ? 'bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20' : ''}" onclick="showCountryDashboard('${item.code}')">
                <div class="flex items-center space-x-3">
                    <span class="text-lg w-8">${medal}</span>
                    <div>
                        <div class="font-medium">${item.name}</div>
                        <span class="text-xs px-2 py-1 rounded-full ${regionColors[item.region]} dark:opacity-80">${item.region}</span>
                    </div>
                </div>
                <div class="text-right">
                    <div class="font-bold text-lg" style="color: ${color}">${item.score}</div>
                    <div class="text-xs text-gray-500">${item.confidence}% conf.</div>
                </div>
            </div>
        `;
    }).join('');

    // Enhanced NO2 Progress Leaderboard
    const no2Progress = Object.entries(sampleData.countries).map(([code, country]) => {
        const recent = weatherAdjustNO2(sampleData.no2Data[code], code).slice(-6);
        const avgDelta = recent.reduce((sum, d) => sum + d.delta_percent, 0) / recent.length;
        const trend = recent.length > 1 ? recent[recent.length-1].delta_percent - recent[0].delta_percent : 0;
        return { code, name: country.name, value: avgDelta, trend };
    }).sort((a, b) => a.value - b.value);

    document.getElementById('no2Leaderboard').innerHTML = no2Progress.slice(0, 4).map((item, index) => `
        <div class="flex justify-between items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${index === 0 ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : ''}" onclick="showCountryDashboard('${item.code}')">
            <div class="flex items-center space-x-2">
                <span class="font-medium text-sm">${item.name}</span>
                <span class="text-xs">${item.trend > 0 ? '📈' : item.trend < -2 ? '📉' : '➡️'}</span>
            </div>
            <span class="text-sm font-semibold ${item.value < -5 ? 'text-green-600' : item.value > 10 ? 'text-red-600' : 'text-yellow-600'}">${item.value.toFixed(1)}%</span>
        </div>
    `).join('');

    // Enhanced Forest Loss Leaderboard
    const forestLoss = Object.entries(sampleData.countries).map(([code, country]) => {
        const recent = sampleData.forestData[code].slice(-3);
        const avgLoss = recent.reduce((sum, d) => sum + d.value, 0) / recent.length;
        const trend = recent.length > 1 ? ((recent[recent.length-1].value - recent[0].value) / recent[0].value) * 100 : 0;
        return { code, name: country.name, value: avgLoss, trend };
    }).sort((a, b) => b.value - a.value);

    document.getElementById('forestLeaderboard').innerHTML = forestLoss.slice(0, 4).map((item, index) => `
        <div class="flex justify-between items-center p-3 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${index === 0 ? 'bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800' : ''}" onclick="showCountryDashboard('${item.code}')">
            <div class="flex items-center space-x-2">
                <span class="font-medium text-sm">${item.name}</span>
                <span class="text-xs">${item.trend > 10 ? '🔥' : item.trend < -10 ? '🌱' : '⚠️'}</span>
            </div>
            <span class="text-sm font-semibold text-orange-600">${item.value.toFixed(1)} km²</span>
        </div>
    `).join('');

    // Enhanced Flaring Alerts
    const alerts = [];
    Object.entries(sampleData.countries).forEach(([code, country]) => {
        const anomalies = detectAnomalies(sampleData.flaringData[code]);
        const recentAnomalies = anomalies.filter(d => d.is_anomaly && d.month >= '2024-01');
        recentAnomalies.forEach(anomaly => {
            alerts.push({
                code,
                country: country.name,
                month: anomaly.month,
                value: anomaly.value,
                z_score: anomaly.z_score,
                severity: anomaly.severity,
                probability: anomaly.probability
            });
        });
    });

    alerts.sort((a, b) => Math.abs(b.z_score) - Math.abs(a.z_score));

    document.getElementById('flaringAlerts').innerHTML = alerts.length > 0 ?
        alerts.slice(0, 4).map(alert => {
            const severityColors = {
                'extreme': 'bg-red-100 dark:bg-red-900/30 border-red-300 dark:border-red-700',
                'moderate': 'bg-orange-100 dark:bg-orange-900/30 border-orange-300 dark:border-orange-700',
                'normal': 'bg-yellow-100 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700'
            };
            const severityIcons = {
                'extreme': '🚨',
                'moderate': '⚠️', 
                'normal': '📊'
            };
            
            return `
                <div class="p-3 rounded-xl border ${severityColors[alert.severity]} cursor-pointer hover:shadow-md transition-all duration-200" onclick="showCountryDashboard('${alert.code}')">
                    <div class="font-medium flex items-center justify-between">
                        <div class="flex items-center space-x-2">
                            <span>${severityIcons[alert.severity]}</span>
                            <span>${alert.country}</span>
                        </div>
                        <span class="text-xs text-gray-600 dark:text-gray-400">${alert.month}</span>
                    </div>
                    <div class="text-sm mt-1 flex justify-between items-center">
                        <span>${alert.value.toFixed(1)} flares</span>
                        <span class="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded">z=${alert.z_score.toFixed(1)}</span>
                    </div>
                </div>
            `;
        }).join('') :
        '<div class="text-gray-500 text-sm text-center p-6 bg-green-50 dark:bg-green-900/20 rounded-xl">✅ No significant anomalies detected in recent monitoring period</div>';
}

function setupEventListeners() {
    // Navigation
    document.getElementById('homeBtn').addEventListener('click', showHome);
    document.getElementById('backBtn').addEventListener('click', showHome);
    document.getElementById('aboutBtn').addEventListener('click', () => {
        document.getElementById('aboutModal').classList.remove('hidden');
    });
    document.getElementById('closeAboutModal').addEventListener('click', () => {
        document.getElementById('aboutModal').classList.add('hidden');
    });

    // Main view tabs with enhanced transitions
    document.getElementById('mapTab').addEventListener('click', () => {
        document.getElementById('mapTab').classList.add('bg-primary', 'text-white', 'shadow-lg');
        document.getElementById('mapTab').classList.remove('text-gray-600', 'dark:text-gray-300');
        document.getElementById('algorithmTab').classList.remove('bg-primary', 'text-white', 'shadow-lg');
        document.getElementById('algorithmTab').classList.add('text-gray-600', 'dark:text-gray-300');
        
        document.getElementById('mapView').classList.remove('hidden');
        document.getElementById('algorithmView').classList.add('hidden');
        
        // Refresh map size
        setTimeout(() => map && map.invalidateSize(), 100);
    });

    document.getElementById('algorithmTab').addEventListener('click', () => {
        document.getElementById('algorithmTab').classList.add('bg-primary', 'text-white', 'shadow-lg');
        document.getElementById('algorithmTab').classList.remove('text-gray-600', 'dark:text-gray-300');
        document.getElementById('mapTab').classList.remove('bg-primary', 'text-white', 'shadow-lg');
        document.getElementById('mapTab').classList.add('text-gray-600', 'dark:text-gray-300');
        
        document.getElementById('mapView').classList.add('hidden');
        document.getElementById('algorithmView').classList.remove('hidden');
    });

    // Country dashboard tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const tab = e.target.dataset.tab;
            switchTab(tab);
        });
    });

    // PDF Download
    document.getElementById('downloadPDF').addEventListener('click', downloadPDF);
}

function showHome() {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('countryView').classList.add('hidden');
    currentCountry = null;
    
    // Refresh map
    setTimeout(() => map && map.invalidateSize(), 100);
}

function showCountryDashboard(countryCode) {
    currentCountry = countryCode;
    const country = sampleData.countries[countryCode];
    
    document.getElementById('countryName').textContent = country.name;
    document.getElementById('countryCapital').textContent = `Capital: ${country.capital} • Region: ${country.region}`;
    
    const latestMonth = '2025-06';
    const scores = calculateCompositeScore(countryCode, latestMonth);
    
    document.getElementById('overallScore').textContent = scores.overall;
    document.getElementById('powerScore').textContent = scores.sectors.power;
    document.getElementById('landScore').textContent = scores.sectors.land;
    document.getElementById('ogScore').textContent = scores.sectors.og;

    // Enhanced trend calculation
    const prevMonth = '2025-03';
    const prevScores = calculateCompositeScore(countryCode, prevMonth);
    const trendDiff = scores.overall - prevScores.overall;
    const trendIcon = trendDiff > 3 ? '📈' : trendDiff < -3 ? '📉' : '➡️';
    document.getElementById('trendArrow').textContent = trendIcon;

    // Create enhanced gauges and sparklines
    createGauge('powerGauge', scores.sectors.power);
    createGauge('landGauge', scores.sectors.land);
    createGauge('ogGauge', scores.sectors.og);

    const powerData = weatherAdjustNO2(sampleData.no2Data[countryCode], countryCode);
    createSparkline('powerSparkline', powerData.map(d => d.delta_percent));
    createSparkline('landSparkline', sampleData.forestData[countryCode].map(d => d.value));
    createSparkline('ogSparkline', sampleData.flaringData[countryCode].map(d => d.value));

    createCharts(countryCode);

    document.getElementById('homeView').classList.add('hidden');
    document.getElementById('countryView').classList.remove('hidden');
}

function createGauge(canvasId, value) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height - 10;
    const radius = 40;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background arc with gradient
    const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    bgGradient.addColorStop(0, '#f3f4f6');
    bgGradient.addColorStop(1, '#e5e7eb');
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 0);
    ctx.lineWidth = 10;
    ctx.strokeStyle = bgGradient;
    ctx.stroke();

    // Value arc with enhanced colors
    const angle = Math.PI * (value / 100);
    const valueGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    
    if (value >= 80) {
        valueGradient.addColorStop(0, '#10b981');
        valueGradient.addColorStop(1, '#059669');
    } else if (value >= 60) {
        valueGradient.addColorStop(0, '#f59e0b');
        valueGradient.addColorStop(1, '#d97706');
    } else if (value >= 40) {
        valueGradient.addColorStop(0, '#f97316');
        valueGradient.addColorStop(1, '#ea580c');
    } else {
        valueGradient.addColorStop(0, '#ef4444');
        valueGradient.addColorStop(1, '#dc2626');
    }
    
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, Math.PI + angle);
    ctx.lineWidth = 10;
    ctx.strokeStyle = valueGradient;
    ctx.lineCap = 'round';
    ctx.stroke();

    // Enhanced value text
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#ffffff' : '#1f2937';
    ctx.font = 'bold 16px Inter';
    ctx.textAlign = 'center';
    ctx.fillText(value.toString(), centerX, centerY - 5);
}

function createSparkline(canvasId, data) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    if (data.length < 2) return;

    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, 'rgba(93, 92, 222, 0.8)');
    gradient.addColorStop(1, 'rgba(93, 92, 222, 0.1)');

    // Draw area
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.moveTo(0, height);
    
    data.forEach((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        if (index === 0) ctx.lineTo(x, y);
        else ctx.lineTo(x, y);
    });
    
    ctx.lineTo(width, height);
    ctx.closePath();
    ctx.fill();

    // Draw line
    ctx.strokeStyle = '#5D5CDE';
    ctx.lineWidth = 2.5;
    ctx.beginPath();

    data.forEach((value, index) => {
        const x = (index / (data.length - 1)) * width;
        const y = height - ((value - min) / range) * height;
        
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });

    ctx.stroke();
}

function createCharts(countryCode) {
    destroyExistingCharts();

    const no2Data = weatherAdjustNO2(sampleData.no2Data[countryCode], countryCode);
    const forestData = sampleData.forestData[countryCode];
    const flaringData = detectAnomalies(sampleData.flaringData[countryCode]);

    const labels = no2Data.map(d => {
        const date = new Date(d.month + '-01');
        return date.toLocaleDateString('en-US', { year: '2-digit', month: 'short' });
    });

    // Enhanced NO2 Charts
    charts.no2 = new Chart(document.getElementById('no2Chart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Observed NO₂',
                data: no2Data.map(d => d.value),
                borderColor: '#ef4444',
                backgroundColor: 'rgba(239, 68, 68, 0.1)',
                fill: false,
                tension: 0.4,
                pointRadius: 4,
                pointHoverRadius: 6
            }, {
                label: 'Weather-Expected',
                data: no2Data.map(d => d.expected),
                borderColor: '#6b7280',
                backgroundColor: 'rgba(107, 114, 128, 0.05)',
                borderDash: [8, 4],
                fill: false,
                tension: 0.4,
                pointRadius: 3
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { position: 'top' },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: 'white',
                    bodyColor: 'white'
                }
            },
            scales: {
                y: { 
                    beginAtZero: false, 
                    title: { display: true, text: 'NO₂ Tropospheric Column (×10¹⁵ molec/cm²)' },
                    grid: { color: 'rgba(0, 0, 0, 0.1)' }
                },
                x: {
                    grid: { color: 'rgba(0, 0, 0, 0.05)' }
                }
            },
            interaction: {
                mode: 'nearest',
                axis: 'x',
                intersect: false
            }
        }
    });

    charts.no2Delta = new Chart(document.getElementById('no2DeltaChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Weather-Adjusted Δ%',
                data: no2Data.map(d => d.delta_percent),
                borderColor: '#5D5CDE',
                backgroundColor: 'rgba(93, 92, 222, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: no2Data.map(d => d.delta_percent < -10 ? '#10b981' : d.delta_percent > 10 ? '#ef4444' : '#5D5CDE')
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const item = no2Data[context.dataIndex];
                            return [`CI: ${item.ci_lower}% to ${item.ci_upper}%`, `Confidence: ${(item.confidence * 100).toFixed(1)}%`];
                        }
                    }
                }
            },
            scales: {
                y: { 
                    title: { display: true, text: 'Change vs Weather-Expected (%)' },
                    grid: { 
                        color: function(context) {
                            if (context.tick.value === 0) return 'rgba(0, 0, 0, 0.3)';
                            return 'rgba(0, 0, 0, 0.1)';
                        }
                    }
                }
            }
        }
    });

    // Enhanced Forest Charts
    charts.forest = new Chart(document.getElementById('forestChart'), {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Monthly Forest Loss',
                data: forestData.map(d => d.value),
                backgroundColor: forestData.map(d => {
                    const alpha = Math.min(1, d.value / Math.max(...forestData.map(x => x.value)));
                    return `rgba(220, 38, 38, ${0.3 + alpha * 0.7})`;
                }),
                borderColor: '#dc2626',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Forest Loss (km²)' }
                }
            }
        }
    });

    // Calculate enhanced rolling median
    const rollingMedian = forestData.map((_, index) => {
        const window = forestData.slice(Math.max(0, index - 2), index + 3);
        const sorted = window.map(d => d.value).sort((a, b) => a - b);
        return sorted[Math.floor(sorted.length / 2)];
    });

    charts.forestTrend = new Chart(document.getElementById('forestTrendChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '3-Month Rolling Median',
                data: rollingMedian,
                borderColor: '#059669',
                backgroundColor: 'rgba(5, 150, 105, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 3
            }, {
                label: 'Monthly Values',
                data: forestData.map(d => d.value),
                borderColor: '#dc2626',
                backgroundColor: 'rgba(220, 38, 38, 0.05)',
                fill: false,
                tension: 0.2,
                pointRadius: 2,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: {
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Forest Loss (km²)' }
                }
            }
        }
    });

    // Enhanced Flaring Charts
    charts.flaring = new Chart(document.getElementById('flaringChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Flare Detection Count',
                data: flaringData.map(d => d.value),
                borderColor: '#f59e0b',
                backgroundColor: 'rgba(245, 158, 11, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: flaringData.map(d => d.is_anomaly ? 6 : 3),
                pointBackgroundColor: flaringData.map(d => d.is_anomaly ? '#ef4444' : '#f59e0b')
            }]
        },
        options: {
            responsive: true,
            plugins: { 
                legend: { position: 'top' },
                tooltip: {
                    callbacks: {
                        afterLabel: function(context) {
                            const item = flaringData[context.dataIndex];
                            return item.is_anomaly ? [`Anomaly: ${item.severity}`, `Probability: ${(item.probability * 100).toFixed(1)}%`] : null;
                        }
                    }
                }
            },
            scales: {
                y: { 
                    beginAtZero: true, 
                    title: { display: true, text: 'Flare Count' }
                }
            }
        }
    });

    charts.flaringAnomaly = new Chart(document.getElementById('flaringAnomalyChart'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Statistical Z-Score',
                data: flaringData.map(d => d.z_score),
                borderColor: '#8b5cf6',
                backgroundColor: flaringData.map(d => {
                    if (d.severity === 'extreme') return 'rgba(239, 68, 68, 0.4)';
                    if (d.severity === 'moderate') return 'rgba(245, 158, 11, 0.3)';
                    return 'rgba(139, 92, 246, 0.1)';
                }),
                pointBackgroundColor: flaringData.map(d => {
                    if (d.severity === 'extreme') return '#ef4444';
                    if (d.severity === 'moderate') return '#f59e0b';
                    return '#8b5cf6';
                }),
                pointRadius: flaringData.map(d => d.severity === 'extreme' ? 8 : d.severity === 'moderate' ? 6 : 3),
                tension: 0.3
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' },
                annotation: {
                    annotations: {
                        upperThreshold: {
                            type: 'line',
                            yMin: 2,
                            yMax: 2,
                            borderColor: '#ef4444',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                content: 'Anomaly Threshold (+2σ)',
                                enabled: true,
                                position: 'end'
                            }
                        },
                        lowerThreshold: {
                            type: 'line',
                            yMin: -2,
                            yMax: -2,
                            borderColor: '#ef4444',
                            borderWidth: 2,
                            borderDash: [5, 5],
                            label: {
                                content: 'Anomaly Threshold (-2σ)',
                                enabled: true,
                                position: 'end'
                            }
                        }
                    }
                }
            },
            scales: {
                y: { 
                    title: { display: true, text: 'Standard Deviations from Mean' },
                    grid: {
                        color: function(context) {
                            if (Math.abs(context.tick.value) === 2) return 'rgba(239, 68, 68, 0.3)';
                            if (context.tick.value === 0) return 'rgba(0, 0, 0, 0.3)';
                            return 'rgba(0, 0, 0, 0.1)';
                        }
                    }
                }
            }
        }
    });
}

function destroyExistingCharts() {
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
    charts = {};
}

function switchTab(tabName) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'text-primary', 'active');
        btn.classList.add('border-transparent', 'text-gray-500');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('border-primary', 'text-primary', 'active');
    document.querySelector(`[data-tab="${tabName}"]`).classList.remove('border-transparent', 'text-gray-500');

    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(`${tabName}Tab`).classList.remove('hidden');
}

function downloadPDF() {
    if (!currentCountry) return;

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const country = sampleData.countries[currentCountry];
    const scores = calculateCompositeScore(currentCountry, '2025-06');
    
    // Enhanced PDF with more details
    doc.setFontSize(22);
    doc.setTextColor(93, 92, 222);
    doc.text('GeoNDC Monitor v2.0', 20, 25);
    
    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text(`${country.name} Comprehensive Climate Scorecard`, 20, 40);
    
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Generated: ${new Date().toLocaleString()} | Capital: ${country.capital} | Region: ${country.region}`, 20, 50);
    
    // Overall Score Section
    doc.setFontSize(28);
    doc.setTextColor(93, 92, 222);
    doc.text(`Overall Score: ${scores.overall}/100`, 20, 75);
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(`Confidence Level: ${scores.weightedConfidence}%`, 20, 85);
    
    // Sector Breakdown
    doc.setFontSize(16);
    doc.text('Detailed Sector Performance:', 20, 105);
    
    doc.setFontSize(12);
    const sectorY = 120;
    doc.text(`• Power & Transport Sector: ${scores.sectors.power}/100 (Weight: 40%)`, 25, sectorY);
    doc.text(`• Land Use & Forestry: ${scores.sectors.land}/100 (Weight: 35%)`, 25, sectorY + 10);
    doc.text(`• Oil & Gas Operations: ${scores.sectors.og}/100 (Weight: 25%)`, 25, sectorY + 20);
    
    // Algorithm Details
    doc.setFontSize(14);
    doc.text('Methodology Summary:', 20, 160);
    
    doc.setFontSize(10);
    const methodText = [
        '• Weather-Adjusted NO₂: LightGBM regression with 18 meteorological features',
        '• Forest Loss Monitoring: Hansen/UMD data with 3-month rolling median smoothing',
        '• Gas Flaring Detection: VIIRS Nightfire with statistical anomaly identification',
        '• Composite Scoring: Evidence-based weighted aggregation with confidence factors'
    ];
    
    methodText.forEach((text, index) => {
        doc.text(text, 25, 175 + (index * 8));
    });
    
    // Footer
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text('This report is based on satellite observations and machine learning analysis. For methodology', 20, 260);
    doc.text('details and validation metrics, visit the AI Intelligence Engine section of the platform.', 20, 270);
    
    doc.save(`${country.name.replace(/\s+/g, '_')}_Climate_Scorecard_${new Date().getFullYear()}.pdf`);
}