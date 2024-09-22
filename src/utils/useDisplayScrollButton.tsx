import { useEffect, useState } from "react";

import useIsOutOfView from "./useIsOutOfView";

const useDisplayScrollButton = () => {
  const { ref, isOutState } = useIsOutOfView();
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    let oldValue = 0;

    const handleScroll = () => {
      const newValue = window.scrollY;
      const isScrollingUp = oldValue - newValue > 0;
      const isScrollingDown = oldValue - newValue < 0;

      if (isScrollingDown) {
        setIsDisplayed(false);
      } else if (isScrollingUp) {
        setIsDisplayed(true);
      }

      oldValue = newValue;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    isDisplayed: isDisplayed && isOutState,
    ref,
  };
};

export default useDisplayScrollButton;
