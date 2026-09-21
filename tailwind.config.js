/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#111111',
          50: '#f5f5f3',
          100: '#ebebe9',
          200: '#d4d4d2',
          300: '#b0b0ae',
          400: '#8a8a88',
          500: '#6b6b6b',
          600: '#4a4a4a',
          700: '#2e2e2e',
          800: '#1c1c1c',
          900: '#111111',
          950: '#0a0a0a',
        },
        paper: '#FFFFFF',
        mist: '#F5F5F3',
        line: '#E5E5E5',
        accent: {
          DEFAULT: '#C8963E',
          light: '#D9AA55',
          dark: '#A87A2E',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '10xl': ['8rem', { lineHeight: '0.9' }],
        '11xl': ['10rem', { lineHeight: '0.85' }],
        '12xl': ['12rem', { lineHeight: '0.8' }],
      },
      letterSpacing: {
        'ultra-tight': '-0.04em',
        tight: '-0.02em',
        wide2: '0.1em',
        wide3: '0.2em',
      },
      animation: {
        'marquee-left': 'marquee-left 40s linear infinite',
        'marquee-right': 'marquee-right 40s linear infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
      },
      keyframes: {
        'marquee-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-indicator': {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(8px)', opacity: '0.5' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
