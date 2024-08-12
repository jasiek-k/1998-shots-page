/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";

import Container, { EContainerVariant, RatioContainer } from "components/Container";

import DetailsSection from "./DetailsSection";
import { data } from "./mock";
import SessionPhoto from "./SessionPhoto";
import SuggestedPhotos from "./SuggestedPhotos";

interface IHeroSectionProps {
  photo: string;
}

interface IPhotoSessionProps {
  session: any;
}

const HeroSection = ({ photo }: IHeroSectionProps) => (
  <Container variant={EContainerVariant.FullWidth} className="mt-5">
    <RatioContainer ratio={690 / 1920}>
      <Image src={photo} className="w-full" alt="" width={1920} height={720} />
    </RatioContainer>
  </Container>
);

const PhotoSession = ({ session = data }: IPhotoSessionProps) => {
  const { title, heroPhoto, details, photos, suggested } = session;

  return (
    <section>
      <HeroSection photo={heroPhoto} />
      <Container className="flex-col">
        <h1 className="text-xxl font-off-white w-full text-center uppercase font-bold mt-35 mb-15">
          {`"${title}"`}
        </h1>
        <DetailsSection details={details} className="mb-35" />
        {photos.map((item: any, index: any) => (
          <SessionPhoto photo={item} key={index} className="mb-35" />
        ))}
        <SuggestedPhotos photos={suggested} />
      </Container>
    </section>
  );
};

export default PhotoSession;
