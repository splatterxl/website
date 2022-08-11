/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      // screens: {
      //   xxs: '320px',
      //   'xs-h': {
      //     raw: '(min-height: 467px)',
      //   },
      //   xs: '467px',
      // },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
};
