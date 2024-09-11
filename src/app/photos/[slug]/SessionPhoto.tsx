import clsx from "clsx";
import Image from "next/image";

import type { TPhoto } from "@/app/types";
import { EPhotoType } from "@/app/types";

interface ISessionPhotoProps {
  photo: TPhoto;
  className?: string;
}

const SessionPhoto = ({
  photo: { type, img, width, height },
  className,
}: ISessionPhotoProps) => (
  <div className={className}>
    {type === EPhotoType.VerticalPhoto && (
      <div className="max-w-182 mx-auto">
        <Image src={img} width={width} height={height} className="w-full" alt="" />
      </div>
    )}
    {type === EPhotoType.FullWidth && (
      <Image src={img} width={width} height={height} className="w-full" alt="" />
    )}
    {type === EPhotoType.Group && (
      <>
        <div className="flex flex-col md:flex-row md:gap-6">
          {img.map((item, index) => (
            <div key={index}>
              <Image
                src={item}
                width={width}
                height={height}
                className={clsx(index !== img.length - 1 && "mb-6 md:mb-0", "w-full")}
                alt=""
              />
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

export default SessionPhoto;
