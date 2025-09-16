import { type IModal } from "@components";
import { useCallback, useState } from "react";

import { EPhotoType, type TPhoto } from "@/app/types";

const useHandleModal = (photos: TPhoto[]) => {
  const [modal, setModal] = useState<IModal>();

  const closeModal = useCallback(() => {
    setModal(undefined);
  }, []);

  const findCurrentPhoto = useCallback(() => {
    if (!modal) {
      return;
    }

    const flatImages = photos.flatMap(({ img, type, ...rest }) => {
      if (type === EPhotoType.Group) {
        return img.map(src => ({ img: src, ...rest }));
      }

      return { img, ...rest };
    });
    const currentIndex = flatImages.findIndex(({ img }) => img === modal.img);

    return { flatImages, currentIndex };
  }, [modal, photos]);

  const handleNextPhoto = useCallback(() => {
    const result = findCurrentPhoto();

    if (!result) {
      return;
    }

    const { flatImages, currentIndex } = result;

    if (currentIndex === flatImages.length - 1) {
      setModal(flatImages[0]);
    } else {
      setModal(flatImages[currentIndex + 1]);
    }
  }, [findCurrentPhoto]);

  const handlePrevPhoto = useCallback(() => {
    const result = findCurrentPhoto();

    if (!result) {
      return;
    }

    const { flatImages, currentIndex } = result;

    if (currentIndex === 0) {
      setModal(flatImages[flatImages.length - 1]);
    } else {
      setModal(flatImages[currentIndex - 1]);
    }
  }, [findCurrentPhoto]);

  return { modal, setModal, closeModal, handleNextPhoto, handlePrevPhoto };
};

export default useHandleModal;
