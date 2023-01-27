/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellowcustom: "#e9b330"
      },
      spacing: {
        '500px': '500px',
        '900px': '900px',
        '664px' : '664px'
      }
    },
  },
  plugins: [],
}