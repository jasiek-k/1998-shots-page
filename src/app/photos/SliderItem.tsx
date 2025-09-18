import { EContainerRatio, RatioContainer } from "@components";
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

import type { ISuggestedSession } from "@/app/types";

interface ISliderItemProps {
  item: ISuggestedSession;
  toggleIsHover: (index?: number) => void;
  index: number;
  isHover: number | undefined;
}

const SliderItem = ({
  item: { img, href },
  toggleIsHover,
  index,
  isHover,
}: ISliderItemProps) => {
  const isBlurred = Boolean(isHover !== undefined && isHover !== index);

  const handleMouseEnter = useCallback(() => {
    toggleIsHover(index);
  }, [index, toggleIsHover]);

  const handleMouseLeave = useCallback(() => {
    toggleIsHover();
  }, [toggleIsHover]);

  return (
    <div className="px-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Link href={href} prefetch={true} className="relative">
        <RatioContainer variant={EContainerRatio.Teaser}>
          <Image
            src={img}
            className="w-full"
            priority={true}
            width={338}
            height={600}
            alt=""
          />
          {isBlurred && (
            <div className="bg-og-black opacity-85 absolute w-full h-full top-0 left-0" />
          )}
        </RatioContainer>
      </Link>
    </div>
  );
};

export default SliderItem;
