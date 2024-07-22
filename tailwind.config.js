/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'dark-blue': "#111E4C",
      'dark-blue-border': "rgba(17, 30, 76, 0.500)",
      'light-blue': "#009DFF",
      'gray': "#A7B7E7",
      "btn-blue": "rgba(0, 157, 255, 0.15)",
      "light-gray": "rgba(167, 183, 231, 1)",
      "green-money": "#9FD356",
      "madder": "rgba(227, 23, 10, 0.25)",
      "madder-txt": "rgb(227, 23, 10)",
      "burgundy": "rgba(137, 6, 32, 0.30)",
      "delete": "rgba(219, 43, 57, 1)"
    }
  },
  plugins: [],
}