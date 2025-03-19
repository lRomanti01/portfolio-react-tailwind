/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  plugins: [flowbite.plugin()],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0" },
        },
        typingOut: {
          "0%": { width: "50%" },
          "50%": { width: "0" },
        },
      },
      animation: {
        typing: "typing .5s forwards",
        typingOut: "typingOut 1s forwards",
        typingInfinite: "typing 4s infinite steps(20)",
        fastPulse: "pulse 1.5s infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

