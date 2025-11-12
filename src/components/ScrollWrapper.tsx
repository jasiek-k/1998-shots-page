"use client";

import { useDisplayScrollButton } from "@hooks";
import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { ScrollTopButton } from "./ScrollTopButton";

interface IProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: JSX.Element;
}

export const ScrollWrapper = ({ children, ...props }: IProps) => {
  const [container, setContainer] = useState<Element>();
  const { ref, isDisplayed } = useDisplayScrollButton();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setContainer(document.body);
    }
  }, []);

  return (
    <div ref={ref} {...props}>
      {children}
      {container &&
        createPortal(<ScrollTopButton isDisplayed={isDisplayed} />, container)}
    </div>
  );
};
