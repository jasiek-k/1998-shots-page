"use client";

import { useEffect, useState } from "react";

import { useIsOutOfView } from "./useIsOutOfView";

export const useDisplayScrollButton = () => {
  const { ref, isOutState } = useIsOutOfView();
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    let oldValue = 0;

    const handleScroll = () => {
      const newValue = window.scrollY;
      const isScrollingUp = oldValue - newValue > 0;
      const isScrollingDown = oldValue - newValue < 0;
      const isScrolledBottom =
        window.scrollY + window.innerHeight > document.body.scrollHeight - 250;

      if (isScrollingUp || isScrolledBottom) {
        setIsDisplayed(true);
      } else if (isScrollingDown) {
        setIsDisplayed(false);
      }

      oldValue = newValue;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isDisplayed: isDisplayed && isOutState,
    ref,
  };
};
