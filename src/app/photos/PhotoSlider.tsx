"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

import { LeftArrowIcon, RightArrowIcon } from "public/svgs";

import SliderItem from "./SliderItem";

import { teasers } from "@/mock";

const navButtonStyle = "py-3 md:py-5 px-5 uppercase flex";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <></>,
  prevArrow: <></>,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const PhotoSlider = () => {
  const ref = useRef<Slider>(null);
  const [isHover, setIsHover] = useState<number | undefined>(undefined);

  const handleNextSlide = useCallback(() => {
    if (ref.current) {
      ref.current.slickNext();
    }
  }, []);

  const handlePrevSlide = useCallback(() => {
    if (ref.current) {
      ref.current.slickPrev();
    }
  }, []);

  const toggleIsHover = useCallback((index?: number) => {
    setIsHover(index !== undefined ? index : undefined);
  }, []);

  return (
    <>
      <Slider ref={ref} {...settings}>
        {teasers.map((item, index) => (
          <SliderItem
            item={item}
            key={index}
            isHover={isHover}
            index={index}
            toggleIsHover={toggleIsHover}
          />
        ))}
      </Slider>
      <div className="flex flex-row justify-between md:justify-end md:mr-5 md:ml-0 mx-3 mt-2 md:mt-0">
        <button className={navButtonStyle} onClick={handlePrevSlide}>
          <LeftArrowIcon width="20px" height="20px" />
          <span className="ml-1">Prev</span>
        </button>
        <button className={navButtonStyle} onClick={handleNextSlide}>
          <span className="mr-1">Next</span>
          <RightArrowIcon width="20px" height="20px" />
        </button>
      </div>
    </>
  );
};

export default PhotoSlider;
