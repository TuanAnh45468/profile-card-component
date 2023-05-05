/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors:{
      "dark-cyan": "hsl(185, 75%, 39%)",
      "dark-desaturated-blue": "hsl(229, 23%, 23%)",
      "dark-grayish-blue": "hsl(227, 10%, 46%)",
      "dark-gray": "hsl(0, 0%, 59%)"
    },
    screens:{
      mobile: "375px",
      laptop: "1440px"
    },
    extend: {
      fontFamily:{
        "kumbh-sans": ['Kumbh Sans', 'sans-serif']
      },
      fontWeight:{
        regular: 400,
        bold: 700
      }
    },
  },
  plugins: [],
}

