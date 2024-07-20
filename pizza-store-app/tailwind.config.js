/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Roboto Mono, monospace" },
    extend: {
      fontFamily: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      colors: {
        pizza: "#123123",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
