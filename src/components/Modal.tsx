"use client";

import { useSwipe } from "@hooks";
import { CloseIcon, LeftArrowIcon, RightArrowIcon } from "@public/icons";
import Image from "next/image";
import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export interface IModal {
  img: string;
  width: number;
  height: number;
}

interface IModalProps {
  photo: IModal | undefined;
  handleNextPhoto: () => void;
  handlePrevPhoto: () => void;
  closeModal: () => void;
}

const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";

const ModalComponent = ({
  photo,
  handleNextPhoto,
  handlePrevPhoto,
  closeModal,
}: IModalProps) => {
  const swipeHandlers = useSwipe({
    onSwipeLeft: handleNextPhoto,
    onSwipeRight: handlePrevPhoto,
  });

  const handleKeyDown = useCallback(
    ({ key }: KeyboardEvent) => {
      switch (key) {
        case ARROW_LEFT:
          handlePrevPhoto();
          break;
        case ARROW_RIGHT:
          handleNextPhoto();
          break;
        default:
          break;
      }
    },
    [handleNextPhoto, handlePrevPhoto],
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!photo) {
    return null;
  }

  const { img, width, height } = photo;

  return (
    <div className="freezeScrollAllSizes backdrop-brightness-25 fixed left-0 top-0 w-full h-full bg-red flex flex-row justify-center items-center">
      <div className="hidden md:flex flex-col pl-9 pr-5">
        <button type="button" className="p-1" onClick={handlePrevPhoto}>
          <LeftArrowIcon width="32px" className="dark:fill-off-white fill-black" />
        </button>
      </div>
      <div className="flex w-full h-full justify-center items-center relative md:static">
        <Image
          src={img}
          width={width}
          height={height}
          className="object-contain w-full h-full max-h-screen py-5"
          alt=""
        />
        <button
          type="button"
          className="absolute md:hidden top-0 left-0 w-full h-full"
          {...swipeHandlers}
        />
      </div>
      <button
        type="button"
        onClick={closeModal}
        className="fixed top-6 md:top-9 right-4 md:right-9 p-1"
      >
        <CloseIcon width="24px" className="dark:stroke-off-white stroke-black" />
      </button>
      <div className="hidden md:flex flex-col pr-9 pl-5">
        <button type="button" className="p-1" onClick={handleNextPhoto}>
          <RightArrowIcon width="32px" className="dark:fill-off-white fill-black" />
        </button>
      </div>
    </div>
  );
};

export const Modal = (props: IModalProps) => {
  if (typeof window !== "undefined") {
    return createPortal(<ModalComponent {...props} />, document.body);
  }
};
