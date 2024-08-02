import Image from "next/image";

import DetailsSection from "./DetailsSection";
import { data } from "./mock";
import SuggestedPhotos from "./SuggestedPhotos";

import Container from "@/components/Container";

const HeroSection = ({ photo }: any) => (
  <div style={{ paddingBottom: "56.25%" }} className="w-full relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full">
      <div style={{ paddingBottom: "37.5%" }} className="w-full relative overflow-hidden">
        <Image
          src={photo}
          className="absolute top-0 left-0 w-full"
          alt=""
          width={1920}
          height={720}
        />
      </div>
    </div>
  </div>
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
        {photos.map(({ type, img }) => (
          <>
            {/* {type === EPhotoType.Photo && <Image />}
            {type === EPhotoType.FullWidth && <Image />}
            {type === EPhotoType.Group && <Image />} */}
          </>
        ))}
        <SuggestedPhotos photos={suggested} />
      </Container>
    </section>
  );
};

export default PhotoSession;
