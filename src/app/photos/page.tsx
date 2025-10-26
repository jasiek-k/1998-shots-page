"use client";

import { Container, EContainerVariant } from "@components";

import ViewAllSection from "./ViewAllSection";

const Photos = () => {
  return (
    <Container variant={EContainerVariant.BaseNoMobilePadding} className="flex-col mb-10">
      <ViewAllSection />
    </Container>
  );
};

export default Photos;
