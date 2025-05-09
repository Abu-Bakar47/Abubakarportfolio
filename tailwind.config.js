/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        indigo: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#8098fb',
          500: '#6573f6',
          600: '#4f52ea',
          700: '#4241cc',
          800: '#3736a5',
          900: '#303283',
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
      },
      spacing: {
        '128': '32rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 6px 0 rgba(0, 0, 0, 0.1)',
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [],
};