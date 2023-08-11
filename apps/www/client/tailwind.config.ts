import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        head: "42px",
      },
      colors: {
        "primary-blue": "#00bbff",
      },
      borderColor: {
        "primary-blue": "#2c51c3",
      },
      outlineColor: {
        "default-blue": "#2c51c3",
      },
    },
  },
  plugins: [],
};
export default config;
