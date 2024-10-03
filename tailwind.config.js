/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.twig"
  ],
  safelist: [
    ...[...Array(10).keys()].flatMap(i => [`md:w-[${i*11}rem]`]),
    ...[...Array(10).keys()].flatMap(i => [`w-[${i*8}rem]`]), 
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Roboto, ui-sans-serif",
      },
      animation: {
        'slide-left': 'slide-left 24s linear infinite', 
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}

