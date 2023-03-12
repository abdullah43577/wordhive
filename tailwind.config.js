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
        textColorsWhiteBg: '#343A40',
        headingsIconsWhiteBg: '#FF7F50',
        innerIconColorWhite: '#D3D3D3',
        historyContainerEl: '#F9F6EF',
        darkBg: '#000',
        bullet: '#a64aee',
        examples: '#2e5bff',
        txtColor: '#333333',
      },
    },
  },
  plugins: [],
};
