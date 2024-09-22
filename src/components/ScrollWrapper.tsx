import { createPortal } from "react-dom";

import ScrollTopButton from "./ScrollTopButton";

import useDisplayScrollButton from "@/utils/useDisplayScrollButton";

interface IProps {
  children: JSX.Element;
}

const ScrollWrapper = ({ children }: IProps) => {
  const { ref, isDisplayed } = useDisplayScrollButton();

  return (
    <div ref={ref}>
      {children}
      {createPortal(<ScrollTopButton isDisplayed={isDisplayed} />, document.body)}
    </div>
  );
};

export default ScrollWrapper;
