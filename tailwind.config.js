/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "3xl": { max: "1535px" },
      "2xl": { max: "1447px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md1: { max: "867px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      smxl: { max: "480px" },
      sm2xl: { max: "350px" },
    },
    important: true,
  },
  plugins: [],
};
