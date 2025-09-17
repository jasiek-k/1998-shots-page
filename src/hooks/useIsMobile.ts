import { useCallback, useEffect, useState } from "react";

import { mobileBreakpoint } from "@/app/config";

export const useIsMobile = (breakpoint = mobileBreakpoint) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth <= breakpoint : false,
  );

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth <= breakpoint);
  }, [breakpoint]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint, handleResize]);

  return isMobile;
};
