/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0F191E",
      },
      fontFamily: {
        Poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
