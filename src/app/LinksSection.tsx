import Link from "next/link";
import { Fragment } from "react";

import Container, { EContainerVariant } from "components/Container";

import { landingLinks } from "@/app/config";
import { Title } from "@/components/Text";

const LinksSection = () => (
  <Container variant={EContainerVariant.Base} className="flex flex-col my-35">
    <Title className="text-center mb-4">Sooo now you can...</Title>
    <div className="flex flex-col justify-center items-center">
      {landingLinks.map(({ href, caption }, index) => (
        <Fragment key={index}>
          <Link href={href} className="underline">
            {caption}
          </Link>
          {index !== landingLinks.length - 1 && <span className="my-1">OR</span>}
        </Fragment>
      ))}
    </div>
  </Container>
);

export default LinksSection;
