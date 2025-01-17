/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      animation: {
        toLeft: 'toLeft 0.5s ease-in-out',
        toRight: 'toRight 0.5s ease-in-out',
        landIn: 'landIn 0.5s ease-in-out',
      },
      keyframes: {
        toLeft: {
          from: {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        toRight: {
          from: {
            transform: 'translateX(-100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateX(0)',
            opacity: 1,
          },
        },
        landIn: {
          from: {
            transform: 'translateY(-100%)',
            opacity: 0,
          },
          to: {
            transform: 'translateY(auto)',
            opacity: 'auto',
          },
        },
      },
    },
  },
  plugins: [],
};
