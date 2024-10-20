import ArrowButton from "./ArrowButton";
import Container, { EContainerRatio, RatioContainer } from "./Container";
import { Title } from "./Text";

import { bannerMobile, instagramLink } from "@/app/config";
import ResponsiveImage from "@/components/ResponsiveImage";

const bannerDesktop = {
  src: "/images/joinClub.jpg",
  width: 1104,
  height: 352,
};

const SocialMediaBanner = () => (
  <Container>
    <RatioContainer variant={EContainerRatio.ClubBanner} className="zoom">
      <ResponsiveImage mobile={bannerMobile} desktop={bannerDesktop} />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <Title className="mr-6">JOIN THE 1998® CLUB</Title>
        <ArrowButton
          type="link"
          variant="right"
          href={instagramLink}
          className="mb-4 h-fit"
        >
          FOLLOW ON INSTAGRAM
        </ArrowButton>
      </div>
    </RatioContainer>
  </Container>
);

export default SocialMediaBanner;
