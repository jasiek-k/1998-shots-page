"use client";

import { useEffect, useRef, useState } from "react";

const useIsOutOfView = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isOutState, setIsOutState] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { top, height } = ref.current.getBoundingClientRect();
        const isOutNow = Math.abs(top) > height;

        if (isOutNow && !isOutState) {
          const event = new Event("showButton");

          dispatchEvent(event);
          setIsOutState(true);
        } else if (!isOutNow && isOutState) {
          const event = new Event("hideButton");

          dispatchEvent(event);
          setIsOutState(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOutState]);

  return { ref };
};

export default useIsOutOfView;
