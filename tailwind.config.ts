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
        blue: {
          1000: '#2f4f7f',
          1100: '#365c94'
        },
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
export default config;
