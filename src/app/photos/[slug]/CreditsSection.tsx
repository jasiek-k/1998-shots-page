import { Container } from "@components";

import type { ISession } from "@/app/types";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const CreditsSection = ({ credits }: ICreditsSectionProps) => (
  <Container className="flex flex-col md:flex-row mt-29 mb-35">
    <div className="w-full flex flex-col justify-center">
      {credits.map(({ name, role }) => (
        <div key={name} className="flex">
          <div className="flex w-1/2 items-center justify-end">
            <span className="uppercase text-xs md:text-sm text-right pr-3 font-light">
              {name}
            </span>
          </div>
          <div className="flex w-1/2 items-center">
            <span className="uppercase text-xs md:text-md text-left pl-3 font-bold">
              {role}
            </span>
          </div>
        </div>
      ))}
    </div>
  </Container>
);

export default CreditsSection;
