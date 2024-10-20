import Image from "next/image";

import { EContainerRatio, RatioContainer } from "components/Container";

import type { ILinkTile } from "./types";

import ArrowButton from "@/components/ArrowButton";

const LinkTile = ({ link: { href, src, caption, subcaption } }: { link: ILinkTile }) => (
  <div className="w-full md:w-2/4">
    <RatioContainer variant={EContainerRatio.HeroLink} className="zoom">
      <Image src={src} alt="" className="w-full" width={540} height={300} />
      <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center text-off-white">
        <span className="text-sm md:text-md uppercase font-bold mb-2">{caption}</span>
        <ArrowButton type="link" variant="right" href={href}>
          {subcaption}
        </ArrowButton>
      </div>
    </RatioContainer>
  </div>
);

export default LinkTile;
