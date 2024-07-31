import localFont from "next/font/local";

const fonts = localFont({
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLTStd-BdCn.woff",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueLTStd-Cn.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/HelveticaNeueLTStd-LtCn.woff",
      weight: "300", // light
      style: "normal",
    },
  ],
});

const useFonts = () => {
  return fonts;
};

export default useFonts;
