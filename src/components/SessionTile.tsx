import { EContainerRatio, RatioContainer, ResponsiveImage } from "@components";
import clsx from "clsx";
import Link from "next/link";

import type { ISession } from "@/app/types";
import { formatYear } from "@/app/utils";

interface IProps extends ISession {
  className?: string;
}

export const SessionTile = ({
  id,
  year,
  href,
  title,
  subtitle,
  heroSecondaryMobile,
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
      <p className="inline-block m-0 pt-4 md:pt-3 uppercase gap-x-2 items-baseline">
        <span className={clsx("text-md font-bold leading-base", subtitle && "mr-2")}>
          {title}
        </span>
        {subtitle && <span className="text-xs font-light">{subtitle}</span>}
      </p>
      <div className="font-light text-xs flex justify-between pt-1">
        <span>{`ISSUE NO. ${id}`}</span>
        <span>{`YEAR ${formatYear(year)}`}</span>
      </div>
    </div>
  </Link>
);
