import Image from "next/image";
import Link from "next/link";

import type { ISuggestedSession } from "@/app/types";
import RatioContainer from "@/components/RatioContainer";

interface ISuggestedPhotosProps {
  photos: ISuggestedSession[];
}

const SessionTeaser = ({ item: { img, href, width, height }, className }: any) => (
  <Link href={href} className={className}>
    <RatioContainer ratio={600 / 338}>
      <Image src={img} alt="" className="w-full" width={width} height={height} />
    </RatioContainer>
  </Link>
);

const SuggestedPhotos = ({ photos }: ISuggestedPhotosProps) => (
  <div className="flex flex-col">
    <h1 className="text-lg font-bold mb-5 uppercase">Check another ones</h1>
    <div className="flex gap-10">
      {photos.map((item, index) => (
        <SessionTeaser item={item} key={index} className="w-3/12" />
      ))}
    </div>
  </div>
);

export default SuggestedPhotos;
