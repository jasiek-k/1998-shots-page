import Container, { EContainerVariant } from "components/Container";

import LinkTile from "./LinkTile";

import { landingLinks } from "@/app/config";

const LinksSection = () => (
  <Container
    variant={EContainerVariant.BaseNoMobilePadding}
    className="flex flex-col md:flex-row gap-4 md:gap-6 mt-35"
  >
    {landingLinks.map((item, index) => (
      <LinkTile link={item} key={index} />
    ))}
  </Container>
);

export default LinksSection;
