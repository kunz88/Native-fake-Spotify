/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        cblack: ["Circular-Spotify-Black", "sans-serif"],
        cblackitalic: ["Circular-Spotify-Black-Italic", "sans-serif"],
        cbold: ["Circular-Spotify-Bold", "sans-serif"],
        cbook: ["Circular-Spotify-Book", "sans-serif"],
        cbookitalic: ["Circular-Spotify-Book-Italic", "sans-serif"],
        cblack: ["Circular-Spotify-Black", "sans-serif"],
        cblack: ["Circular-Spotify-Black", "sans-serif"]

      }


      
    },
  },
  plugins: [],
}

