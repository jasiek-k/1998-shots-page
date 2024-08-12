import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

export enum EContainerVariant {
  Base = "base",
  FullWidth = "fullWidth",
}

type TDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface IRatioContainerProps extends TDivProps {
  ratio: number;
}

interface IContainerProps extends TDivProps {
  variant?: EContainerVariant;
}

const containerStyle: Record<EContainerVariant, string> = {
  [EContainerVariant.Base]: "max-w-container px-20",
  [EContainerVariant.FullWidth]: "max-w-fullWidth",
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

export const RatioContainer = ({ children, className, ratio }: IRatioContainerProps) => (
  <div
    style={{ paddingBottom: `${ratio * 100}%` }}
    className="relative overflow-hidden w-full"
  >
    <div className={clsx("absolute top-0 left-0 w-full h-full", className)}>
      {children}
    </div>
  </div>
);

export default Container;
