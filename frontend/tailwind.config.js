/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white':'#ffffff',

      },
      fontFamily:{
        poppins:['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

