"use client";

import clsx from "clsx";

import { EContainerRatio, RatioContainer } from "components/Container";

import useIsOutOfView from "./useIsOutOfView";

import { heroDesktop, heroMobile } from "@/app/config";
import ResponsiveImage from "@/components/ResponsiveImage";

const caption = ["PHOTOGRAPHY X DESIGN", `FROM 51°45'33.30"N, 19°27'21.54"E`, "XXX"];

const HeroCaption: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={clsx("flex justify-center flex-col", className)}>
    {caption.map((item, index) => (
      <span className="text-center font-light text-sm" key={index}>
        {item}
      </span>
    ))}
  </div>
);

const HeroSection = () => {
  const { ref } = useIsOutOfView();

  return (
    <div ref={ref}>
      <RatioContainer variant={EContainerRatio.FullPage}>
        <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} priority={true} />
        <HeroCaption className="absolute bottom-20 w-full" />
      </RatioContainer>
    </div>
  );
};

export default HeroSection;
