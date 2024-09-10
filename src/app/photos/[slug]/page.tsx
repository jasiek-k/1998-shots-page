import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "components/Container";

import CreditsSection from "./CreditsSection";
import HeaderSection from "./HeaderSection";
import SessionPhoto from "./SessionPhoto";
import SuggestedPhotos from "./SuggestedPhotos";

import type { IPhoto } from "@/app/types";
import ResponsiveImage from "@/components/ResponsiveImage";
import sessions from "@/mock";

interface IHeroSectionProps {
  photo: string;
  photoMobile: string;
}

interface IPhotoSessionProps {
  params: { slug: string };
}

const getHeroMobile = (src: string) => ({ src, width: 375, height: 498 });

const getHeroDesktop = (src: string) => ({ src, width: 1920, height: 720 });

const HeroSection = ({ photo, photoMobile }: IHeroSectionProps) => (
  <Container variant={EContainerVariant.FullWidth} className="mt-5">
    <RatioContainer variant={EContainerRatio.Banner}>
      <ResponsiveImage
        desktop={getHeroDesktop(photo)}
        mobile={getHeroMobile(photoMobile)}
      />
    </RatioContainer>
  </Container>
);

const PhotoSession = ({ params: { slug } }: IPhotoSessionProps) => {
  // const session = burningRubberData;
  const session = sessions[slug];

  if (!session) {
    // TODO
    return <div>Error</div>;
  }

  const { title, about, heroPhoto, heroPhotoMobile, credits, photos, suggested } =
    session;

  return (
    <section>
      <HeroSection photo={heroPhoto} photoMobile={heroPhotoMobile} />
      <HeaderSection title={title} about={about} />
      <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col">
        {photos.map((item, index) => (
          <SessionPhoto photo={item as IPhoto} key={index} className="mb-6 md:mb-35" />
        ))}
      </Container>
      <CreditsSection credits={credits} />
      <SuggestedPhotos photos={suggested} />
    </section>
  );
};

export default PhotoSession;
