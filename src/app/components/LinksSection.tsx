import { Container, EContainerVariant, Title } from "@components";
import { ArrowButton } from "@components";

import { links } from "@/app/config";

// TODO caption, emoji?
const LinksSection = () => (
  <Container variant={EContainerVariant.Base} className="flex flex-col items-center">
    <Title className="text-center mb-4">
      so now, let&apos;s watch
      <br />
      some photos...
    </Title>
    <ArrowButton href={links.photos.href} variant="right" type="link">
      GO TO GALLERY
    </ArrowButton>
  </Container>
);

export default LinksSection;
