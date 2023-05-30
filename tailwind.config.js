/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primarypink:'#ec4899',
        neutralbg:  '#f5f5f5',
        darkbg: '#27272a',
        lightred: '#84cc16',
      }
    },
  },
  variants: {},
  plugins: [],
}




// "build:tailwind": "tailwindcss build index.css -o index.css --config tailwind.config.js",