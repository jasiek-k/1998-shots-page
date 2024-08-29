import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export enum EContainerVariant {
  Base = "base",
  BaseNoMobilePadding = "baseNoMobilePadding",
  FullWidth = "fullWidth",
}

export enum EContainerRatio {
  FullPage = "fullPage",
  Banner = "banner",
  Teaser = "teaser",
}

type TDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface IRatioContainerProps extends TDivProps {
  variant: EContainerRatio;
}

interface IContainerProps extends TDivProps {
  variant?: EContainerVariant;
}

const containerStyle: Record<EContainerVariant, string> = {
  [EContainerVariant.Base]: "max-w-container md:px-20 px-4",
  [EContainerVariant.BaseNoMobilePadding]: "max-w-container md:px-20",
  [EContainerVariant.FullWidth]: "max-w-fullWidth",
};

const ratios: Record<EContainerRatio, string> = {
  [EContainerRatio.FullPage]: "pb-fullPageMobile md:pb-fullPage",
  [EContainerRatio.Banner]: "pb-bannerMobile md:pb-banner",
  [EContainerRatio.Teaser]: "pb-teaser",
};

const Container = ({
  children,
  className,
  variant = EContainerVariant.Base,
  ...props
}: IContainerProps) => (
  <div
    className={clsx("mx-auto w-full flex", containerStyle[variant], className)}
    {...props}
  >
    {children}
  </div>
);

export const RatioContainer = ({
  children,
  className,
  variant,
}: IRatioContainerProps) => (
  <div className={clsx("relative overflow-hidden w-full", ratios[variant])}>
    <div className={clsx("absolute top-0 left-0 w-full h-full", className)}>
      {children}
    </div>
  </div>
);

export default Container;
