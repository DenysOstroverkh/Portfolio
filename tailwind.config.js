/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./components/layouts/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        xs2: "360px",
        xs3: "0px",
      },
      spacing: {
        "1em": "1em",
      },
    },
  },
  plugins: [],
};
