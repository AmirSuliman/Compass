/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'], // Update with the correct file extensions and paths
  theme: {
    extend: {
      colors: {
        Yellow: '#FDC546',
        'lighter-yellow': '#FDC5467A',
        'light-gray': '#EDEDED',
        'medium-gray': '#79747E',
        'light-blue': '#3180F5',
        'deep-gray': '#ECECEC',
        'steel-blue-gray': '#8EA1B3',
        tomato: '#FF3636B0',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
