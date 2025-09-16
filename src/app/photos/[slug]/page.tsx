import { SocialMediaBanner } from "@components";
import { notFound } from "next/navigation";

import CreditsSection from "./CreditsSection";
import HeaderSection from "./HeaderSection";
import HeroSection from "./HeroSection";
import PhotosLayout from "./PhotosLayout";
import SuggestedPhotos from "./SuggestedPhotos";

import sessions from "@/app/mock";

interface IPhotoSessionProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return Object.keys(sessions).map(slug => ({ slug }));
}

const PhotoSession = ({ params: { slug } }: IPhotoSessionProps) => {
  const session = sessions[slug];

  if (!session) {
    return notFound();
  }

  const { heroPhoto, heroPhotoMobile, credits, photos, suggested, ...rest } = session;

  return (
    <section>
      <HeroSection photo={heroPhoto} photoMobile={heroPhotoMobile} />
      <HeaderSection {...rest} />
      <PhotosLayout photos={photos} />
      <CreditsSection credits={credits} />
      <SocialMediaBanner />
      <SuggestedPhotos photos={suggested} />
    </section>
  );
};

export default PhotoSession;
