"use client";

import { Container, EContainerVariant } from "@components";
import { useEffect, useState } from "react";

import PhotoSlider from "./PhotoSlider";
import ViewAllSection from "./ViewAllSection";

import { displayKey } from "@/app/config";

const Photos = () => {
  const [isViewingAll, setIsViewingAll] = useState(!!localStorage.getItem(displayKey));

  const toggleIsViewingAll = () => {
    setIsViewingAll(isViewing => {
      if (isViewing) {
        localStorage.removeItem(displayKey);
      } else {
        localStorage.setItem(displayKey, "true");
      }

      return !isViewing;
    });
  };

  return (
    <Container
      variant={
        isViewingAll ? EContainerVariant.BaseNoMobilePadding : EContainerVariant.FullWidth
      }
      className="flex-col mb-10"
    >
      {isViewingAll ? (
        <ViewAllSection toggleIsViewingAll={toggleIsViewingAll} />
      ) : (
        <PhotoSlider toggleIsViewingAll={toggleIsViewingAll} />
      )}
    </Container>
  );
};

export default Photos;
