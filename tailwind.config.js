/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
			colors: {
				primary: "#151515",
				secondary: "#242424",
				third: "#D9D9D9",

				accent: "#00BFE9",
			},
			dropShadow: {
				'lightBlue': '0 35px 35px rgba(69, 144, 246, 0.8)',
			  }
		},
  },
  plugins: [],
}