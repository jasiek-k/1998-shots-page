/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "components/Container";

import CreditsSection from "./CreditsSection";
import HeaderSection from "./HeaderSection";
import { data } from "./mock";
import SessionPhoto from "./SessionPhoto";
import SuggestedPhotos from "./SuggestedPhotos";

interface IHeroSectionProps {
  photo: string;
  photoMobile: string;
}

interface IPhotoSessionProps {
  session: any;
}

const HeroSection = ({ photo, photoMobile }: IHeroSectionProps) => (
  <Container variant={EContainerVariant.FullWidth} className="mt-5">
    <RatioContainer variant={EContainerRatio.Banner}>
      <Image
        src={photo}
        className="w-full hidden md:block"
        alt=""
        width={1920}
        height={720}
      />
      <Image
        src={photoMobile}
        className="w-full md:hidden"
        alt=""
        width={375}
        height={498}
      />
    </RatioContainer>
  </Container>
);

const PhotoSession = ({ session = data }: IPhotoSessionProps) => {
  const {
    title,
    about,
    heroPhoto,
    heroPhotoMobile,
    details,
    credits,
    photos,
    suggested,
  } = session;

  return (
    <section>
      <HeroSection photo={heroPhoto} photoMobile={heroPhotoMobile} />
      <HeaderSection title={title} about={about} />
      <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col">
        {photos.map((item: any, index: any) => (
          <SessionPhoto photo={item} key={index} className="mb-6 md:mb-35" />
        ))}
      </Container>
      <CreditsSection credits={credits} />
      <SuggestedPhotos photos={suggested} />
    </section>
  );
};

export default PhotoSession;
