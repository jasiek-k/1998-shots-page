import clsx from "clsx";
import Image from "next/image";

interface IImage {
  src: string;
  className?: string;
  width: number;
  height: number;
}

interface IResponsiveImageProps {
  mobile: IImage;
  desktop: IImage;
  priority?: boolean;
  loading?: "eager" | "lazy";
}

const ResponsiveImage = ({
  mobile,
  desktop,
  priority,
  loading,
}: IResponsiveImageProps) => (
  <>
    <Image
      {...desktop}
      className={clsx("w-full hidden md:block", desktop?.className)}
      priority={priority}
      loading={loading}
      alt=""
    />
    <Image
      {...mobile}
      className={clsx("w-full md:hidden", mobile?.className)}
      priority={priority}
      loading={loading}
      alt=""
    />
  </>
);

export default ResponsiveImage;
