"use client";

import { TopArrowIcon } from "@public/icons";
import clsx from "clsx";
import { useCallback } from "react";

interface IProps {
  isDisplayed: boolean;
}

export const ScrollTopButton = ({ isDisplayed }: IProps) => {
  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <button
      type="button"
      className={clsx(
        isDisplayed ? "flex" : "hidden",
        "scrollTopButton fixed bottom-12 md:bottom-15 right-3 md:right-5 flex-col items-center justify-center w-10 h-15 md:w-11 md:h-16 border-1 border-black dark:border-off-white rounded-full z-50",
      )}
      onClick={handleScrollTop}
    >
      <TopArrowIcon className="dark:fill-off-white fill-black w-5/2" />
      <span className="mt-1 font-light text-xxxs">TOP</span>
    </button>
  );
};
