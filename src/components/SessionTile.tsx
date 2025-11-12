/* eslint-disable @typescript-eslint/no-explicit-any */
import { EContainerRatio, RatioContainer, ResponsiveImage } from "@components";
import clsx from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

import type { ISession } from "@/app/types";
import { formatYear } from "@/app/utils";

interface IProps extends ISession {
  className?: string;
  isHighlighted: boolean;
}

export const SessionTile = forwardRef(
  (
    { id, href, year, title, subtitle, heroSecondaryMobile, isHighlighted }: IProps,
    ref: any,
  ) => (
    <Link href={href} ref={ref} className="flex flex-col">
      <RatioContainer className="sessionItem" variant={EContainerRatio.SessionItem}>
        {isHighlighted ? (
          <div className="bg-off-white w-full h-full"></div>
        ) : (
          <ResponsiveImage
            config={{
              mobile: { src: heroSecondaryMobile, width: 375, height: 375 },
              desktop: { src: heroSecondaryMobile, width: 540, height: 540 },
            }}
          />
        )}
      </RatioContainer>
      <div className="flex flex-col px-4 md:px-0">
        <p className="pt-3 pb-4">
          <span className="font-normal text-xxs">ISSUE NO. {id}</span>
          <span className="font-light text-xxxs mx-1">X</span>
          <span className="font-normal text-xxs">YEAR {formatYear(year)}</span>
        </p>
        <p className="inline-block m-0 uppercase gap-x-2 items-baseline leading-base">
          <span className={clsx("text-sm font-normal", subtitle && "mr-2")}>{title}</span>
          {subtitle && <span className="text-xxs font-light">{subtitle}</span>}
        </p>
      </div>
    </Link>
  ),
);

SessionTile.displayName = "SessionTile";
