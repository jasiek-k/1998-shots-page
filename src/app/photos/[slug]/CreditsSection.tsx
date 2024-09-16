import Link from "next/link";
import { Fragment } from "react";

import { links } from "@/app/config";
import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const creditStyle = "uppercase text-sm md:text-sm";

const CreditsSection = ({ credits }: ICreditsSectionProps) => {
  const isDividerDisplayed = (index: number) =>
    index < credits.length - 1 || credits.length === 1;

  return (
    <Container className="flex-col mt-29 mb-35">
      <h1 className="text-md md:text-md font-bold mb-4">CREATED BY</h1>
      {credits.map(({ name, role }, index) => (
        <Fragment key={index}>
          <div className="flex justify-between">
            <span className={creditStyle}>{name}</span>
            <span className={creditStyle}> {role}</span>
          </div>
          {isDividerDisplayed(index) && (
            <div className="w-full border-t-1 dark:bg-off-white mt-1 md:mt-2 mb-2" />
          )}
        </Fragment>
      ))}
      <div className="mt-12 flex flex-col md:flex-row">
        <h1 className="text-md font-bold uppercase">WANT TO SEE MORE PHOTOS?</h1>
        <Link href={links.photos.href}>
          <span className="text-sm uppercase underline md:ml-3 md:leading-photosLink">
            GO BACK TO PHOTOS LISTING
          </span>
        </Link>
      </div>
    </Container>
  );
};

export default CreditsSection;
