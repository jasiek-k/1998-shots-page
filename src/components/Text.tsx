import clsx from "clsx";
import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  className?: string;
}

export const Title = ({ className, children, ...props }: IProps) => (
  <h1
    {...props}
    className={clsx("uppercase text-lg md:text-xl font-bold leading-header", className)}
  >
    {children}
  </h1>
);
