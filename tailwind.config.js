/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        bgGray: "#434343",
        bgSecondary: "#033454",
        green: "#004b51",
        header: "rgb(2, 95, 103)",
        bodyColor: "#076971",
        footerSecondary: "#093c54",
        footerBg: "#021830",
      },
    },
  },
  plugins: [],
};
