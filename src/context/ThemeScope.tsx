"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";

import { defaultTheme, storageKey } from "@/app/config";

export type TTheme = "dark" | "light";

interface IProps {
  children: JSX.Element;
}

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

const defaultContext: IThemeContext = {
  theme: defaultTheme,
  toggleTheme: () => {
    //
  },
};

const ThemeContext = createContext(defaultContext);

export const ThemeScope = ({ children }: IProps) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem(storageKey, newTheme);
  }, [theme]);

  useEffect(() => {
    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme as TTheme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = (): IThemeContext => {
  const value = useContext(ThemeContext);

  return value;
};

export default useTheme;
