import Image from "next/image";
import Link from "next/link";

import type { ISuggestedSession } from "@/app/types";

interface ISuggestedPhotosProps {
  photos: ISuggestedSession[];
}

const SessionTeaser = ({ item: { img, href, width, height } }: any) => (
  <Link href={href}>
    <div style={{ paddingBottom: "56.33%" }} className="relative overflow-hidden">
      <Image
        src={img}
        alt="top-0 left-0 absolute"
        className=""
        width={width}
        height={height}
      />
    </div>
  </Link>
);

const SuggestedPhotos = ({ photos }: ISuggestedPhotosProps) => (
  <div className="flex flex-col">
    <h1 className="text-lg font-bold mb-5 uppercase">Check another ones</h1>
    <div style={{ gap: "20px" }} className="flex">
      {photos.map((item, index) => (
        <SessionTeaser item={item} key={index} />
      ))}
    </div>
  </div>
);

export default SuggestedPhotos;
