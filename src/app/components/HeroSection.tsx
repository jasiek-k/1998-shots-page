import {
  Container,
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
  ScrollWrapper,
} from "@components";

import HeroVideo from "./HeroVideo";

const HeroSection = () => (
  <Container variant={EContainerVariant.FullWidth} className="flex flex-col">
    <ScrollWrapper>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <div className="top-0 left-0 w-full h-full absolute bg-og-black opacity-15" />
        <HeroVideo />
      </RatioContainer>
    </ScrollWrapper>
  </Container>
);

export default HeroSection;
