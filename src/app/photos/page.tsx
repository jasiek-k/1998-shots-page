"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

import { teasers } from "./mock";
import SliderItem from "./SliderItem";

import RatioContainer from "@/components/RatioContainer";

// TODO responsive slides
const settings = {
  className: "",
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
    <section>
      <RatioContainer className="flex flex-col justify-end" ratio={1080 / 1920}>
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
      </RatioContainer>
    </section>
  );
};

export default Photos;
