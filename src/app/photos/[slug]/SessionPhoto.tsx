import Image from "next/image";

import { EPhotoType } from "@/app/types";

const SessionPhoto = ({ photo: { type, img, width, height } }: any) => {
  return (
    <>
      {/* {type === EPhotoType.Photo && <Image />*/}
      {type === EPhotoType.FullWidth && (
        <Image src={img} width={width} height={height} alt="" className="w-full" />
      )}
      {type === EPhotoType.Group && (
        <div className="flex gap-10">
          {img.map((item, index) => (
            <div key={index}>
              <Image src={item} width={width} height={height} alt="" />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SessionPhoto;
