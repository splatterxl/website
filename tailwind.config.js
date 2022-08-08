/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: '467px',
      xxs: '320px',
      'xs-h': {
        raw: '(min-height: 467px)',
      },
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]'],
};
