/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'uber':"url('/src/img/bguber.png')",
        'city':"url('/src/img/bg-city.png')",
      }
    },
  },
  plugins: [],
}

