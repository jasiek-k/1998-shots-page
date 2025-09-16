"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const ScrollTop = () => {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return <></>;
};
