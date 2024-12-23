import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { EContainerRatio, RatioContainer } from "components/Container";

import type { ISuggestedSession } from "../types";

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

  return (
    <div className="px-3">
      <Link
        href={href}
        onMouseEnter={() => {
          toggleIsHover(index);
        }}
        onMouseLeave={() => {
          toggleIsHover();
        }}
        prefetch={true}
      >
        <RatioContainer variant={EContainerRatio.Teaser}>
          <Image
            src={img}
            className={clsx("w-full", isBlurred && "blur-md")}
            priority={true}
            width={338}
            height={600}
            alt=""
          />
        </RatioContainer>
      </Link>
    </div>
  );
};

export default SliderItem;
