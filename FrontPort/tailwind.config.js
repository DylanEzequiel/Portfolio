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
        
      }
    },
  },
  plugins: [],
}

