import type { TTheme } from "@context";
import { LeftArrowIcon, RightArrowIcon } from "@public/icons";
import clsx from "clsx";
import Link from "next/link";

type TVariant = "left" | "right";
type TType = "button" | "link";

interface IArrowButtonProps {
  variant: TVariant;
  type: TType;
  children: string;
  href?: string;
  className?: string;
  forcedTheme?: TTheme;
  handleClick?: () => void;
}

const styles = {
  text: {
    dark: "text-off-white",
    light: "text-black",
    default: "text-black dark:text-off-white",
  },
  icon: {
    dark: "fill-off-white",
    light: "fill-black",
    default: "dark:fill-off-white fill-black",
  },
  container: {
    dark: "border-off-white",
    light: "border-black",
    default: "border-black dark:border-off-white",
  },
};

export const ArrowButton = ({
  variant,
  type,
  href,
  handleClick,
  children,
  className,
  forcedTheme,
}: IArrowButtonProps) => {
  const textStyle = clsx(
    "uppercase",
    forcedTheme ? styles.text[forcedTheme] : styles.text.default,
  );
  const iconStyle = forcedTheme ? styles.icon[forcedTheme] : styles.icon.default;
  const containerStyle = clsx(
    "flex px-4 pb-1/2 pt-3/2 border-1 rounded-full items-baseline w-max",
    forcedTheme ? styles.container[forcedTheme] : styles.container.default,
    className,
  );

  const content =
    variant === "left" ? (
      <>
        <LeftArrowIcon width="18px" className={iconStyle} />
        <span className={clsx("ml-2", textStyle)}>{children}</span>
      </>
    ) : (
      <>
        <span className={clsx("mr-2", textStyle)}>{children}</span>
        <RightArrowIcon width="18px" className={iconStyle} />
      </>
    );

  if (type === "button") {
    return (
      <button type="button" onClick={handleClick} className={containerStyle}>
        {content}
      </button>
    );
  } else if (href) {
    return (
      <Link href={href} prefetch={true} className={containerStyle}>
        {content}
      </Link>
    );
  }
};
