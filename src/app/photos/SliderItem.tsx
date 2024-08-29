import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { EContainerRatio, RatioContainer } from "components/Container";

import { formatTeaserTitle } from "@/helpers";

interface ISliderItemProps {
  item: any;
  toggleIsHover: (index?: number) => void;
  index: number;
  isHover: number | undefined;
}

const SliderItem = ({ item, toggleIsHover, index, isHover }: ISliderItemProps) => {
  const isBlurred = Boolean(isHover !== undefined && isHover !== index);
  const isCaptionDisplayed = Boolean(isHover !== undefined && isHover === index);
  //   console.log(item, index);
  const { img, href, title } = item;

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
      >
        <RatioContainer variant={EContainerRatio.Teaser}>
          <Image
            src={img}
            alt=""
            className={clsx("w-full", isBlurred && "blur-md")}
            width={338}
            height={600}
          />
          {isCaptionDisplayed && (
            <div className="animate-slide absolute bottom-16 uppercase flex whitespace-nowrap w-100">
              <h1 className="text-md font-bold inline-block">
                {formatTeaserTitle(title)}
              </h1>
            </div>
          )}
        </RatioContainer>
      </Link>
    </div>
  );
};

export default SliderItem;
