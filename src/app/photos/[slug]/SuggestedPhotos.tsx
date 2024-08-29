import Image from "next/image";
import Link from "next/link";

import Container, {
  EContainerRatio,
  EContainerVariant,
  RatioContainer,
} from "components/Container";

import type { ISuggestedSession } from "@/app/types";

interface ISuggestedPhotosProps {
  photos: ISuggestedSession[];
}

interface ISessionTeaserProps {
  item: any;
  className: string;
}

const SessionTeaser = ({
  item: { img, href, width, height },
  className,
}: ISessionTeaserProps) => (
  <Link href={href} className={className}>
    <RatioContainer variant={EContainerRatio.Teaser}>
      <Image src={img} alt="" className="w-full" width={width} height={height} />
    </RatioContainer>
  </Link>
);

const SuggestedPhotos = ({ photos }: ISuggestedPhotosProps) => (
  <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col pb-15">
    <div className="pl-4">
      <h1 className="text-lg font-bold mb-2 uppercase">Check another ones</h1>
      <div className="overflow-auto">
        <div style={{ width: "288vw" }} className="flex gap-6 pr-4 md:pr-0">
          {photos.map((item, index) => (
            <SessionTeaser item={item} key={index} className="w-3/12" />
          ))}
        </div>
      </div>
    </div>
  </Container>
);

export default SuggestedPhotos;
