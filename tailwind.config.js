/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/*.vue", "./app.vue"],
  theme: {
    colors: {
      'purple': "#7e5bef",
      'pink': "#ff49db",
      'blue-light': "#add8e6",
      'orange': "#ff7f50",
      'green': "#3cb371",
      'yellow': "#ffc82c",
      'gray-dark': "#333333",
      'gray-light': "#f5f5f5",
      'gray': "#8492a6",
      'white': '#ffffff'
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
