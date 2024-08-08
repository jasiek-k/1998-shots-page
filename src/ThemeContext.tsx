"use client";

import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

type TTheme = "dark" | "light";

interface IThemeScopeProps {
  children: ReactNode;
}

interface IThemeContext {
  theme: TTheme;
  toggleTheme: () => void;
}

const defaultTheme = "dark";

const defaultValues: IThemeContext = {
  theme: defaultTheme,
  toggleTheme: () => {},
};

const ThemeContext = createContext(defaultValues);

export const ThemeScope = ({ children }: IThemeScopeProps) => {
  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme === "dark") {
        return "light";
      } else {
        return "dark";
      }
    });
  }, []);

  const values = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  return context;
};
