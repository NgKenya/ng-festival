/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        "ng-red": "#DD0031",
        "faded-red": "#FEF2F2",
        "ng-pink": "#F87171",
        "coming-soon": "#FAFBFD",
        "ng-white": "#FFFFFF",
        "ng-grey": "#F8FAFC",
        "ng-dark-blue": "#03071E",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
