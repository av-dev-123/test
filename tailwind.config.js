/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:'#21A9FF',
          dark:'#0081D3'
        }
      }
    },
  },
  plugins: [],
}

