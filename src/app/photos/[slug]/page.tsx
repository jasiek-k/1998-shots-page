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

  const { hero, heroMobile, credits, photos, suggested, ...rest } = session;

  return (
    <section>
      <HeroSection photo={hero} photoMobile={heroMobile} />
      <HeaderSection {...rest} />
      <PhotosLayout photos={photos} />
      <div className="flex flex-col gap-45 md:gap-45 py-45 md:py-45">
        <CreditsSection credits={credits} />
        <SocialMediaBanner />
        <SuggestedPhotos photos={suggested} />
      </div>
    </section>
  );
};

export default PhotoSession;
