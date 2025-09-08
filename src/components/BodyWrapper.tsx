"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

import useTheme from "@/context/ThemeScope";
import useFonts from "@/hooks/useFonts";

interface IProps {
  children: ReactNode;
}

const BodyWrapper = ({ children }: IProps) => {
  const fonts = useFonts();
  const { theme } = useTheme();

  return <body className={clsx(fonts.className, theme)}>{children}</body>;
};

export default BodyWrapper;
