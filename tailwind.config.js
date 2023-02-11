/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./build/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Inter", "sans-serif"],
        comfortaa: ["Comfortaa", "cursive"],
      },
      colors: {
        deepgreen: "rgb(141,149,146)",
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
