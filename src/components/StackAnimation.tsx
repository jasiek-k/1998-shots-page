"use client";

import { useIsMobile } from "@hooks";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container, EContainerVariant } from "./Container";
import { ResponsiveImage } from "./ResponsiveImage";
import { Title } from "./Text";

import { prefetchImage } from "@/app/utils";

const interval = 750;
const imageBase = "/images/stackAnimation/";
const slides = [
  { mobile: "slide_0_mobile.png", desktop: "slide_0.png" },
  { mobile: "slide_1_mobile.png", desktop: "slide_1.png" },
  { mobile: "slide_2_mobile.png", desktop: "slide_2.png" },
  { mobile: "slide_3_mobile.png", desktop: "slide_3.png" },
  { mobile: "slide_4_mobile.png", desktop: "slide_4.png" },
  { mobile: "slide_5_mobile.png", desktop: "slide_5.png" },
];

export const StackAnimation = () => {
  const isMobile = useIsMobile();
  const [currentSlideId, setCurrentSlideId] = useState(0);
  const intervalId = useRef<NodeJS.Timeout>();

  const prefetchAnimation = useCallback(() => {
    slides.forEach(({ mobile, desktop }) => {
      prefetchImage(`${imageBase}${isMobile ? mobile : desktop}`);
    });
  }, [isMobile]);

  const changeSlide = useCallback(() => {
    if (currentSlideId === slides.length - 1) {
      setCurrentSlideId(0);
    } else {
      setCurrentSlideId(currentSlideId + 1);
    }
  }, [currentSlideId]);

  useEffect(() => {
    prefetchAnimation();
  }, [prefetchAnimation, isMobile]);

  useEffect(() => {
    intervalId.current = setInterval(changeSlide, interval);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [changeSlide]);

  return (
    <Container variant={EContainerVariant.BaseNoMobilePadding}>
      <div className="relative flex items-center justify-center w-full">
        <div className="absolute text-center">
          <Title>[ 1998® LIFESTYLE ]</Title>
          {/* <span>PHOTOGRAPHY - RETOUCH - GRAPHIC DESIGN</span> */}
        </div>
        {slides.map(({ mobile, desktop }, index) => (
          <ResponsiveImage
            key={index}
            mobile={{
              className: currentSlideId === index ? "" : "hidden",
              src: imageBase + mobile,
              width: 300,
              height: 300,
            }}
            desktop={{
              className: currentSlideId === index ? "" : "md:hidden",
              src: imageBase + desktop,
              width: 1104,
              height: 720,
            }}
          />
        ))}
      </div>
    </Container>
  );
};
