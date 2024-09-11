"use client";

import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";

const ScrollTopButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isInField, setIsInField] = useState(false);

  const handleScroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleShowButtonEvent = useCallback(() => {
    setIsInField(true);
  }, []);

  const handleHideButtonEvent = useCallback(() => {
    setIsInField(false);
  }, []);

  useEffect(() => {
    window.addEventListener("showButton", handleShowButtonEvent);
    window.addEventListener("hideButton", handleHideButtonEvent);

    return () => {
      window.removeEventListener("showButton", handleShowButtonEvent);
      window.removeEventListener("hideButton", handleHideButtonEvent);
    };
  }, [handleShowButtonEvent, handleHideButtonEvent]);

  useEffect(() => {
    let oldValue = 0;

    const handleScroll = () => {
      const newValue = window.scrollY;

      if (oldValue - newValue < 0) {
        setIsDisplayed(true);
      } else if (oldValue - newValue > 0) {
        setIsDisplayed(false);
      }

      oldValue = newValue;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      type="button"
      className={clsx(
        isDisplayed && isInField ? "block" : "hidden",
        "fixed bottom-15 right-15",
      )}
      onClick={handleScroll}
    >
      TOP
    </button>
  );
};

export default ScrollTopButton;
