import { links } from "./config";

import ArrowButton from "@/components/ArrowButton";
import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "@/components/Container";
import ResponsiveImage from "@/components/ResponsiveImage";
import { Title } from "@/components/Text";

const heroMobile = {
  src: "/images/notfound_mobile.jpg",
  width: 375,
  height: 497,
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
          <span className="uppercase mt-5 mb-4">YOU MUST BE LOST IN THE SMOKE</span>
          <ArrowButton variant="right" type="link" href={links.photos.href}>
            GO BACK TO PHOTOS
          </ArrowButton>
        </div>
      </div>
    </RatioContainer>
  </Container>
);

export default NotFound;
