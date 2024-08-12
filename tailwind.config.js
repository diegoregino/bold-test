/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bold-blue': '#121e6c',
        'bold-red': {
          normal: '#ee424e',
          hover: '#ce3a43',
        },
        'bold-light-grey': '#f3f3f3',
        'bold-dark-grey': '#606060',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
