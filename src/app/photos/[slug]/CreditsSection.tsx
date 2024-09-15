import { Fragment } from "react";

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
    <Container className="flex-col mt-14 md:mt-29 mb-20 md:mb-35">
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
    </Container>
  );
};

export default CreditsSection;
