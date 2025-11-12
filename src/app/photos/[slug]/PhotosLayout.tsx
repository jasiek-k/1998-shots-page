"use client";

import { Container, EContainerVariant, Modal } from "@components";

import SessionPhoto from "./SessionPhoto";
import useHandleModal from "./useHandleModal";

import { type TPhoto } from "@/app/types";

interface IPhotosLayoutProps {
  photos: TPhoto[];
}

const PhotosLayout = ({ photos }: IPhotosLayoutProps) => {
  const { setModal, modal, ...rest } = useHandleModal(photos);

  return (
    <>
      <Container
        variant={EContainerVariant.BaseNoMobilePadding}
        className="flex-col gap-6"
      >
        {photos.map((item, index) => (
          <SessionPhoto photo={item} openModal={setModal} key={index} />
        ))}
      </Container>
      <Modal photo={modal} {...rest} />
    </>
  );
};

export default PhotosLayout;
