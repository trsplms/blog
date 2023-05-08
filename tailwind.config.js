/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    colors: {
      white: "#E4E5E0",
      black: "#262626",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
