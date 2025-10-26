import {
  ArrowButton,
  Container,
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
  ResponsiveImage,
  Title,
} from "@components";

import { links } from "./config";

const heroMobile = {
  src: "/images/notfound_mobile.jpg",
  width: 375,
  height: 667,
};

const heroDesktop = {
  src: "/images/notfound.jpg",
  width: 1280,
  height: 877,
};

const NotFound = () => (
  <Container variant={EContainerVariant.FullWidth} className="notFound">
    <RatioContainer variant={EContainerRatio.FullPage}>
      <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} priority={true} />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex flex-col max-w-135 text-center px-4 items-center mt-25">
          <Title>SOMETHING WENT WRONG...</Title>
          <span className="uppercase mt-3 md:mt-0 mb-5 text-sm font-light">
            THERE IS NOTHING TO SEE HERE.
          </span>
          <ArrowButton variant="right" type="link" href={links.photos.href}>
            GO BACK TO PHOTOS
          </ArrowButton>
        </div>
      </div>
    </RatioContainer>
  </Container>
);

export default NotFound;
