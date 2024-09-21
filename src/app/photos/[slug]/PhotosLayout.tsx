"use client";

import { createPortal } from "react-dom";

import SessionPhoto from "./SessionPhoto";
import useHandleModal from "./useHandleModal";

import { type TPhoto } from "@/app/types";
import Container, { EContainerVariant } from "@/components/Container";
import Modal from "@/components/Modal";

interface IPhotosLayoutProps {
  photos: TPhoto[];
}

const PhotosLayout = ({ photos }: IPhotosLayoutProps) => {
  const { modal, setModal, closeModal, handleNextPhoto, handlePrevPhoto } =
    useHandleModal(photos);

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
        createPortal(
          <Modal
            photo={modal}
            closeModal={closeModal}
            onNextPhoto={handleNextPhoto}
            onPrevPhoto={handlePrevPhoto}
          />,
          document.body,
        )}
    </>
  );
};

export default PhotosLayout;
