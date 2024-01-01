/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  screens: {
    xs: { min: "100px", max: "480px" },
    ss: { min: "481px", max: "620px" },
    sm: { min: "621px", max: "799px" },
    md: { min: "800px", max: "1060px" },
    lg: { min: "1061px", max: "1300px" },
    xl: { min: "1301px", max: "1700px" },
    xll: { min: "1701px", max: "1800px"},
  },
  colors: {
    bgPrimary: "#000000",
    bgSecondary: "#1c1c1c",
    bgMuted: "#242424",
    bgLight: "#d7fd52",
    textBlack: "#000000",
    textWhite: "#FFFFFF",
  },
}

