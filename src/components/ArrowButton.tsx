import Link from "next/link";

import { LeftArrowIcon, RightArrowIcon } from "public/icons";

type TVariant = "left" | "right";
type TType = "button" | "link";

interface IArrowButtonProps {
  variant: TVariant;
  type: TType;
  children: string;
  href?: string;
  handleClick?: () => void;
}

const style =
  "flex px-4 pb-1/2 pt-3/2 border-1 border-black dark:border-off-white rounded-full items-baseline w-max";

const ArrowButton = ({
  variant,
  type,
  href,
  handleClick,
  children,
}: IArrowButtonProps) => {
  const content =
    variant === "left" ? (
      <>
        <LeftArrowIcon width="18px" className="dark:fill-off-white fill-black" />
        <span className="ml-2 uppercase">{children}</span>
      </>
    ) : (
      <>
        <span className="mr-2 uppercase">{children}</span>
        <RightArrowIcon width="18px" className="dark:fill-off-white fill-black" />
      </>
    );

  if (type === "button") {
    return (
      <button type="button" onClick={handleClick} className={style}>
        {content}
      </button>
    );
  } else if (href) {
    return (
      <Link href={href} className={style}>
        {content}
      </Link>
    );
  }
};

export default ArrowButton;
