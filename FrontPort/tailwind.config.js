/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
    ],
  theme: {
    extend: {
      colors:{
        first_color: "#f2f9f1",  
        second_color:"#ddeedf",
        third_color: "#b6cdbd",
        fourth_color: "#5c715e", 

        comp_first_color: "#734444",  
        comp_second_color:"#c37857",
        comp_third_color: "#eeedbe",
        comp_fourth_color: "#99b27f", 
        
      },
      fontFamily: {
        customFont: ["Playfair Display", "serif"],
        // Add more custom font families as needed
      },

    },
  },
  plugins: [],
}

