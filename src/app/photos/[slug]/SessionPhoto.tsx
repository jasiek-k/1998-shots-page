import clsx from "clsx";
import Image from "next/image";

import { EPhotoType } from "@/app/types";

interface ISessionPhotoProps {
  photo: any;
  className: string;
}

const SessionPhoto = ({
  photo: { type, img, width, height },
  className,
}: ISessionPhotoProps) => {
  return (
    <div className={className}>
      {/* {type === EPhotoType.Photo && <Image />*/}
      {type === EPhotoType.FullWidth && (
        <Image src={img} width={width} height={height} alt="" className="w-full" />
      )}
      {type === EPhotoType.Group && (
        <>
          <div className="flex gap-6">
            {img.map((item, index) => (
              <div key={index}>
                <Image src={item} width={width} height={height} alt="" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SessionPhoto;
