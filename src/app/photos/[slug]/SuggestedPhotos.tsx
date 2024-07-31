import Image from "next/image";
import Link from "next/link";

import type { ISuggestedSession } from "@/app/types";

interface ISuggestedPhotosProps {
  photos: ISuggestedSession[];
}

const SuggestedPhotos = ({ photos }: ISuggestedPhotosProps) => (
  <div className="flex flex-col">
    <h1>Check another ones</h1>
    <div className="flex">
      {photos.map(({ img, href }, index) => (
        <Link href={href} key={index}>
          <div className="">
            <Image src={img} alt="" />
          </div>
        </Link>
      ))}
    </div>
  </div>
);

export default SuggestedPhotos;
