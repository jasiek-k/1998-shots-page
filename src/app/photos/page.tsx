import { Container, EContainerVariant } from "@components";

import ViewAllSection from "./ViewAllSection";

const Photos = () => (
  <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col mb-8">
    <ViewAllSection />
  </Container>
);

export default Photos;
