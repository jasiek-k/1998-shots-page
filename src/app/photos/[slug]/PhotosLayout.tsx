"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { createPortal } from "react-dom";

import { CloseIcon, LeftArrowIcon, RightArrowIcon } from "public/icons";

import SessionPhoto from "./SessionPhoto";

import type { TPhoto } from "@/app/types";
import Container, { EContainerVariant } from "@/components/Container";

interface IPhotosLayoutProps {
  photos: TPhoto[];
}

const Modal = ({ photo, closeModal }: any) => (
  <div className="freezeScroll backdrop-blur-default fixed left-0 top-0 w-full h-full bg-red flex flex-row justify-center items-center">
    <div className="flex flex-col pl-9 pr-5">
      <button type="button" className="p-1">
        <LeftArrowIcon width="32px" />
      </button>
    </div>
    <div className="flex w-full justify-center items-center">
      <Image
        src={photo.src}
        width={photo.width}
        height={photo.height}
        className="object-contain max-h-screen py-5"
        alt=""
      />
    </div>
    <div className="flex flex-col pr-9 pl-5">
      <button type="button" onClick={closeModal} className="fixed top-9 right-9 p-1">
        <CloseIcon width="24px" />
      </button>
      <button type="button" className="p-1">
        <RightArrowIcon width="32px" />
      </button>
    </div>
  </div>
);

const PhotosLayout = ({ photos }: IPhotosLayoutProps) => {
  const [modal, setModal] = useState<any | null>();

  const closeModal = useCallback(() => {
    setModal(null);
  }, []);

  const handleNextPhoto = useCallback(() => {}, []);

  const handlePrevPhoto = useCallback(() => {}, []);

  return (
    <>
      <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col">
        {photos.map((item, index) => (
          <SessionPhoto
            photo={item as TPhoto}
            openModal={setModal}
            key={index}
            className="mb-6"
          />
        ))}
      </Container>
      {modal &&
        createPortal(<Modal photo={modal} closeModal={closeModal} />, document.body)}
    </>
  );
};

export default PhotosLayout;
