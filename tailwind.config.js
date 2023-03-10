/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/*.html', './src/app/*.js'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1200px',
    },

    extend: {
      colors: {
        itemsColors: '#B3B3B3',
        itemsColors2: '#A64AEE',
        subColors: '#7373A0',
        darkBg: '#12273F',
      },
    },
  },
  plugins: [],
};
