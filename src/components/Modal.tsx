import Image from "next/image";

import { CloseIcon, LeftArrowIcon, RightArrowIcon } from "public/icons";

import useSwipe from "@/utils/useSwipe";

export interface IModal {
  img: string;
  width: number;
  height: number;
}

interface IModalProps {
  photo: IModal;
  onNextPhoto: () => void;
  onPrevPhoto: () => void;
  closeModal: () => void;
}

const Modal = ({
  photo: { img, width, height },
  onNextPhoto,
  onPrevPhoto,
  closeModal,
}: IModalProps) => {
  const swipeHandlers = useSwipe({ onSwipeLeft: onNextPhoto, onSwipeRight: onPrevPhoto });

  return (
    <div className="freezeScrollAllSizes backdrop-blur-default fixed left-0 top-0 w-full h-full bg-red flex flex-row justify-center items-center">
      <div className="hidden md:flex flex-col pl-9 pr-5">
        <button type="button" className="p-1" onClick={onPrevPhoto}>
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
        <button type="button" className="p-1" onClick={onNextPhoto}>
          <RightArrowIcon width="32px" className="dark:fill-off-white fill-black" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
