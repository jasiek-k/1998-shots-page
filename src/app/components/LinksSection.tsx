import { Container, EContainerVariant, Title } from "@components";
import { ArrowButton } from "@components";
import { Fragment } from "react";

import { landingLinks } from "@/app/config";

// TODO caption, emoji?
const LinksSection = () => (
  <Container variant={EContainerVariant.Base} className="flex flex-col my-35">
    <Title className="text-center mb-4">
      so now, let&apos;s watch
      <br />
      some photos...
    </Title>
    <div className="flex flex-col justify-center items-center">
      {landingLinks.map(({ href, caption }, index) => (
        <Fragment key={index}>
          <ArrowButton href={href} variant="right" type="link">
            {caption}
          </ArrowButton>
          {index !== landingLinks.length - 1 && <span className="my-1">OR</span>}
        </Fragment>
      ))}
    </div>
  </Container>
);

export default LinksSection;
