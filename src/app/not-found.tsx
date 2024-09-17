import Link from "next/link";

import { links } from "./config";

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
  height: 480,
};

const NotFound = () => (
  <Container variant={EContainerVariant.FullWidth} className="">
    <RatioContainer variant={EContainerRatio.Banner}>
      <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} priority={true} />
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="flex flex-col max-w-135 text-center px-4">
          <Title>SOMETHING WENT WRONG...</Title>
          <span className="uppercase mt-8 md:mt-10">YOU MUST BE LOST IN THE SMOKE</span>
          <Link href={links.photos.href} className="uppercase underline">
            GO BACK TO PHOTOS
          </Link>
        </div>
      </div>
    </RatioContainer>
  </Container>
);

export default NotFound;
