/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ScrollWrapper, SessionTile, Title } from "@components";
import { useEffect, useMemo, useRef, useState } from "react";

import sessions from "@/app/mock";
import { useIsMobile } from "@/hooks";

const PageDetails = () => (
  <div className="flex flex-col justify-between px-4 md:px-0">
    <Title className="tracking-2">PHOTO SESSIONS®</Title>
    <div className="flex flex-col pt-35 md:pt-0 text-sm">
      <p className="uppercase pb-6 text-justify">
        Take your time while exploring <span className="tracking-2">1998® </span>
        sessions. Portraits? Automotive photos? We got you and wish you a pleasant
        experience.
      </p>
      <span>[MORE THINGS COMING IN THE FUTURE]</span>
    </div>
  </div>
);

const isEnabled = false;

const ViewAllSection = () => {
  const [firstFullyVisible, setFirstFullyVisible] = useState(null);
  const debounceTimeout = useRef<any>(null);
  const refs = useRef<any>([]);
  const isMobile = useIsMobile();
  const content = useMemo(() => Object.values(sessions).reverse(), []);

  useEffect(() => {
    if (!isMobile || !isEnabled) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (debounceTimeout.current) {
          clearTimeout(debounceTimeout.current);
        }

        debounceTimeout.current = setTimeout(() => {
          const fullyVisible = entries
            .filter(entry => entry.intersectionRatio === 1)
            .map(entry => entry.target);

          if (fullyVisible.length > 0) {
            const firstVisible = fullyVisible[0];
            const index = refs.current.findIndex((el: any) => el === firstVisible);

            setFirstFullyVisible(prev => (prev !== index ? index : prev));
          }
        }, 100);
      },
      { threshold: [1.0] },
    );

    refs.current.forEach((el: any) => {
      if (el) {
        observer.observe(el);
      }
    });

    return () => {
      observer.disconnect();
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, [isMobile]);

  return (
    <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6 md:gap-y-6">
      <ScrollWrapper className="flex">
        <PageDetails />
      </ScrollWrapper>
      {content.map((item, index) => (
        <SessionTile
          ref={element => {
            refs.current[index] = element;
          }}
          isHighlighted={index === firstFullyVisible}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export default ViewAllSection;
