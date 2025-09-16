import { Container, EContainerVariant } from "@components";

import PhotoSlider from "./PhotoSlider";

const Photos = () => (
  <Container variant={EContainerVariant.FullWidth} className="flex-col mb-10">
    <PhotoSlider />
  </Container>
);

export default Photos;
