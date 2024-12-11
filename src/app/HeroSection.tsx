// import clsx from "clsx";

// import { heroDesktop, heroMobile } from "@/app/config";
import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "@/components/Container";
// import ResponsiveImage from "@/components/ResponsiveImage";
import ScrollWrapper from "@/components/ScrollWrapper";

// TODO poster
const HeroSection = () => (
  <Container variant={EContainerVariant.FullWidth} className="flex flex-col">
    <ScrollWrapper>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <div
          className="top-0 left-0 w-full h-full absolute"
          style={{ background: "black", opacity: "0.12" }}
        />
        <video
          className=""
          preload="none"
          playsInline={true}
          autoPlay={true}
          muted={true}
          loop={true}
        >
          <source
            src="/videos/hero_mobile.mp4"
            media="(max-width: 767px)"
            type="video/mp4"
            width="768"
            height="1365"
          />
          <source
            src="/videos/hero_desktop.mp4"
            media="(min-width: 768px)"
            type="video/mp4"
            width="1920"
            height="1080"
          />
          Your browser does not support the video tag.
        </video>
        {/* <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} loading="eager" /> */}
      </RatioContainer>
    </ScrollWrapper>
  </Container>
);

export default HeroSection;
