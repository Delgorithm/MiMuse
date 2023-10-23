/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xsm': '400px',
        'xxsm': '370px', 
        'xxxsm': '320px',
      },
      colors: {
        'blackSpotify': '#191414',
        'greenSpotify': '#1DB954'
      }
    },
  },
  plugins: [],
}