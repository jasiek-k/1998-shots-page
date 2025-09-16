"use client";

import { useDisplayScrollButton } from "@hooks";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ScrollTopButton } from "./ScrollTopButton";

interface IProps {
  children: JSX.Element;
}

export const ScrollWrapper = ({ children }: IProps) => {
  const [container, setContainer] = useState<Element | undefined>(undefined);
  const { ref, isDisplayed } = useDisplayScrollButton();

  useEffect(() => {
    if (typeof window !== "undefined") {
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
