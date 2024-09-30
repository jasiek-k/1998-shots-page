"use client";

import clsx from "clsx";
import { useCallback } from "react";

interface IProps {
  isDisplayed: boolean;
}

const ScrollTopButton = ({ isDisplayed }: IProps) => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      className={clsx(
        isDisplayed ? "flex" : "hidden",
        "fixed bottom-12 md:bottom-15 right-3 md:right-5 flex-col items-center justify-center w-10 h-14 md:w-11 md:h-15 text-xxs md:text-xs border-1 border-off-white rounded-full z-50",
      )}
      onClick={handleScrollTop}
    >
      <span>↑</span>
      <span>TOP</span>
    </button>
  );
};

export default ScrollTopButton;
