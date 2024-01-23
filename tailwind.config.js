module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 400: "#adb2b1", "900_14": "#21212114" },
        teal: { 600: "#1d8b7c" },
        black: { 900: "#000000", "900_dd": "#000000dd" },
        blue_gray: { 50: "#eaf0f7", 800: "#3d544d" },
        yellow: { 900: "#fe7826" },
        light_green: { 50: "#eff8f0" },
        white: { A700: "#ffffff" },
        lime: { 100: "#ecffb6" },
      },
      fontFamily: { poppins: "Poppins", mada: "Mada", mplus: "M PLUS 1" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
