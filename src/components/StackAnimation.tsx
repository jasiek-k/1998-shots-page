"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import type { IImage } from "./ResponsiveImage";
import ResponsiveImage from "./ResponsiveImage";
import { Title } from "./Text";

const interval = 750;
const caption = "[ 1998® LIFESTYLE ]";

// TODO mobile
const slides = [
  {
    id: 0,
    mobile: "/images/stackAnimation/slide_0.png",
    desktop: "/images/stackAnimation/slide_0.png",
  },
  {
    id: 1,
    mobile: "/images/stackAnimation/slide_1.png",
    desktop: "/images/stackAnimation/slide_1.png",
  },
  {
    id: 2,
    mobile: "/images/stackAnimation/slide_2.png",
    desktop: "/images/stackAnimation/slide_2.png",
  },
  {
    id: 3,
    mobile: "/images/stackAnimation/slide_3.png",
    desktop: "/images/stackAnimation/slide_3.png",
  },
  {
    id: 4,
    mobile: "/images/stackAnimation/slide_4.png",
    desktop: "/images/stackAnimation/slide_4.png",
  },
];

const getMobilePhoto = (src: string): IImage => ({
  src,
  width: 300,
  height: 300,
});
const getDesktopPhoto = (src: string): IImage => ({
  src,
  width: 1104,
  height: 720,
});

const StackAnimation = () => {
  const intervalId = useRef<NodeJS.Timeout>();
  const [currentSlideId, setCurrentSlideId] = useState(0);

  const changeSlide = useCallback(() => {
    if (currentSlideId === slides.length - 1) {
      setCurrentSlideId(0);
    } else {
      setCurrentSlideId(currentSlideId + 1);
    }
  }, [currentSlideId]);

  useEffect(() => {
    intervalId.current = setInterval(changeSlide, interval);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [changeSlide]);

  return (
    <div className="relative flex items-center justify-center">
      <Title className="absolute">{caption}</Title>
      {slides.map(({ id, mobile, desktop }) => (
        <ResponsiveImage
          mobile={{
            className: currentSlideId === id ? "" : "hidden",
            ...getMobilePhoto(mobile),
          }}
          desktop={{
            className: currentSlideId === id ? "" : "md:hidden",
            ...getDesktopPhoto(desktop),
          }}
          key={id}
        />
      ))}
    </div>
  );
};

export default StackAnimation;
