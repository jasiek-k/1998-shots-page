"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import ScrollTopButton from "./ScrollTopButton";

import useDisplayScrollButton from "@/utils/useDisplayScrollButton";

interface IProps {
  children: JSX.Element;
}

const ScrollWrapper = ({ children }: IProps) => {
  const [container, setContainer] = useState<Element | undefined>(undefined);
  const { ref, isDisplayed } = useDisplayScrollButton();

  useEffect(() => {
    if (document) {
      setContainer(document.body);
    }
  }, []);

  return (
    <div ref={ref}>
      {children}
      {container &&
        createPortal(<ScrollTopButton isDisplayed={isDisplayed} />, container)}
    </div>
  );
};

export default ScrollWrapper;
