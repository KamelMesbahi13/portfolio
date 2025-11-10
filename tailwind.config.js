/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // You can add more colors here
        mainColor: "#0C2B4E",
        secondColor: "#F87B1B",
        white: "#ffffff",
        red: "#ff0f0f",
      },
    },
  },
  plugins: [],
};
