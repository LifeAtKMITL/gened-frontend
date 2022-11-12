/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff8934',
        secondary: '#FF9201',
        body: '#848694',
        background: '#141519',
        card: '#242227',
        placeholder: '#959595',
      },
    },
  },
  plugins: [],
};
