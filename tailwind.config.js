/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Inter", "sans-serif"],
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
