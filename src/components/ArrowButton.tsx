"use client";

import { LeftArrowIcon, RightArrowIcon } from "@public/icons";
import clsx from "clsx";
import Link from "next/link";

type TVariant = "left" | "right" | "no-icon";
type TType = "button" | "link";
export type TSize = "sm" | "lg";

interface IArrowButtonProps {
  variant: TVariant;
  type: TType;
  children: string;
  href?: string;
  className?: string;
  handleClick?: () => void;
  isActive?: boolean;
  size?: TSize;
}

const sizes = {
  sm: {
    text: "text-xs",
    container: "px-4",
  },
  lg: {
    text: "text-xmd",
    container: "px-6",
  },
};

export const ArrowButton = ({
  variant,
  type,
  href,
  handleClick = () => {},
  children,
  className,
  isActive,
  size = "sm",
  ...rest
}: IArrowButtonProps) => {
  const iconStyle = "fill-off-white mb-1";
  const textStyle = clsx("uppercase font-light", sizes[size].text);
  const containerStyle = clsx(
    "flex pb-1/2 pt-3/2 border-1 rounded-full items-center w-max border-off-white",
    isActive ? "text-black bg-off-white" : "text-off-white",
    sizes[size].container,
    className,
  );

  const leftVariant = (
    <>
      <LeftArrowIcon width="18px" className={iconStyle} />
      <span className={clsx("ml-2", textStyle)}>{children}</span>
    </>
  );
  const rightVariant = (
    <>
      <span className={clsx("mr-2", textStyle)}>{children}</span>
      <RightArrowIcon width="18px" className={iconStyle} />
    </>
  );
  const noIconVariant = <span className={textStyle}>{children}</span>;

  const variants = {
    left: leftVariant,
    right: rightVariant,
    "no-icon": noIconVariant,
  };
  const content = variants[variant];

  if (type === "button") {
    return (
      <button type="button" onClick={handleClick} className={containerStyle} {...rest}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        prefetch={true}
        className={containerStyle}
        onClick={handleClick}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  return null;
};
