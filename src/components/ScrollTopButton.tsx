"use client";

import clsx from "clsx";
import { useCallback } from "react";

const ScrollTopButton = () => {
  const handleScroll = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const isDisplayed = true;

  return (
    <button
      type="button"
      className={clsx(isDisplayed ? "" : "", "fixed bottom-15")}
      onClick={handleScroll}
    >
      TOP
    </button>
  );
};

export default ScrollTopButton;
