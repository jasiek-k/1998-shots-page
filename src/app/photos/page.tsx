"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

import Container, { EContainerVariant } from "components/Container";

import { teasers } from "./mock";
import SliderItem from "./SliderItem";

// TODO responsive slides
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
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 4,
  //     },
  //   },
  // ],
};

const navButtonStyle = "py-5 px-5 uppercase underline";

const Photos = () => {
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
    <Container variant={EContainerVariant.FullWidth} className="flex-col mt-6">
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
      <div className="flex flex-row justify-end mr-5">
        <button className={navButtonStyle} onClick={handlePrevSlide}>
          Prev
        </button>
        <button className={navButtonStyle} onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </Container>
  );
};

export default Photos;
