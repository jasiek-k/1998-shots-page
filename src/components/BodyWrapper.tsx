"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

import useTheme from "@/utils/ThemeScope";
import useFonts from "@/utils/useFonts";

interface IProps {
  children: ReactNode;
}

const BodyWrapper = ({ children }: IProps) => {
  const fonts = useFonts();
  const { theme } = useTheme();

  return <body className={clsx(fonts.className, theme)}>{children}</body>;
};

export default BodyWrapper;
