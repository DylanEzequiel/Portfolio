/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");

export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
    ],
  theme: {
    extend: {
      colors:{
       
        
      },
      fontFamily: {
        customFont: ["Playfair Display", "serif"],
        // Add more custom font families as needed
      },

    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

