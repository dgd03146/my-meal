import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      primary: 'rgb(209,255,221)',
      secondary: 'rgb(255,231,144)',
      neutral: '#121063',
      black: '#000000',
      gray: '#c0c0c0',
      silver: '#c0c0c0',
    },
    screens: {
      sm: '480px',
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        libre: ['var(--font-libre)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
