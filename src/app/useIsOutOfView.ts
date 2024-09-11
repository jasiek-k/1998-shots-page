"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const useIsOutOfView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOutState, setIsOutState] = useState(false);

  const handleEvent = useCallback(
    (eventName: "showButton" | "hideButton", isOut: boolean) => {
      const event = new Event(eventName);

      dispatchEvent(event);
      setIsOutState(isOut);
    },
    [],
  );

  const handleScroll = useCallback(() => {
    if (ref.current) {
      const { top, height } = ref.current.getBoundingClientRect();
      const isOutNow = Math.abs(top) > height;

      if (isOutNow && !isOutState) {
        handleEvent("showButton", true);
      } else if (!isOutNow && isOutState) {
        handleEvent("hideButton", false);
      }
    }
  }, [handleEvent, isOutState]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOutState, handleScroll]);

  return { ref };
};

export default useIsOutOfView;
