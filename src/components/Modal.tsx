import Image from "next/image";

import { CloseIcon, LeftArrowIcon, RightArrowIcon } from "public/icons";

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
}: IModalProps) => (
  <div className="freezeScrollAllSizes backdrop-blur-default fixed left-0 top-0 w-full h-full bg-red flex flex-row justify-center items-center">
    <div className="flex flex-col pl-9 pr-5">
      <button type="button" className="p-1" onClick={onPrevPhoto}>
        <LeftArrowIcon width="32px" />
      </button>
    </div>
    <div className="flex w-full justify-center items-center">
      <Image
        src={img}
        width={width}
        height={height}
        className="object-contain max-h-screen py-5"
        alt=""
      />
    </div>
    <div className="flex flex-col pr-9 pl-5">
      <button type="button" onClick={closeModal} className="fixed top-9 right-9 p-1">
        <CloseIcon width="24px" />
      </button>
      <button type="button" className="p-1" onClick={onNextPhoto}>
        <RightArrowIcon width="32px" />
      </button>
    </div>
  </div>
);

export default Modal;
