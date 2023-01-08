/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { 
        montserrat: ['Montserrat'],handwriting: ['Moon Dance'],
      },
    
    },
  },

  variants: {
    extend: {},
  },
  
  plugins: [],
};
