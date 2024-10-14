/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/*.twig"
  ],
  safelist: [
    'list-image-checkmark',
    'list-image-checkright',
    'bg-black',
    'bg-neutral-950',
    'bg-neutral-900',
    'bg-neutral-800',
    'bg-neutral-700',
    ...[...Array(10).keys()].flatMap(i => [`md:w-[${i*11}rem]`]),
    ...[...Array(10).keys()].flatMap(i => [`w-[${i*8}rem]`]),
    ...[...Array(3).keys()].flatMap(i => [`md:max-h-[${i*10+60}vh]`]), //60,70,80
  ],
  theme: {
    extend: {
      fontFamily: {
        display: "Roboto, ui-sans-serif",
      },
      letterSpacing: {
        wider: '.2em',
        widest: '.4em',
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
      listStyleImage: { 
        checkmark: "url('../images/icons/tick.svg')",
        checkright: "url('../images/icons/checkright.svg')",
      },
    },
  },
  plugins: [],
}

