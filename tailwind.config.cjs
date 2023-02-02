/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    'index.html'
  ],
  theme: {
    extend: {
      backgroundColor : {
        principal : "#84a98c",
        secundary : '#cad2c5'
      },
      backgroundImage : {
        'perguntas' : "url('./src/assets/answers.svg')",
        'home' : "url('./src/assets/HomePage.svg')"
      }
    },
  },
  plugins: [],
}
