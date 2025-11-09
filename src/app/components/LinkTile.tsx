import { ArrowButton, EContainerRatio, RatioContainer } from "@components";
import Image from "next/image";

import type { ILinkTile } from "@/app/types";

// not used
const LinkTile = ({ link: { href, src, caption, subcaption } }: { link: ILinkTile }) => (
  <div className="w-full md:w-2/4">
    <RatioContainer variant={EContainerRatio.HeroLink} className="zoom">
      <Image src={src} alt="" className="w-full" width={540} height={300} />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-off-white">
        <span className="text-md uppercase font-bold mb-2">{caption}</span>
        <ArrowButton type="link" variant="right" href={href}>
          {subcaption}
        </ArrowButton>
      </div>
    </RatioContainer>
  </div>
);

export default LinkTile;
