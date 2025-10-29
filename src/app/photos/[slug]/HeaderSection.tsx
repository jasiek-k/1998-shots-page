import { ArrowButton, Container, Title } from "@components";

import { links } from "@/app/config";
import type { ISession } from "@/app/types";
import { formatYear } from "@/app/utils";

interface IDetailsSectionProps {
  year: ISession["year"];
  title: ISession["title"];
  subtitle?: ISession["subtitle"];
}

const HeaderSection = ({ title, subtitle, year }: IDetailsSectionProps) => (
  <Container className=" flex-col text-off-white">
    <div className="md:grid md:grid-cols-12 py-6 md:py-45">
      <div className="md:col-start-2 md:col-span-4">
        <ArrowButton type="link" variant="left" href={links.photos.href}>
          RETURN
        </ArrowButton>
      </div>
      <div className="pt-45 md:pt-0 md:col-start-6 md:col-span-6">
        <Title className="w-full tracking-2">{`"${title}"`}</Title>
        <p className="mt-2 uppercase">
          {subtitle && <span className="text-sm font-normal mr-1">{subtitle}</span>}
          <span className="text-xxxs font-light mr-1">YEAR</span>
          <span className="text-sm font-normal">{formatYear(year)}</span>
        </p>
      </div>
    </div>
  </Container>
);

export default HeaderSection;
