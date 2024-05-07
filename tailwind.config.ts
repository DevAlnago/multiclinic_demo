import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "my-image":"url('/imagenes/zona.jpg')",
      },
    },
    colors:{
      "principal":"#00a8ec",
      "segundario":"#0769b2",
      "black": colors.black,
      "white": colors.white,
      "gray": colors.gray,
      "emerald": colors.emerald,
      "indigo": colors.indigo,
      "yellow": colors.yellow,
      "red": colors.red,
      "blue": colors.blue,
      "green": colors.green,
      "pink": colors.pink,
      "purple": colors.purple,
      "teal": colors.teal,
      "orange": colors.orange,
      "violet": colors.violet,
      "sky": colors.sky,
      "lime": colors.lime,
      "cyan": colors.cyan,
      "slate": colors.slate,
      "fuchsia": colors.fuchsia,
    }
  },
  plugins: [],
};

export default config;

