"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollTop = () => {
  const path = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return <></>;
};

export default ScrollTop;
