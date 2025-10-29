import { LeftArrowIcon, RightArrowIcon } from "@public/icons";
import clsx from "clsx";
import Link from "next/link";

type TVariant = "left" | "right" | "no-icon";
type TType = "button" | "link";

interface IArrowButtonProps {
  variant: TVariant;
  type: TType;
  children: string;
  href?: string;
  className?: string;
  handleClick?: () => void;
  isActive?: boolean;
}

export const ArrowButton = ({
  variant,
  type,
  href,
  handleClick,
  children,
  className,
  isActive,
  ...rest
}: IArrowButtonProps) => {
  const iconStyle = "fill-off-white";
  const textStyle = "uppercase font-light text-md"; // xs
  const containerStyle = clsx(
    "flex px-6 pb-1/2 pt-3/2 border-1 rounded-full items-baseline w-max border-off-white", //px-4
    isActive ? "text-black bg-off-white" : "text-off-white",
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
      <Link href={href} prefetch={true} className={containerStyle} {...rest}>
        {content}
      </Link>
    );
  }

  return null;
};
