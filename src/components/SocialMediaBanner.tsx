import { ArrowButton } from "./ArrowButton";
import {
  Container,
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "./Container";
import { ResponsiveImage } from "./ResponsiveImage";
import { Title } from "./Text";

import { instagramLink } from "@/app/config";

const bannerDesktop = { src: "/images/joinclub.jpg", width: 1104, height: 352 };
const bannerMobile = { src: "/images/joinclub_mobile.jpg", width: 375, height: 280 };

export const SocialMediaBanner = () => (
  <Container variant={EContainerVariant.BaseNoMobilePadding}>
    <RatioContainer variant={EContainerRatio.ClubBanner}>
      <ResponsiveImage mobile={bannerMobile} desktop={bannerDesktop} />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row items-center justify-center">
        <Title className="mb-1 md:mb-0 md:mr-6 text-off-white">
          JOIN THE 1998® CLUB
        </Title>
        <ArrowButton
          type="link"
          variant="right"
          href={instagramLink}
          className="md:mb-4"
          forcedTheme="dark"
        >
          FOLLOW ON INSTAGRAM
        </ArrowButton>
      </div>
    </RatioContainer>
  </Container>
);
