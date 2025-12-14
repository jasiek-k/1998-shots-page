import { Container, EContainerVariant, Title } from "@components";
import { ArrowButton } from "@components";

import { links } from "@/app/config";

const GalleryLinkSection = () => (
  <Container
    variant={EContainerVariant.Base}
    className="flex flex-col md:grid md:grid-cols-12"
  >
    <Title className="md:col-start-2 md:col-span-4">
      so now, let&apos;s get to the point...
    </Title>
    <div className="md:pl-6 pt-4 md:pt-0 flex flex-col md:col-start-6 md:col-span-5 justify-between">
      <p className="uppercase font-normal text-sm pb-8 md:pb-2 text-justify">
        After this short introduction, let&apos;s go and watch what you came for.
      </p>
      <ArrowButton href={links.photos.href} variant="right" type="link">
        GO TO GALLERY
      </ArrowButton>
    </div>
  </Container>
);

export default GalleryLinkSection;
