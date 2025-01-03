import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      "-1/2": "-2px",
      "0": "0px",
      divider: "1px",
      "1/2": "2px",
      "1": "4px",
      "3/2": "6px",
      "2": "8px",
      "5/2": "10px",
      "3": "12px",
      "4": "16px",
      "5": "20px",
      "6": "24px",
      "7": "28px",
      "8": "32px",
      "9": "36px",
      "10": "40px",
      "11": "44px",
      "12": "48px",
      "14": "56px",
      "15": "60px",
      "16": "64px",
      "20": "80px",
      "23": "92px",
      "25": "100px",
      "29": "116px",
      "35": "140px",
      "37": "148px",
      "40": "160px",
      "88": "352px",
      "90": "360px",
      "100": "400px",
      "135": "540px",
      "182": "728px",
      container: "1552px",
      fullWidth: "1920px",
      fullPage: "56.25%",
      fullPageMobile: "177.87%",
      teaser: "177.51%",
      banner: "35.94%",
      bannerMobile: "132.80%",
      clubBanner: "28.96%",
      clubBannerMobile: "74.67%",
      teaserMobile: "288vw",
      heroLink: "56.6%",
      arrow: "18px",
    },
    borderWidth: {
      1: "1px",
    },
    colors: {
      "off-white": "#fffff4",
      black: "#181818",
    },
    fontSize: {
      xxs: "12px",
      xs: "14px",
      sm: "16px",
      md: "24px",
      lg: "32px",
      xl: "60px",
    },
    extend: {
      lineHeight: {
        header: "1.25",
        photosLink: "36px",
      },
      blur: {
        md: "10px",
      },
      animation: {
        slide: "slide 5s linear 0s infinite forwards",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(10%)" },
          to: { transform: "translateX(-150%)" },
        },
      },
      backdropBlur: {
        default: "15px",
      },
    },
  },
  plugins: [],
};

export default config;
