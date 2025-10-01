"use client";

import { useIsMobile } from "@hooks";
import { useCallback, useEffect, useRef, useState } from "react";

import { Container, EContainerVariant } from "./Container";
import { ResponsiveImage } from "./ResponsiveImage";
import { Title } from "./Text";

import { prefetchImage } from "@/app/utils";

const interval = 750;
const slides = [
  {
    id: 0,
    mobile: "/images/stackAnimation/slide_0_mobile.png",
    desktop: "/images/stackAnimation/slide_0.png",
  },
  {
    id: 1,
    mobile: "/images/stackAnimation/slide_1_mobile.png",
    desktop: "/images/stackAnimation/slide_1.png",
  },
  {
    id: 2,
    mobile: "/images/stackAnimation/slide_2_mobile.png",
    desktop: "/images/stackAnimation/slide_2.png",
  },
  {
    id: 3,
    mobile: "/images/stackAnimation/slide_3_mobile.png",
    desktop: "/images/stackAnimation/slide_3.png",
  },
  {
    id: 4,
    mobile: "/images/stackAnimation/slide_4_mobile.png",
    desktop: "/images/stackAnimation/slide_4.png",
  },
];

export const StackAnimation = () => {
  const [currentSlideId, setCurrentSlideId] = useState(0);
  const intervalId = useRef<NodeJS.Timeout>();
  const isMobile = useIsMobile();

  const changeSlide = useCallback(() => {
    if (currentSlideId === slides.length - 1) {
      setCurrentSlideId(0);
    } else {
      setCurrentSlideId(currentSlideId + 1);
    }
  }, [currentSlideId]);

  const prefetchAnimation = useCallback(() => {
    slides.forEach(({ mobile, desktop }) => {
      prefetchImage(isMobile ? mobile : desktop);
    });
  }, [isMobile]);

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
        {slides.map(({ id, mobile, desktop }) => (
          <ResponsiveImage
            mobile={{
              className: currentSlideId === id ? "" : "hidden",
              src: mobile,
              width: 300,
              height: 300,
            }}
            desktop={{
              className: currentSlideId === id ? "" : "md:hidden",
              src: desktop,
              width: 1104,
              height: 720,
            }}
            key={id}
          />
        ))}
      </div>
    </Container>
  );
};
