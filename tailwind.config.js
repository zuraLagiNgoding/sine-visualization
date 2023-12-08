/** @type {import('tailwindcss').Config} */

const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fffff",
        secondary: "#242424",
        third: "#D9D9D9",

        accent: "#00BFE9",
      },
      dropShadow: {
        lightBlue: "0 35px 35px rgba(69, 144, 246, 0.8)",
        lightBlueSmall: "0 2px 25px rgba(69, 144, 246, 0.8)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
