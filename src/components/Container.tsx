import clsx from "clsx";
import type { DetailedHTMLProps, HTMLAttributes } from "react";

interface IRatioContainer
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  ratio: number;
}

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clsx("max-w-container mx-auto w-full flex px-20", className)}
    {...props}
  >
    {children}
  </div>
);

export const RatioContainer = ({ children, className, ratio }: IRatioContainer) => (
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
