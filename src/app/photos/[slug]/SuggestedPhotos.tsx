import {
  Container,
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "@components";
import Image from "next/image";
import Link from "next/link";

import type { ISuggestedSession } from "@/app/types";

interface ISuggestedPhotosProps {
  photos: ISuggestedSession[];
}

interface ISessionTeaserProps {
  item: ISuggestedSession;
  className: string;
}

const SessionTeaser = ({ item: { img, href }, className }: ISessionTeaserProps) => (
  <Link href={href} className={className} prefetch={true}>
    <RatioContainer variant={EContainerRatio.Teaser}>
      <Image src={img} alt="" className="w-full" width={338} height={600} />
    </RatioContainer>
  </Link>
);

const SuggestedPhotos = ({ photos }: ISuggestedPhotosProps) => (
  <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col">
    <div className="pl-4 md:pl-0">
      <h1 className="text-xmd md:text-md font-normal mb-2 uppercase">
        Check another sessions
      </h1>
      <div className="overflow-auto snap-x noScroll">
        <div className="flex gap-6 pr-4 md:pr-0 w-teaserMobile md:w-auto">
          {photos.map((item, index) => (
            <SessionTeaser item={item} key={index} className="w-3/12 snap-center" />
          ))}
        </div>
      </div>
    </div>
  </Container>
);

export default SuggestedPhotos;
