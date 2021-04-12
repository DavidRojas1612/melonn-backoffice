module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '120': '32rem',
        '150': '50rem',
        '240': '65rem',
      }
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#201853',
      'secondary': '#15ff99'
     }),
     borderColor: theme => ({
      ...theme('colors'),
      'primary': '#201853',
      'secondary': '#15ff99'
     }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
