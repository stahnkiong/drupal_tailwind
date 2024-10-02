/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.twig"
  ],
  theme: {
    extend: {
      fontFamily: {
        body: "'Open Sans', ui-sans-serif",
      }
    },
  },
  plugins: [],
}

