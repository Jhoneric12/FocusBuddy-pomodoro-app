/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-color': '#27374D',
      'secondary-color': '#526D82',
      'font-color': '#DDE6ED',
      'font-title': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
}