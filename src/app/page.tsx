"use client";
import clsx from "clsx";
import Image from "next/image";

import Container, { EContainerRatio } from "components/Container";
import { RatioContainer } from "components/Container";
import Footer from "components/Footer";

// import useColorMode from "./useColorMode";
import { useTheme } from "@/ThemeContext";

const caption = ["PHOTOGRAPHY X DESIGN", `FROM 51°45'33.30"N, 19°27'21.54"E`, "XXX"];

const HeroCaption: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <footer className={clsx("flex justify-center flex-col", className)}>
    {caption.map((item, index) => (
      <span className="text-center font-light text-sm" key={index}>
        {item}
      </span>
    ))}
  </footer>
);

const App = () => {
  // useColorMode();
  const { theme } = useTheme();

  return (
    <main style={{ maxWidth: "1920px", marginLeft: "auto", marginRight: "auto" }}>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <Image
          src="/images/photo_landing.jpg"
          className="w-full hidden md:block"
          alt=""
          width={1920}
          height={1080}
        />
        <Image
          src="/images/photo_landing_mobile.jpg"
          className="w-full md:hidden"
          alt=""
          width={375}
          height={667}
        />
        <HeroCaption className="absolute bottom-20 w-full" />
      </RatioContainer>
      <Container>WELCOME TO THE 1998 SHOTS WORLD</Container>
    </main>
  );
};

export default App;
