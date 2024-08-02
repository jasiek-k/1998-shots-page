import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "1": "4px",
      "2": "8px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "10": "40px",
      "16": "64px",
      "20": "80px",
      "35": "140px",
      "37": "148px",
      container: "1472px",
    },
    colors: {
      "off-white": "#fffff4",
      black: "#1F1B24",
    },
    fontSize: {
      sm: "18px",
      md: "24px",
      lg: "32px",
      xl: "",
      xxl: "80px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
