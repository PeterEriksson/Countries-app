module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { mainFont: ["Nunito Sans"] },
      colors: {
        mainDark: "#202C37",
        mainDarkGrayish: "#333E48",
        borderColor: "#2B3945",
      },
      screens: {
        smallMediumBreakpoint: "660px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
