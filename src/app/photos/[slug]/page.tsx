import Image from "next/image";
import Link from "next/link";

import DetailsSection from "./DetailsSection";
import SuggestedPhotos from "./SuggestedPhotos";

import Container from "@/components/Container";

const session = {
  title: "I love the smell of burning rubber in the morning",
  heroPhoto: "/images/ILTSOBRITM_hero.jpg",
  details: ["Sony Alpha 7 II", "Year 2K23"],
  photos: [
    {
      type: "full-width",
      width: "",
      height: "",
      img: "",
    },
    {
      type: "group",
      img: [""],
    },
    {
      type: "photo",
      img: "",
    },
  ],
  suggested: [
    { img: "", href: "" },
    { img: "", href: "" },
    { img: "", href: "" },
    { img: "", href: "" },
  ],
};

const PhotoSession = () => {
  const { title, heroPhoto, details, photos, suggested } = session;

  return (
    <section>
      <div style={{ paddingBottom: "37.5%" }} className="w-full relative overflow-hidden">
        <Image
          src={heroPhoto}
          className="absolute top-0 left-0 w-full"
          alt=""
          width={1920}
          height={720}
        />
      </div>
      <Container className="flex-col">
        <h1 className="text-xxl font-off-white w-full text-center uppercase font-bold">
          {`"${title}"`}
        </h1>
        <DetailsSection details={details} />
        {photos.map(({ type, img }) => (
          <>
            {/* {type === EPhotoType.Photo && <Image />}
            {type === EPhotoType.FullWidth && <Image />}
            {type === EPhotoType.Group && <Image />} */}
          </>
        ))}
        <SuggestedPhotos photos={suggested} />
      </Container>
    </section>
  );
};

export default PhotoSession;
