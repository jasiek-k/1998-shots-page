"use client";

import { useCallback, useEffect, useState } from "react";

import { modeKey } from "@/config";

// TODO move to layout.tsx/some kind of context
const lightModeHours = [7, 21];

enum EColorMode {
  Light = "light",
  Dark = "dark",
}

const useColorMode = () => {
  const [currentMode, setCurrentMode] = useState<EColorMode>();

  const toggleCurrentMode = useCallback(() => {}, []);

  useEffect(() => {
    sessionStorage.setItem(modeKey, "test");
    const date = new Date();
    const currentHour = date.getHours();
    const [lightModeStart, lightModeEnd] = lightModeHours;

    if (lightModeStart <= currentHour && currentHour <= lightModeEnd) {
      setCurrentMode(EColorMode.Light);
    } else {
      setCurrentMode(EColorMode.Dark);
    }
  }, []);

  return currentMode;
};

export default useColorMode;
