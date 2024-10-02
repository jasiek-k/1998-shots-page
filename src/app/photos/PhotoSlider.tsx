"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

import SliderItem from "./SliderItem";

import { teasers } from "@/app/mock";
import ArrowButton from "@/components/ArrowButton";

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
      <div className="flex flex-row justify-between md:justify-end md:mr-5 md:ml-0 mx-4 mt-5 md:mt-5 md:gap-4">
        <ArrowButton type="button" variant="left" handleClick={handlePrevSlide}>
          Prev
        </ArrowButton>
        <ArrowButton type="button" variant="right" handleClick={handleNextSlide}>
          Next
        </ArrowButton>
      </div>
    </>
  );
};

export default PhotoSlider;
