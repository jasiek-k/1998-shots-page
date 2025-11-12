import clsx from "clsx";
import Image from "next/image";

export interface IImage {
  src: string;
  className?: string;
  width: number;
  height: number;
}

interface IResponsiveImageProps {
  config: {
    mobile: IImage;
    desktop: IImage;
  };
  priority?: boolean;
  loading?: "eager" | "lazy";
}

export const ResponsiveImage = ({
  config: { mobile, desktop },
  priority,
  loading,
}: IResponsiveImageProps) => (
  <>
    <Image
      {...desktop}
      className={clsx("w-full hidden md:block", desktop?.className)}
      priority={priority}
      loading={loading}
      unoptimized
      alt=""
    />
    <Image
      {...mobile}
      className={clsx("w-full md:hidden", mobile?.className)}
      priority={priority}
      loading={loading}
      unoptimized
      alt=""
    />
  </>
);
