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
        jost:['Jost', "sans-serif"],
        poppin:['Poppins', "sans-serif"]
      },
      colors: {
        deepgreen: "rgb(141,149,146)",
        yellowbg:"rgb(245,239,223)",
        bluebg:"rgb(142,174,188)"
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
