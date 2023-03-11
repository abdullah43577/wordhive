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
        itemsColors4: '#A64AEE',
        itemsColors2: '#2A3439',
        subColors: '#7373A0',
        darkBg: '#111111',
      },
    },
  },
  plugins: [],
};
