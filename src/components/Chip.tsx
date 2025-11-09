import clsx from "clsx";

const sizes = {
  sm: "px-2 pt-1/2 text-xxs",
  md: "px-4 pb-1/2 pt-3/2 text-xs",
};

interface IProps {
  children: string;
  size?: keyof typeof sizes;
}

// not used
export const Chip = ({ children, size = "md" }: IProps) => (
  <div
    className={clsx(
      "flex border-1 rounded-full items-baseline w-max uppercase font-light",
      sizes[size],
    )}
  >
    {children}
  </div>
);
