/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        primary:"#22c55e",
        secondary:"#121212",
        cardprimary:"#2D46B9",
        cardsecondary:"#E11185",
        cardBody:"#202020"
      },
      
      fontFamily:{
        cblack: ["Circular-Spotify-Black", "sans-serif"],
        cblackitalic: ["Circular-Spotify-Black-Italic", "sans-serif"],
        cbold: ["Circular-Spotify-Bold", "sans-serif"],
        cbook: ["Circular-Spotify-Book", "sans-serif"],
        cbookitalic: ["Circular-Spotify-Book-Italic", "sans-serif"],
        clight: ["Circular-Spotify-Light", "sans-serif"],
        cmedium: ["Circular-Spotify-Medium", "sans-serif"],
        cmediumitalic: ["Circular-Spotify-Medium-Italic", "sans-serif"]

      }


      
    },
  },
  plugins: [],
}

