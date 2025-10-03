"use client";

import { Container, EContainerVariant } from "@components";
import clsx from "clsx";
import { useEffect, useState } from "react";

import PhotoSlider from "./PhotoSlider";
import ToggleViewButton from "./ToggleViewButton";
import ViewAllSection from "./ViewAllSection";

import { displayKey } from "@/app/config";

const Photos = () => {
  const [isViewingAll, setIsViewingAll] = useState(false);

  const toggleIsViewingAll = () => {
    setIsViewingAll(prev => {
      const next = !prev;

      if (next) {
        localStorage.setItem(displayKey, "true");
      } else {
        localStorage.removeItem(displayKey);
      }

      return next;
    });
  };

  useEffect(() => {
    const saved = localStorage.getItem(displayKey);
    if (saved) {
      setIsViewingAll(true);
    }
  }, []);

  return (
    <Container
      variant={
        isViewingAll ? EContainerVariant.BaseNoMobilePadding : EContainerVariant.FullWidth
      }
      className="flex-col mb-10"
    >
      <div
        className={clsx(
          "flex justify-end mb-2 pr-4",
          isViewingAll ? "md:pr-0" : "md:pr-5",
        )}
      >
        <ToggleViewButton isViewingAll={isViewingAll} onClick={toggleIsViewingAll} />
      </div>
      {isViewingAll ? <ViewAllSection /> : <PhotoSlider />}
    </Container>
  );
};

export default Photos;
