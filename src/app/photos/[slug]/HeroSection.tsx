"use client";

import {
  Container,
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
  ResponsiveImage,
  ScrollWrapper,
} from "@components";

interface IHeroSectionProps {
  photo: string;
  photoMobile: string;
}

const HeroSection = ({ photo, photoMobile }: IHeroSectionProps) => (
  <ScrollWrapper>
    <Container variant={EContainerVariant.FullWidth} className="mt-5">
      <RatioContainer variant={EContainerRatio.Banner}>
        <ResponsiveImage
          config={{
            mobile: { src: photoMobile, width: 375, height: 498 },
            desktop: { src: photo, width: 1920, height: 720 },
          }}
          loading="eager"
        />
      </RatioContainer>
    </Container>
  </ScrollWrapper>
);

export default HeroSection;
