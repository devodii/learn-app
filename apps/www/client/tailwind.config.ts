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
      backgroundColor: {
        "app-light-gray": "#2c2c2c",
      },
      keyframes: {
        "pop-out": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "loader": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.5)" },
        },
      },

      animation: {
        "pop-out": "pop-out 0.3s ease-in-out",
        "loader": "loader 1s infinite alternate ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;
