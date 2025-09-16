"use client";

import { useTheme } from "@context";
import clsx from "clsx";

interface IThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch = ({ className }: IThemeSwitchProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        "border-1 rounded-full border-black dark:border-off-white px-4 pt-3/2 pb-1/2 text-xs",
        className,
      )}
    >
      {theme === "dark" ? "LIGHT" : "DARK"}
    </button>
  );
};
