/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mine-shaft': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#2d2d2d',
        },
        'fuchsia-pink': {
          '50': '#fcf4ff',
          '100': '#f9e7ff',
          '200': '#f3cfff',
          '300': '#eda8ff',
          '400': '#e375fd',
          '500': '#d241f4',
          '600': '#c02adf',
          '700': '#9c17b4',
          '800': '#811593',
          '900': '#6d1778',
          '950': '#470250',
        },
        'blue-ribbon': {
          '50': '#edf8ff',
          '100': '#d6eeff',
          '200': '#b5e3ff',
          '300': '#83d4ff',
          '400': '#48baff',
          '500': '#1e97ff',
          '600': '#0677ff',
          '700': '#0063ff',
          '800': '#084cc5',
          '900': '#0d449b',
          '950': '#0e2a5d',
        },



      }
    },
    screens: {
      'xsm': '350px',
      'xs': '476px',
      'sm': '640px',
      'md': '768px',
      'bs': '900px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',


      '2xl-mx': { 'max': '1535px' },
      'xl-mx': { 'max': '1255px' },
      'lg-mx': { 'max': '1023px' },
      'bs-mx': { 'max': '899px' },
      'md-mx': { 'max': '767px' },
      'sm-mx': { 'max': '639px' },
      'xs-mx': { 'max': '475px' },
      'xsm-mx': { 'max': '349px' },
    },
  },


  plugins: [],
}