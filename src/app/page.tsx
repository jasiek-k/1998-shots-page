import Image from "next/image";

import useFonts from "./useFonts";

import Container from "@/components/Container";
import Footer from "@/components/Footer";

const App = () => {
  useFonts();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div
        style={{ paddingBottom: "56.25%" }}
        className="w-full relative overflow-hidden"
      >
        <Image
          src="/images/photo_landing.jpg"
          className="absolute top-0 left-0 w-full"
          alt=""
          width={1920}
          height={1080}
        />
        <Footer className="absolute bottom-20 w-full" />
      </div>
      <Container>WELCOME TO THE 1998 SHOTS WORLD</Container>
    </main>
  );
};

export default App;
