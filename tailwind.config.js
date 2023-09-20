const plugin = require('tailwindcss/plugin')

module.exports = {
  // prefix: 'tw-',
  purge: [],
  mode: 'jit',
  purge: [
    './public/**/*.html',
    'layout/*.liquid',
    'sections/*.liquid',
    'snippets/*.liquid',
    'templates/*.liquid',
    'templates/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme=> ({

      }),
      fontSize: {
      },
      lineHeight: {
      },
      screens: {
        'mobile': { 'max': '640px' }
      }
    },
  },
  variants: {
    extend: {
      opacity: ['group-hover'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
