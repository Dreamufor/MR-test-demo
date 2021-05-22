const customColors = {
  background: {
    header: '#F6F6F7',
  },
  fontColor: {
    light: '#888888',
    dark: '#222222',
  },
  required: {
    star: '#C90000',
  },
  border: {
    lightGray: '#CCCCCC',
    darkGray: '#222222',
  },
};

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: customColors,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
