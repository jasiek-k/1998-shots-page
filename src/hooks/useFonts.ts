import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLTStd-Ex.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueLTStd-LtEx.woff",
      weight: "300",
      style: "normal",
    },
  ],
});

export const useFonts = () => fonts;
