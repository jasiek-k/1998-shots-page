import Link from "next/link";
import { Fragment } from "react";

import { links } from "@/app/config";
import type { ISession } from "@/app/types";
import ArrowButton from "@/components/ArrowButton";
import Container from "@/components/Container";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const creditStyle = "uppercase text-sm md:text-sm";

const CreditsSection = ({ credits }: ICreditsSectionProps) => {
  const isDividerDisplayed = (index: number) =>
    index < credits.length - 1 || credits.length === 1;

  return (
    <Container className="flex flex-col md:flex-row mt-29 mb-35">
      <div className="md:w-2/3 md:pr-6 flex flex-col justify-center">
        <div>
          {/* <h1 className="text-md md:text-md font-bold mb-4">CREATED BY</h1> */}
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
        </div>
      </div>
      <div className="w-divider bg-off-white" />
      <div className="md:w-1/3 flex md:flex-col justify-between md:justify-normal mt-6 md:mt-0 md:pl-6">
        <h1 className="text-md font-bold uppercase">WANT TO SEE MORE?</h1>
        <ArrowButton variant="right" type="link" href={links.photos.href}>
          GO BACK TO PHOTOS
        </ArrowButton>
        {/* <Link href={links.photos.href}>
          <span className="text-sm uppercase underline md:leading-photosLink">
            GO BACK TO PHOTOS LISTING
          </span>
        </Link> */}
      </div>
    </Container>
  );
};

export default CreditsSection;
