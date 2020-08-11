const { fontFamily, colors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
    whitelist: ['mode-dark'],
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: colors.blue['400'],
        'primary-dark': colors.gray['900'],
        'text-primary': colors.gray['900'],
        'text-primary-dark': colors.gray['300'],
        // secondary: colors.white,
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode')()],
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
    ],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
  },
}
