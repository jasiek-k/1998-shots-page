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

const config = {
  mobile: {
    src: "/images/others/notfound_mobile.jpg",
    width: 375,
    height: 667,
  },
  desktop: {
    src: "/images/others/notfound.jpg",
    width: 1280,
    height: 877,
  },
};

const NotFound = () => (
  <Container variant={EContainerVariant.FullWidth} className="notFound pb-4">
    <RatioContainer variant={EContainerRatio.FullPage}>
      <ResponsiveImage config={config} priority={true} />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex flex-col text-center px-4 items-center mt-25">
          <Title>SOMETHING WENT WRONG...</Title>
          <span className="uppercase mt-1 mb-5 text-sm font-light">
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
