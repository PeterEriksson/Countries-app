module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { mainFont: ["Nunito Sans"] },
      colors: {
        whiteSmokeBg: "#f5f5f5",
        mainDark: "#202C37",
        mainDarkGrayish: "#333E48",
        mainLightBg: "#d4d4d4",
        borderColor: "#2B3945",
        lightBorderColor: "#bababa",
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
