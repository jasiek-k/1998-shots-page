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
}

const ResponsiveImage = ({ mobile, desktop }: IResponsiveImage) => (
  <>
    <Image
      {...desktop}
      className={clsx("w-full hidden md:block", desktop?.className)}
      alt=""
    />
    <Image {...mobile} className={clsx("w-full md:hidden", mobile?.className)} alt="" />
  </>
);

export default ResponsiveImage;
