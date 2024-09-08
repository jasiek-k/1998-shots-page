// "use client";

import Image from "next/image";

// import { usePathname } from "next/navigation";
import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "components/Container";

import CreditsSection from "./CreditsSection";
import HeaderSection from "./HeaderSection";
import { burningRubberData as data } from "./mock";
import SessionPhoto from "./SessionPhoto";
import SuggestedPhotos from "./SuggestedPhotos";

import type { ISession } from "@/app/types";
import ResponsiveImage from "@/components/ResponsiveImage";

interface IHeroSectionProps {
  photo: string;
  photoMobile: string;
}

interface IPhotoSessionProps {
  session: ISession;
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

const PhotoSession = async ({
  session = data as unknown as ISession,
  params: { slug },
}: IPhotoSessionProps) => {
  // console.log(slug);
  const { title, about, heroPhoto, heroPhotoMobile, credits, photos, suggested } =
    session;
  // const test = await fetch("https://localhost:3000");
  // const posts = await test.json();
  // console.log(posts);

  return (
    <section>
      <HeroSection photo={heroPhoto} photoMobile={heroPhotoMobile} />
      <HeaderSection title={title} about={about} />
      <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col">
        {photos.map((item, index) => (
          <SessionPhoto photo={item} key={index} className="mb-6 md:mb-35" />
        ))}
      </Container>
      <CreditsSection credits={credits} />
      <SuggestedPhotos photos={suggested} />
    </section>
  );
};

export default PhotoSession;
