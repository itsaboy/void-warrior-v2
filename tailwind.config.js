/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html, js}", "./src/assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Titillium",
        secondary: "Medieval"
      }
    },
  },
  plugins: [],
}