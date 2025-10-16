/* eslint-disable @typescript-eslint/no-explicit-any */
import { Chip, EContainerRatio, RatioContainer, ResponsiveImage } from "@components";
import clsx from "clsx";
import Link from "next/link";

import type { ISession } from "@/app/types";
import { formatYear } from "@/app/utils";

interface IProps extends ISession {
  className?: string;
}

const SessionTileDetails = ({ id, title, subtitle, year }: any) => (
  <div className="flex flex-col justify-between md:h-full px-4 md:px-0">
    <p className="inline-block m-0 pt-4 md:pt-3 uppercase gap-x-2 items-baseline">
      <span className={clsx("text-md font-bold leading-base", subtitle && "mr-2")}>
        {title}
      </span>
      {subtitle && <span className="text-xs font-light">{subtitle}</span>}
    </p>
    {/* <div className="font-light text-xxs flex justify-between pt-1">
      <span>{`ISSUE NO. ${id}`}</span>
      <span>{`YEAR ${formatYear(year)}`}</span>
    </div> */}
  </div>
);

const SessionTileDetails2 = ({ id, title, subtitle, year }: any) => (
  <div className="flex flex-col justify-between md:h-full px-4 md:px-0">
    <p className="inline-block m-0 pt-3 uppercase gap-x-2 items-baseline">
      <span className={clsx("text-xmd font-light leading-base", subtitle && "mr-2")}>
        {title}
      </span>
      {subtitle && <span className="text-xmd font-bold">{subtitle}</span>}
    </p>
    <div className="font-light text-xxs flex gap-2 pt-3 md:pt-5">
      {/* <span>{`[ ISSUE NO. ${id} ]`}</span> */}
      <Chip size="sm">{`ISSUE NO. ${id}`}</Chip>
      <Chip size="sm">{`YEAR ${formatYear(year)}`}</Chip>

      {/* <span>{`[ YEAR ${formatYear(year)} ]`}</span> */}
    </div>
  </div>
);

export const SessionTile = ({
  // id,
  // year,
  // title,
  // subtitle,
  href,
  heroSecondaryMobile,
  ...rest
}: IProps) => (
  <Link href={href} className="flex flex-col">
    <div className="">
      <RatioContainer
        // style={{ borderRadius: "8px", overflow: "hidden" }}
        className="sessionItem"
        variant={EContainerRatio.SessionItem}
      >
        <ResponsiveImage
          desktop={{ src: heroSecondaryMobile, width: 540, height: 540 }}
          mobile={{ src: heroSecondaryMobile, width: 375, height: 375 }}
        />
      </RatioContainer>
    </div>
    <SessionTileDetails2 {...rest} />
  </Link>
);
