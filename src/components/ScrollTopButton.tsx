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
        "fixed bottom-12 md:bottom-15 right-3 md:right-5 flex-col items-center p-1 text-xxs md:text-xs",
      )}
      onClick={handleScrollTop}
    >
      <span>↑</span>
      <span>BACK TO TOP</span>
    </button>
  );
};

export default ScrollTopButton;
