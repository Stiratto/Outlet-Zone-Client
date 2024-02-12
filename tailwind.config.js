/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(-40%)" },
          "100%": { transform: "translateX(80%)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
