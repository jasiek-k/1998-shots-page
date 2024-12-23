"use client";

import clsx from "clsx";
import Image from "next/image";

import type { TPhoto } from "@/app/types";
import { EPhotoType } from "@/app/types";
import type { IModal } from "@/components/Modal";

interface ISessionPhotoProps {
  photo: TPhoto;
  openModal: (img: IModal) => void;
  className?: string;
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
  className,
}: ISessionPhotoProps) => (
  <div className={className}>
    {type === EPhotoType.VerticalPhoto && (
      <div className="max-w-182 mx-auto relative">
        <Image
          src={img}
          width={width}
          height={height}
          className="w-full"
          priority={true}
          alt=""
        />
        <OverlayButton handleClick={() => openModal({ img, width, height })} />
      </div>
    )}
    {type === EPhotoType.FullWidth && (
      <div className="relative">
        <Image
          src={img}
          width={width}
          height={height}
          className="w-full"
          priority={true}
          alt=""
        />
        <OverlayButton handleClick={() => openModal({ img, width, height })} />
      </div>
    )}
    {type === EPhotoType.Group && (
      <>
        <div className="flex flex-col md:flex-row md:gap-6">
          {img.map((item, index) => (
            <div key={index} className={clsx(handlePhotoWidth(img.length), "relative")}>
              <Image
                src={item}
                width={width}
                height={height}
                className={clsx(index !== img.length - 1 && "mb-6 md:mb-0", "w-full")}
                priority={true}
                alt=""
              />
              <OverlayButton
                handleClick={() => openModal({ img: item, width, height })}
              />
            </div>
          ))}
        </div>
      </>
    )}
  </div>
);

export default SessionPhoto;
