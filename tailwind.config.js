/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        drkbg: "#151515",
        drkcol: "#d3d3d3",
        drkbg2: "#181a1f",
        drkbrd: "rgba(136, 136, 136, 0.3)",
        hvrcol: "rgba(35,39,47,.05)",
        drkhvrcol: "rgba(246,247,249,.05)",
        gradPink: "#e71e64",
        gradOrange: "#e86026",
      },
      screens: {
        xxs: "375px",
        xs: "480px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

