/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        // This effect increases the size of the project card it is applied to by 10% upon hover. It is applied to all project cards
        // through the ProjectCard.js props file used to display projects in Portfolio.js. The animation takes .2 seconds to complete 
        // and the card remains zoomed for as long as the user hovers over it.
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

