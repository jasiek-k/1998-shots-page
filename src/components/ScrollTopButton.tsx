"use client";

import clsx from "clsx";

import useScrollButton from "./useScrollButton";

const ScrollTopButton = () => {
  const { isDisplayed, handleScrollTop } = useScrollButton();

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
