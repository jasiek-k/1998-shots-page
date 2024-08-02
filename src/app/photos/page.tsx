"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./test.css";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useRef, useState } from "react";
import Slider from "react-slick";

import { teasers } from "./mock";

import Container from "@/components/Container";

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

const formatTeaserTitle = (title: string) => {
  if (!title) {
    return;
  }

  const arr = new Array(10).fill(title);

  return arr.join(" - ");
};

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

  return (
    <section>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Slider ref={ref} {...settings}>
          {teasers.map(({ img, href, title }, index) => (
            <div className="px-5" key={index}>
              <Link
                href={href}
                onMouseEnter={() => {
                  setIsHover(index);
                }}
                onMouseLeave={() => {
                  setIsHover(undefined);
                }}
              >
                <div className="wrapper">
                  <Image
                    src={img}
                    alt=""
                    className={clsx(
                      "absolute w-full top-0 left-0",
                      Boolean(isHover !== undefined && isHover !== index) && "XD",
                    )}
                    width={338}
                    height={600}
                  />
                  {Boolean(isHover !== undefined && isHover === index) && (
                    <div
                      style={{ width: "400px" }}
                      className="slide-text absolute bottom-16 uppercase flex"
                    >
                      <h1 className="text-md font-bold">{formatTeaserTitle(title)}</h1>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex flex-row justify-end mr-5">
        <button className={navButtonStyle} onClick={handlePrevSlide}>
          Prev
        </button>
        <button className={navButtonStyle} onClick={handleNextSlide}>
          Next
        </button>
      </div>
    </section>
  );
};

export default Photos;
