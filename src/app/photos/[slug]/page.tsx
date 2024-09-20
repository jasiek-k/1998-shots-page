import { notFound } from "next/navigation";

import Container, { EContainerVariant } from "components/Container";

import CreditsSection from "./CreditsSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import PhotosLayout from "./PhotosLayout";
import SessionPhoto from "./SessionPhoto";
import SuggestedPhotos from "./SuggestedPhotos";

import sessions from "@/app/mock";
import type { TPhoto } from "@/app/types";

interface IPhotoSessionProps {
  params: { slug: string };
}

const PhotoSession = ({ params: { slug } }: IPhotoSessionProps) => {
  const session = sessions[slug];

  if (!session) {
    notFound();
  }

  const { title, about, heroPhoto, heroPhotoMobile, credits, photos, suggested } =
    session;

  return (
    <section>
      <HeroSection photo={heroPhoto} photoMobile={heroPhotoMobile} />
      <HeaderSection title={title} about={about} />
      <PhotosLayout photos={photos} />
      <CreditsSection credits={credits} />
      <SuggestedPhotos photos={suggested} />
    </section>
  );
};

export default PhotoSession;
