"use client";
import Image from "next/image";

import useColorMode from "./useColorMode";

import Container from "@/components/Container";
import Footer from "@/components/Footer";
import RatioContainer from "@/components/RatioContainer";

const App = () => {
  useColorMode();

  return (
    <main>
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
