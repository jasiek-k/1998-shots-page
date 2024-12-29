import HeroVideo from "./HeroVideo";

import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "@/components/Container";
import ScrollWrapper from "@/components/ScrollWrapper";

const HeroSection = () => (
  <Container variant={EContainerVariant.FullWidth} className="flex flex-col">
    <ScrollWrapper>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <div className="top-0 left-0 w-full h-full absolute bg-black opacity-15" />
        <HeroVideo />
      </RatioContainer>
    </ScrollWrapper>
  </Container>
);

export default HeroSection;
