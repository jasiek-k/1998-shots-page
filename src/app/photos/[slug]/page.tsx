import { notFound } from "next/navigation";

import CreditsSection from "./CreditsSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import PhotosLayout from "./PhotosLayout";
import SuggestedPhotos from "./SuggestedPhotos";

import sessions from "@/app/mock";
import SocialMediaBanner from "@/components/SocialMediaBanner";

interface IPhotoSessionProps {
  params: { slug: string };
}

const PhotoSession = ({ params: { slug } }: IPhotoSessionProps) => {
  const session = sessions[slug];

  if (!session) {
    notFound();
  }

  const { id, title, about, heroPhoto, heroPhotoMobile, credits, photos, suggested } =
    session;

  return (
    <section>
      <HeroSection photo={heroPhoto} photoMobile={heroPhotoMobile} />
      <HeaderSection id={id} title={title} about={about} />
      <PhotosLayout photos={photos} />
      <CreditsSection credits={credits} />
      <SocialMediaBanner />
      <SuggestedPhotos photos={suggested} />
    </section>
  );
};

export default PhotoSession;
