import { Chip, Container } from "@components";
import Image from "next/image";

const content = {
  // title: "WELCOME TO THE 1998®\xa0WORLD",
  text: "Drift amongst photos that blend cinematic nostalgia with timeless charm. Each image captures moody tones, vintage aesthetics and minimalistic compositions. Explore the essence of the 1998 SHOTS® lifestyle through this artistic lens, where every photograph tells a story of style and timeless allure.",
};
const chips = ["photography", "retouch", "design"];

// TODO
const WelcomeSection = () => (
  <Container className="flex flex-col">
    <div className="py-35 md:py-0 w-full flex flex-col items-center text-center justify-center text-off-white">
      <Image
        src="/images/WelcomeImage.jpg"
        className="w-full"
        width="1104"
        height="290"
        alt=""
      />
      <div className="flex flex-col items-center max-w-135">
        <p className="text-center uppercase font-light pb-8 pt-6">{content.text}</p>
        <div className="flex gap-3">
          {chips.map(item => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </div>
    </div>
  </Container>
);

export default WelcomeSection;
