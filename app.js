
tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#5D5CDE',
                secondary: '#818cf8',
                accent: '#06b6d4',
                success: '#10b981',
                warning: '#f59e0b',
                danger: '#ef4444'
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slideIn': 'slideIn 0.5s ease-out',
                'fadeIn': 'fadeIn 0.3s ease-in',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' }
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(93, 92, 222, 0.5)' },
                    '100%': { boxShadow: '0 0 20px rgba(93, 92, 222, 0.8)' }
                },
                slideIn: {
                    '0%': { transform: 'translateX(-100%)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                }
            }
        }
    }
}
