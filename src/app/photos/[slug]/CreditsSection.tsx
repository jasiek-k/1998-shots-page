import { Container } from "@components";

import type { ISession } from "@/app/types";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const CreditsSection = ({ credits }: ICreditsSectionProps) => (
  <Container className="grid grid-cols-5 md:grid-cols-12 gap-y-3 md:gap-y-2">
    {credits.map(({ name, role }) => (
      <div
        key={name}
        className="flex flex-col md:grid col-start-2 col-span-4 md:grid-cols-12 md:col-start-1 md:col-span-12"
      >
        <span className="uppercase text-xs md:text-sm font-light md:col-start-2 md:col-span-4">{`[${role}]`}</span>
        <span className="uppercase text-xmd md:text-md font-normal mt-1 md:mt-0 md:col-start-6 md:col-span-6">
          {name}
        </span>
      </div>
    ))}
  </Container>
);

export default CreditsSection;
