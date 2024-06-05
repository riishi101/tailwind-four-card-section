import("tailwindcss").Config;
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        red: "#ea5353",
        cyan: "#45d3d3",
        orange: "#fcaf4a",
        blue: "#549ef2",
        very: "#4c4e61",
        grayish: "#a3a5ae",
        lightgray: "#fafafa",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
