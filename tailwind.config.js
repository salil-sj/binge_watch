/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'loader': 'loader 0.8s infinite',
      },
      keyframes: {
        'loader': {
          '0%': {
            width: 20,
            transform: 'translate3d(0, 0, 0)',
          },
          '100%': {
            width: '50%',
            transform: 'translate3d(100%, 0, 0)',
          },
        },
      },
    },
  },
  plugins: [],
}

