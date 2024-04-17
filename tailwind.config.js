/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontWeight: {
        800: "800px",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],

};
