import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        sand: {
          DEFAULT: '#fbf8f3',
          deep: '#f4ede1',
        },
        sea: {
          DEFAULT: '#1e3a52',
          light: '#2d5470',
          text: '#2c3e50',
          soft: '#5a6c7d',
        },
        brine: {
          DEFAULT: '#7ba7a4',
          deep: '#5a8a86',
        },
        terra: '#b85c3c',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
