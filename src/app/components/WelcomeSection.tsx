import { Container, Title } from "@components";
import { LogoRound } from "@public/icons";
import Image from "next/image";

const content = {
  title: "WELCOME TO THE 1998\xa0SHOTS®\xa0WORLD",
  text: "Drift amongst photos that blend cinematic nostalgia with timeless charm. Each image captures moody tones, vintage aesthetics and minimalistic compositions. Explore the essence of the 1998 SHOTS® lifestyle through this artistic lens, where every photograph tells a story of style and timeless allure",
};

// TODO
// design? mobile view
const WelcomeSection = () => (
  <div className="sticky top-0">
    <Container className="flex flex-col md:flex-row">
      <div
        style={{ paddingTop: "32px", paddingBottom: "32px" }}
        className="py-35 md:py-0 w-full flex flex-col items-center text-center justify-center text-off-white"
      >
        <Title className="max-w-135 relative -bottom-23/2">{content.title}</Title>
        <Image
          src="/images/WelcomeImage.jpg"
          className="w-full"
          width="1104"
          height="290"
          alt=""
        />
        <div className="relative flex flex-col items-center max-w-135 -top-23/2">
          <p className="py-12 md:pb-11 md:pt-0 text-center uppercase">{content.text}</p>
          <LogoRound width="70px" className="fill-off-white" />
        </div>
      </div>
      {/* <div className="md:w-5/12 object-cover hidden md:flex">
        <Image
          src="/images/welcomeTo1998World.jpg"
          className="w-full h-full"
          width="446"
          height="633"
          alt=""
        />
      </div> */}
    </Container>
  </div>
);

export default WelcomeSection;
