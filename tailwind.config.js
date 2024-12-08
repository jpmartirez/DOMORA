/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'building': "url('/icons/building.png')"
      }
    },
  },
  plugins: [],
}