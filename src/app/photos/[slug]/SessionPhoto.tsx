"use client";

import { type IModal } from "@components";
import clsx from "clsx";
import Image from "next/image";

import { EPhotoType, type TPhoto } from "@/app/types";

interface ISessionPhotoProps {
  photo: TPhoto;
  openModal: (img: IModal) => void;
}

const handlePhotoWidth = (length: number) => {
  switch (length) {
    case 2:
      return "md:w-1/2";
    case 3:
      return "md:w-1/3";
    case 4:
      return "md:w-1/4";
    case 5:
      return "md:w-1/5";
    default:
      return "md:w-auto";
  }
};

const OverlayButton = ({ handleClick }: { handleClick: () => void }) => (
  <button
    type="button"
    className="absolute top-0 left-0 w-full h-full"
    onClick={handleClick}
  />
);

const SessionPhoto = ({
  photo: { type, img, width, height },
  openModal,
}: ISessionPhotoProps) => {
  const Photo = ({ photoClass, src }: { src: string; photoClass?: string }) => (
    <>
      <div className={clsx(photoClass, "relative")}>
        <Image
          src={src}
          width={width}
          height={height}
          className="w-full"
          priority={true}
          alt=""
        />
        <OverlayButton handleClick={() => openModal({ img: src, width, height })} />
      </div>
    </>
  );

  return (
    <>
      {type === EPhotoType.VerticalPhoto && (
        <Photo photoClass="max-w-182 mx-auto" src={img} />
      )}
      {type === EPhotoType.FullWidth && <Photo src={img} />}
      {type === EPhotoType.Group && (
        <div className="flex flex-col md:flex-row md:gap-6">
          {img.map((item, index) => (
            <Photo
              key={index}
              src={item}
              photoClass={clsx(
                handlePhotoWidth(img.length),
                index !== img.length - 1 && "mb-6 md:mb-0",
              )}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SessionPhoto;
