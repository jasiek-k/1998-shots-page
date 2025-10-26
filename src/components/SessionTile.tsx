import { EContainerRatio, RatioContainer, ResponsiveImage } from "@components";
import clsx from "clsx";
import Link from "next/link";

import type { ISession } from "@/app/types";
// import { formatYear } from "@/app/utils";

interface IProps extends ISession {
  className?: string;
}

export const SessionTile = ({
  href,
  heroSecondaryMobile,
  id,
  title,
  subtitle,
  year,
}: IProps) => (
  <Link href={href} className="flex flex-col">
    <div className="">
      <RatioContainer className="sessionItem" variant={EContainerRatio.SessionItem}>
        <ResponsiveImage
          desktop={{ src: heroSecondaryMobile, width: 540, height: 540 }}
          mobile={{ src: heroSecondaryMobile, width: 375, height: 375 }}
        />
      </RatioContainer>
    </div>
    <div className="flex flex-col justify-between md:h-full px-4 md:px-0">
      <p className="inline-block m-0 pt-3 uppercase gap-x-2 items-baseline leading-base">
        <span className={clsx("text-xmd font-light", subtitle && "mr-2")}>{title}</span>
        {subtitle && <span className="text-xmd font-light">{`[${subtitle}]`}</span>}
      </p>
      <div className="font-light text-xxs flex gap-2 pt-3 md:pt-5"></div>
    </div>
  </Link>
);
