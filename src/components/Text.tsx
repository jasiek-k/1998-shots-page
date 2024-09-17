import clsx from "clsx";

interface IProps {
  children: string;
  className?: string;
}

export const Title = ({ className, children }: IProps) => (
  <h1
    className={clsx("uppercase text-lg md:text-xl font-bold leading-header", className)}
  >
    {children}
  </h1>
);
