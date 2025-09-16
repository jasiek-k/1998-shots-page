"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export const useIsOutOfView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOutState, setIsOutState] = useState(false);

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { top, height } = ref.current.getBoundingClientRect();
      const isOutNow = Math.abs(top) > height;

      if (isOutNow && !isOutState) {
        setIsOutState(true);
      } else if (!isOutNow && isOutState) {
        setIsOutState(false);
      }
    }
  }, [isOutState]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOutState, handleScroll]);

  return { ref, isOutState };
};
