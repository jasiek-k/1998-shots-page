"use client";

import clsx from "clsx";
import Image from "next/image";

import type { TPhoto } from "@/app/types";
import { EPhotoType } from "@/app/types";

interface ISessionPhotoProps {
  photo: TPhoto;
  openModal: (src: any) => void;
  className?: string;
}

const OverlayButton = ({ handleClick }: any) => (
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
}: ISessionPhotoProps) => {
  return (
    <>
      <div className={className}>
        {type === EPhotoType.VerticalPhoto && (
          <div className="max-w-182 mx-auto relative">
            <Image src={img} width={width} height={height} className="w-full" alt="" />
            <OverlayButton handleClick={() => openModal({ src: img, width, height })} />
          </div>
        )}
        {type === EPhotoType.FullWidth && (
          <div className="relative">
            <Image src={img} width={width} height={height} className="w-full" alt="" />
            <OverlayButton handleClick={() => openModal({ src: img, width, height })} />
          </div>
        )}
        {type === EPhotoType.Group && (
          <>
            <div className="flex flex-col md:flex-row md:gap-6">
              {img.map((item, index) => (
                <div key={index} className={`md:w-1/${img.length} relative`}>
                  <Image
                    src={item}
                    width={width}
                    height={height}
                    className={clsx(index !== img.length - 1 && "mb-6 md:mb-0", "w-full")}
                    alt=""
                  />
                  <OverlayButton
                    handleClick={() => openModal({ src: item, width, height })}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SessionPhoto;
