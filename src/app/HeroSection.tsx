// import clsx from "clsx";

import HeroVideo from "./HeroVideo";

import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "@/components/Container";
// import ResponsiveImage from "@/components/ResponsiveImage";
import ScrollWrapper from "@/components/ScrollWrapper";

// TODO poster
const HeroSection = () => (
  <Container variant={EContainerVariant.FullWidth} className="flex flex-col">
    <ScrollWrapper>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <div
          className="top-0 left-0 w-full h-full absolute"
          style={{ background: "black", opacity: "0.12" }}
        />
        <HeroVideo />
        {/* <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} loading="eager" /> */}
      </RatioContainer>
    </ScrollWrapper>
  </Container>
);

export default HeroSection;
