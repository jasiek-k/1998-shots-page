import { EContainerRatio, RatioContainer, ResponsiveImage } from "@components";
import clsx from "clsx";
import Link from "next/link";

import type { ISession } from "@/app/types";

interface IProps extends ISession {
  className?: string;
}

export const SessionTile = ({
  hero,
  heroSecondaryMobile,
  title,
  subtitle,
  href,
}: IProps) => (
  <Link href={href}>
    <div className="sessionItem">
      <RatioContainer className="sessionItem" variant={EContainerRatio.SessionItem}>
        <ResponsiveImage
          desktop={{ src: hero, width: 540, height: 230 }}
          mobile={{ src: heroSecondaryMobile, width: 375, height: 375 }}
        />
      </RatioContainer>
    </div>
    <p className="px-4 md:px-0 inline-block m-0 pt-4 md:pt-3 uppercase gap-x-2 items-baseline">
      <span className={clsx("text-xmd font-bold leading-base", subtitle && "mr-2")}>
        {title}
      </span>
      {subtitle && <span className="text-xxs">{subtitle}</span>}
    </p>
  </Link>
);
