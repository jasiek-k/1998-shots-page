import { ArrowButton, Container, Title } from "@components";

import { links } from "@/app/config";
import type { ISession } from "@/app/types";

interface IDetailsSectionProps {
  id: ISession["id"];
  title: ISession["title"];
  about?: ISession["about"];
  subtitle?: ISession["subtitle"];
}

const textClass = "text-sm text-center uppercase font-light";

const HeaderSection = ({ title, about, subtitle, id }: IDetailsSectionProps) => (
  <Container className="pt-8 flex-col text-black dark:text-off-white">
    <ArrowButton type="link" variant="left" href={links.photos.href}>
      RETURN
    </ArrowButton>
    <div className="pb-35 pt-18 md:max-w-135 mx-auto text-center">
      <p className={textClass}>{`[ ISSUE NO. ${id} ]`}</p>
      <Title className="w-full mt-2">{`"${title}"`}</Title>
      {subtitle && <p className={textClass + " mt-1"}>{subtitle}</p>}
      {about && <p className={textClass + " mt-10"}>{about}</p>}
    </div>
  </Container>
);

export default HeaderSection;
