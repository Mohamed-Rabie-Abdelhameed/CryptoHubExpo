/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#3691ff",
        light: "#f3f4f6",
        dark: "#090909",
      },
      fontFamily: {
        'sans': ["Rubik", "sans-serif"],
        'display': ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
};
