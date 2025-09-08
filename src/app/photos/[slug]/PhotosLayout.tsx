"use client";

import SessionPhoto from "./SessionPhoto";
import useHandleModal from "./useHandleModal";

import { type TPhoto } from "@/app/types";
import Container, { EContainerVariant } from "@/components/Container";
import Modal from "@/components/Modal";

interface IPhotosLayoutProps {
  photos: TPhoto[];
}

const PhotosLayout = ({ photos }: IPhotosLayoutProps) => {
  const { setModal, modal, ...rest } = useHandleModal(photos);

  return (
    <>
      <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col">
        {photos.map((item, index) => (
          <SessionPhoto photo={item} openModal={setModal} key={index} className="mb-6" />
        ))}
      </Container>
      <Modal photo={modal} {...rest} />
    </>
  );
};

export default PhotosLayout;
