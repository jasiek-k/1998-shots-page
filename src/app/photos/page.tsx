import Container, { EContainerVariant } from "components/Container";

import PhotoSlider from "./PhotoSlider";

const Photos = () => {
  return (
    <Container
      variant={EContainerVariant.FullWidth}
      className="flex-col mt-6 mb-10 md:mb-"
    >
      <PhotoSlider />
    </Container>
  );
};

export default Photos;
