/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          '0%, 100%': {transform: 'scale(1.1)'},
        },
      },
      animation: {
        zoom: 'zoom .2s infinite',
      },
    },
  },
  
  plugins: [],
}

