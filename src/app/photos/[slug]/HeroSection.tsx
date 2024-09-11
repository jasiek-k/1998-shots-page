"use client";

import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "components/Container";

import useIsOutOfView from "@/app/useIsOutOfView";
import ResponsiveImage from "@/components/ResponsiveImage";

interface IHeroSectionProps {
  photo: string;
  photoMobile: string;
}

const getHeroMobile = (src: string) => ({ src, width: 375, height: 498 });

const getHeroDesktop = (src: string) => ({ src, width: 1920, height: 720 });

const HeroSection = ({ photo, photoMobile }: IHeroSectionProps) => {
  const { ref } = useIsOutOfView();

  return (
    <div ref={ref}>
      <Container variant={EContainerVariant.FullWidth} className="mt-5">
        <RatioContainer variant={EContainerRatio.Banner}>
          <ResponsiveImage
            desktop={getHeroDesktop(photo)}
            mobile={getHeroMobile(photoMobile)}
            priority={true}
          />
        </RatioContainer>
      </Container>
    </div>
  );
};

export default HeroSection;
