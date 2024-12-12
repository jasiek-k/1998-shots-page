"use client";

import { useCallback, useEffect, useState } from "react";

import { heroDesktop, heroMobile } from "@/app/config";

const mobileVideo = {
  src: "/videos/hero_mobile.mp4",
  width: "768",
  height: "1365",
};
const desktopVideo = {
  src: "/videos/hero_desktop.mp4",
  width: "1920",
  height: "1080",
};

const HeroVideo = () => {
  const [video, setVideo] = useState(desktopVideo);
  const [poster, setPoster] = useState(heroDesktop.src);

  const handleResize = useCallback(() => {
    if (window.matchMedia("(max-width: 768px)").matches) {
      console.log("mobile");
      setVideo(mobileVideo); // Mobile video
      setPoster(heroMobile.src);
    } else {
      console.log("desktop");

      setVideo(desktopVideo); // Desktop video
      setPoster(heroDesktop.src);
    }
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <video
      src={video.src}
      width={video.width}
      height={video.height}
      poster={poster}
      preload="none"
      playsInline={true}
      autoPlay={true}
      muted={true}
      loop={true}
    >
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroVideo;
