/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerbg: '#131921',
        searchicon: '#cd9042',
        white: 'white'
      }
    },
  },
  plugins: [],
}
