import Image from "next/image";

import DetailsSection from "./DetailsSection";
import { data } from "./mock";
import SessionPhoto from "./SessionPhoto";
import SuggestedPhotos from "./SuggestedPhotos";

import Container from "@/components/Container";
import RatioContainer from "@/components/RatioContainer";

const HeroSection = ({ photo }: any) => (
  <RatioContainer ratio={1080 / 1920} className="flex flex-col justify-end">
    <RatioContainer ratio={690 / 1920}>
      <Image src={photo} className="w-full" alt="" width={1920} height={720} />
    </RatioContainer>
  </RatioContainer>
);

const PhotoSession = ({ session = data }: any) => {
  const { title, heroPhoto, details, photos, suggested } = session;

  return (
    <section>
      <HeroSection photo={heroPhoto} />
      <Container className="flex-col">
        <h1 className="text-xxl font-off-white w-full text-center uppercase font-bold">
          {`"${title}"`}
        </h1>
        <DetailsSection details={details} />
        {photos.map((item, index) => (
          <SessionPhoto photo={item} key={index} />
        ))}
        <SuggestedPhotos photos={suggested} />
      </Container>
    </section>
  );
};

export default PhotoSession;
