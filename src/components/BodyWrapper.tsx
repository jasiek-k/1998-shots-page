"use client";

import { useTheme } from "@context";
import { useFonts } from "@hooks";
import clsx from "clsx";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

export const BodyWrapper = ({ children }: IProps) => {
  const fonts = useFonts();
  const { theme } = useTheme();

  return <body className={clsx(fonts.className, theme)}>{children}</body>;
};
