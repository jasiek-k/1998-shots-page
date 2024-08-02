import clsx from "clsx";

const Container: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => (
  <div
    className={clsx("max-w-container mx-auto w-full flex px-10", className)}
    {...props}
  >
    {children}
  </div>
);

export default Container;
