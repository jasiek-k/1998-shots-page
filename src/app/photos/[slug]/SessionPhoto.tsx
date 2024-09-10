import clsx from "clsx";
import Image from "next/image";

import type { IFullWidth, IGroup, IPhoto } from "@/app/types";
import { EPhotoType } from "@/app/types";

interface ISessionPhotoProps {
  photo: IFullWidth | IGroup | IPhoto;
  className?: string;
}

const SessionPhoto = ({
  photo: { type, img, width, height },
  className,
}: ISessionPhotoProps) => (
  <div className={className}>
    {/* {type === EPhotoType.Photo && <Image />*/}
    {type === EPhotoType.FullWidth && (
      <Image src={img} width={width} height={height} alt="" className="w-full" />
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
