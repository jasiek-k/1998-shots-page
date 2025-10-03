import { Container, Title } from "@components";
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
          <p className="pt-12 md:pt-0 text-center uppercase">{content.text}</p>
        </div>
      </div>
    </Container>
  </div>
);

export default WelcomeSection;
