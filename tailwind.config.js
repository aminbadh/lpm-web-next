module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        '120': '30rem',
      },
      backgroundImage: {
        'lpm-hallway': "url('/hallway.jpg')",
      },
      fontFamily: {
        'body': ['Montserrat', 'ui-sans-serif'],
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
