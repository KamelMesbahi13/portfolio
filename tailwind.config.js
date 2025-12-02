/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // 👈 Add this line
  theme: {
    extend: {
      colors: {
        mainColor: "#0C2B4E",
        secondColor: "#F87B1B",
        white: "#ffffff",
        red: "#ff0f0f",
        darkBg: "#151312",
        lightBg: "#f5f5f7",
      },
    },
  },
  plugins: [],
};
