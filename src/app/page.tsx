"use client";
import Image from "next/image";

import Container from "components/Container";
import { RatioContainer } from "components/Container";
import Footer from "components/Footer";

// import useColorMode from "./useColorMode";
import { useTheme } from "@/ThemeContext";

const App = () => {
  // useColorMode();
  const test = useTheme();
  console.log(test);
  return (
    <main style={{ maxWidth: "1920px", marginLeft: "auto", marginRight: "auto" }}>
      <RatioContainer ratio={1080 / 1920}>
        <Image
          src="/images/photo_landing.jpg"
          className="w-full"
          alt=""
          width={1920}
          height={1080}
        />
        <Footer className="absolute bottom-20 w-full" />
      </RatioContainer>
      <Container>WELCOME TO THE 1998 SHOTS WORLD</Container>
    </main>
  );
};

export default App;
