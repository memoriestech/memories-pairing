/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          300: '#99bbeb',
          400: '#6f9ee2',
          500: '#4482da',
          600: '#2768c4',
          700: '#1e519a',
          800: '#0a3f7a',
        },
        plight: {
          400: '#c9e0fc',
          500: '#98c4fa',
          600: '#67a8f8',
          700: '#378cf5',
        },
        softair: {
          400: '#f7f8fa',
          500: '#e8f0f8',
          600: '#c1d7ec',
          700: '#9abde0',
        },
        mg: {
          400: '#fbcd69',
          500: '#fabc37',
          600: '#f8ab06',
        },
        grey: {
          10: '#e6e6e6',
          20: '#cccccc',
          30: '#a8a8a8',
          40: '#EBEBEB',
          50: '#979797',
          60: '#666666',
          90: '#030303',
        },
        red: {
          200: '#FDEDED',
          300: '#dc9191',
          400: '#d06a6a',
          500: '#c44343',
          600: '#a13333',
          700: '#632929',
        },
      },
    },
  },
  plugins: [],
}
