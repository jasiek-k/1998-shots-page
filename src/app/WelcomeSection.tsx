import Image from "next/image";

import { LogoRound } from "public/icons";

import Container, { EContainerVariant } from "@/components/Container";
import { Title } from "@/components/Text";

const content = {
  title: "WELCOME TO THE 1998\xa0SHOTS®\xa0WORLD",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
};

const WelcomeSection = () => (
  <div className="sticky top-0 bg-black dark:bg-off-white">
    <Container className="flex flex-col md:flex-row">
      <div className="md:w-7/12 md:pr-6 py-35 md:py-14 flex flex-col items-center text-center justify-center text-off-white dark:text-black">
        <Title>{content.title}</Title>
        <p className="py-12 md:py-11 md:max-w-135 text-center uppercase">
          {content.text}
        </p>
        <LogoRound width="70px" className="fill-off-white dark:fill-black" />
      </div>
      <div className="md:w-5/12 object-cover hidden md:flex">
        <Image
          src="/images/welcomeTo1998World.jpg"
          className="w-full h-full"
          width="446"
          height="633"
          alt=""
        />
      </div>
    </Container>
  </div>
);

export default WelcomeSection;
