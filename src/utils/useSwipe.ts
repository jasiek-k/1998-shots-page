import { useCallback, useState } from "react";

interface IProps {
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const useSwipe = ({ onSwipeLeft, onSwipeRight }: IProps) => {
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = useCallback(e => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const onTouchMove = useCallback(e => setTouchEnd(e.targetTouches[0].clientX), []);

  const onTouchEnd = () => {
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
  };

  return { onTouchStart, onTouchMove, onTouchEnd };
};

export default useSwipe;
