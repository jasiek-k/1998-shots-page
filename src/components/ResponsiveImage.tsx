import clsx from "clsx";
import Image from "next/image";

interface IImage {
  src: string;
  className?: string;
  width: number;
  height: number;
}

interface IResponsiveImage {
  mobile: IImage;
  desktop: IImage;
  priority?: boolean;
}

const ResponsiveImage = ({ mobile, desktop, priority }: IResponsiveImage) => (
  <>
    <Image
      {...desktop}
      className={clsx("w-full hidden md:block", desktop?.className)}
      priority={priority}
      alt=""
    />
    <Image
      {...mobile}
      className={clsx("w-full md:hidden", mobile?.className)}
      priority={priority}
      alt=""
    />
  </>
);

export default ResponsiveImage;
