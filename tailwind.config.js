/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: '#ddf88b',
                    main: '#b4ef02',
                    dark: '#80aa01',
                    contrast: '#000000',
                },
                secondary: {
                    light: '#af91fa',
                    main: '#875bf7',
                    dark: '#6041af',
                    contrast: '#000000',
                },
            },
            fontSize: {
                8: '8px',
                10: '10px',
                12: '12px',
                14: '14px',
                16: '16px',
                18: '18px',
                20: '20px',
                24: '24px',
                28: '28px',
                32: '32px',
                34: '34px',
                36: '36px',
                38: '38px',
                40: '40px',
                44: '44px',
                48: '48px',
            },
            fontFamily: {
                ppnm: ['PPNeueMontreal-Regular', 'sans-serif'],
                'ppnm-bold': ['PPNeueMontreal-Bold', 'sans-serif'],
                'ppnm-medium': ['PPNeueMontreal-Medium', 'sans-serif'],
                'ppnm-thin': ['PPNeueMontreal-Thin', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
