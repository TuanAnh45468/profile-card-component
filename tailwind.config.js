/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./dist/**/*.{html,js}"],
  theme: {
    colors: {
      "dark-cyan": "#19A1AD",
      "dark-desaturated-blue": "hsl(229, 23%, 23%)",
      "dark-grayish-blue": "hsl(227, 10%, 46%)",
      "dark-gray": "hsl(0, 0%, 59%)",
      white: "#fff",
    },
    screens: {
      mobile: "375px",
      laptop: "1440px",
    },
    extend: {
      backgroundImage: {
        "pattern-bottom": "url(./images/bg-pattern-bottom.svg)",
        "pattern-top": "url(./images/bg-pattern-top.svg)",
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
    },
  },
  plugins: [],
};
