import { useCallback, useEffect, useState } from "react";

const useScrollButton = () => {
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [isInField, setIsInField] = useState(false);

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleShowButtonEvent = useCallback(() => {
    setIsInField(true);
  }, []);

  const handleHideButtonEvent = useCallback(() => {
    setIsInField(false);
  }, []);

  useEffect(() => {
    window.addEventListener("showButton", handleShowButtonEvent);
    window.addEventListener("hideButton", handleHideButtonEvent);

    return () => {
      window.removeEventListener("showButton", handleShowButtonEvent);
      window.removeEventListener("hideButton", handleHideButtonEvent);
    };
  }, [handleShowButtonEvent, handleHideButtonEvent]);

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
    handleScrollTop,
    isDisplayed: isDisplayed && isInField,
  };
};

export default useScrollButton;
