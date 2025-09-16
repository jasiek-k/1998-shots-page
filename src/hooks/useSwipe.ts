"use client";

import type { TouchEventHandler } from "react";
import { useCallback, useState } from "react";

interface IProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

export const useSwipe = ({ onSwipeLeft, onSwipeRight }: IProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart: TouchEventHandler = useCallback(e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove: TouchEventHandler = useCallback(
    e => setTouchEnd(e.targetTouches[0].clientX),
    [],
  );

  const onTouchEnd: TouchEventHandler = useCallback(() => {
    if (!touchStart || !touchEnd) {
      return;
    }

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    }

    if (isRightSwipe) {
      onSwipeRight();
    }
  }, [onSwipeLeft, onSwipeRight, touchEnd, touchStart]);

  return { onTouchStart, onTouchMove, onTouchEnd };
};
