module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#201853',
      'secondary': '#15ff99'
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
