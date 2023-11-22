import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    colors: {
      white: {
        primary: '#F0F2F5',
        secondary: '#FFFFFF',
      },
      black: {
        primary: '#161513',
        secondary: '#1C1C22',
      },
      purple: '#B16CEA',
      red: '#FF5E69',
      orange: '#FF8A56',
      'light-orange': '#FFA84B',
      transparent: 'transparent',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};

export default config;
