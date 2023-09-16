/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgc: "#212529",
        primary: "#5dc7c2",
        secondary: "rgb(46, 50, 65)",
      },
      fontFamily: {
        oswald: ["Oswald", "sansPoppins-serif"],
      },
    },
  },
  plugins: [],
};
