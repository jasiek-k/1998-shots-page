import { Container, EContainerVariant, Title } from "@components";
import { ArrowButton } from "@components";

import { links } from "@/app/config";

const LinksSection = () => (
  <Container
    variant={EContainerVariant.Base}
    className="grid grid-cols-5 md:grid-cols-12"
  >
    <Title className="col-start-2 col-span-4">
      so now, let&apos;s watch some photos...
    </Title>
    <div className="md:pl-6 flex flex-col col-start-6 col-span-5 justify-between">
      <p className="uppercase font-normal text-sm">
        VIEW THE Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incidide.
      </p>
      <ArrowButton href={links.photos.href} variant="right" type="link">
        GO TO GALLERY
      </ArrowButton>
    </div>
  </Container>
);

export default LinksSection;
