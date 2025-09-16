"use client";

import { LogoRound } from "@public/icons";
import { useCallback, useEffect, useRef, useState } from "react";

export const LoadingScreen = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isDisplayed, setIsDisplayed] = useState(true);

  const hideScreen = useCallback(() => {
    setTimeout(() => {
      setIsDisplayed(false);
    }, 500);
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener("animationend", hideScreen);
    }
  }, [hideScreen]);

  if (isDisplayed) {
    return (
      <div className="freezeScrollAllSizes fixed top-0 left-0 w-full h-full backdrop-blur-default backdrop-brightness-75 z-50 flex justify-center items-center">
        <div ref={ref} className="spin">
          <LogoRound width="100px" className="fill-off-white" />
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
