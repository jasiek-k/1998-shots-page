"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

import SliderButtons from "./SliderButtons";
import SliderItem from "./SliderItem";

import { heroSliderContent } from "@/app/mock";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  centerMode: false,
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  nextArrow: <></>,
  prevArrow: <></>,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.5,
      },
    },
  ],
};

const PhotoSlider = ({ toggleIsViewingAll }: { toggleIsViewingAll: () => void }) => {
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

  // const handleViewAll = useCallback(() => {}, []);

  const toggleIsHover = useCallback((index?: number) => {
    setIsHover(index);
  }, []);

  return (
    <>
      <Slider ref={ref} {...settings}>
        {heroSliderContent.map((item, index) => (
          <SliderItem
            item={item}
            key={index}
            isHover={isHover}
            index={index}
            toggleIsHover={toggleIsHover}
          />
        ))}
      </Slider>
      <SliderButtons
        handleNextSlide={handleNextSlide}
        handlePrevSlide={handlePrevSlide}
        handleViewAll={toggleIsViewingAll}
      />
    </>
  );
};

export default PhotoSlider;
