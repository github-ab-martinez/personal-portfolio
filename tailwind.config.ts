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
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    colors: {
      white: {
        primary: "#F0F2F5",
        secondary: "#FFFFFF",
      },
      black: {
        primary: "#161513",
        secondary: "#1C1C22",
      },
      purple: "#B16CEA",
      red: "#FF5E69",
      orange: "#FF8A56",
      "light-orange": "#FFA84B",
      transparent: "transparent",
    },
    container: {
      center: true,
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".clip-hexagon": {
          "clip-path":
            "path('M839.243 0.901575C863.434 0.901576 885.787 13.8073 897.883 34.7573L1155.03 480.144C1167.12 501.094 1167.12 526.906 1155.03 547.856L897.883 993.243C885.787 1014.19 863.434 1027.1 839.243 1027.1H324.954C300.763 1027.1 278.41 1014.19 266.314 993.243L9.17006 547.856C-2.92542 526.906 -2.92542 501.094 9.17006 480.144L266.314 34.7573C278.41 13.8073 300.763 0.90155 324.954 0.90155L839.243 0.901575Z')",
        },
      });
    }),
  ],
};

export default config;
