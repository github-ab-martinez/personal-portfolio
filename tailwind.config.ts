import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      white: {
        primary: "#F0F2F5",
        secondary: "#FFFFFF",
      },
      black: {
        primary: "#161513",
        secondary: "#1C1C22",
      },
      purple: "#800EEB",
      red: "#EE2A7B",
      orange: "#FA8D34",
      "light-orange": "#f9ce34",
      transparent: "transparent",
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".clip-ellipse-right": {
          clipPath: "ellipse(75% 60% at right center)",
        },
        ".clip-ellipse-bottom": {
          clipPath: "ellipse(75% 60% at bottom center)",
        },
      });
    }),
  ],
};

export default config;
