import clsx from "clsx";

import { heroDesktop, heroMobile } from "@/app/config";
import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "@/components/Container";
import ResponsiveImage from "@/components/ResponsiveImage";
import ScrollWrapper from "@/components/ScrollWrapper";

const caption = ["PHOTOGRAPHY X DESIGN", `FROM 51°45'33.30"N, 19°27'21.54"E`, "XXX"];

const HeroCaption: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={clsx("flex justify-center flex-col", className)}>
    {caption.map((item, index) => (
      <span className="text-center text-off-white font-light text-sm" key={index}>
        {item}
      </span>
    ))}
  </div>
);

const HeroSection = () => (
  <Container variant={EContainerVariant.FullWidth} className="flex flex-col">
    <ScrollWrapper>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} loading="eager" />
        <HeroCaption className="absolute bottom-20 w-full" />
      </RatioContainer>
    </ScrollWrapper>
  </Container>
);

export default HeroSection;
