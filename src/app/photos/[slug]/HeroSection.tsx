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

const getHeroMobile = (src: string) => ({ src, width: 375, height: 498 });

const getHeroDesktop = (src: string) => ({ src, width: 1920, height: 720 });

const HeroSection = ({ photo, photoMobile }: IHeroSectionProps) => (
  <ScrollWrapper>
    <Container variant={EContainerVariant.FullWidth} className="mt-5">
      <RatioContainer variant={EContainerRatio.Banner}>
        <ResponsiveImage
          desktop={getHeroDesktop(photo)}
          mobile={getHeroMobile(photoMobile)}
          loading="eager"
        />
      </RatioContainer>
    </Container>
  </ScrollWrapper>
);

export default HeroSection;
