import Image from "next/image";
import Link from "next/link";

import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "components/Container";

import { LogoRound } from "public/icons";

import HeroSection from "./HeroSection";
import type { ILinkContainer } from "./types";

import { bannerDesktop, bannerMobile, landingLinks } from "@/app/config";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Title } from "@/components/Text";

const content = {
  title: "WELCOME TO THE 1998\xa0SHOTS®\xa0WORLD",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
};

const LinkContainer = ({
  link: { href, src, caption, subcaption },
}: {
  link: ILinkContainer;
}) => (
  <Link href={href} prefetch={true} className="w-full md:w-2/4">
    <RatioContainer variant={EContainerRatio.HeroLink}>
      <Image src={src} alt="" className="w-full" width={540} height={300} />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-off-white">
        <span className="text-sm md:text-md uppercase font-bold">{caption}</span>
        <span className="text-xxs md:text-sm uppercase">{subcaption}</span>
      </div>
    </RatioContainer>
  </Link>
);

const App = () => (
  <Container variant={EContainerVariant.FullWidth} className="pb-8 flex flex-col">
    <HeroSection />
    <Container className="flex flex-col">
      <div className="flex flex-col md:mx-auto md:max-w-135 items-center py-35 text-center">
        <Title>{content.title}</Title>
        <p className="py-12 md:py-15 text-center uppercase">{content.text}</p>
        <LogoRound width={70} className="dark:fill-off-white fill-black" />
      </div>
      <ResponsiveImage mobile={bannerMobile} desktop={bannerDesktop} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
        {landingLinks.map((item, index) => (
          <LinkContainer link={item} key={index} />
        ))}
      </div>
    </Container>
  </Container>
);

export default App;
