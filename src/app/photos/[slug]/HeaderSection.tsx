import type { ISession } from "@/app/types";
import Container from "@/components/Container";
import { Title } from "@/components/Text";

interface IDetailsSectionProps {
  id: ISession["id"];
  title: ISession["title"];
  about?: ISession["about"];
  subtitle?: ISession["subtitle"];
}

const HeaderSection = ({ title, about, subtitle, id }: IDetailsSectionProps) => (
  <Container className="flex-col py-35 text-black dark:text-off-white">
    <div className="md:max-w-135 mx-auto text-center">
      <span>[</span>
      <span className="mx-1">{`ISSUE NO. ${id}`}</span>
      <span>]</span>
      <Title className="w-full mt-2">{`"${title}"`}</Title>
      {subtitle && <p className="text-sm mt-1 text-center uppercase">{subtitle}</p>}
      {about && <p className="text-sm mt-10 text-center uppercase">{about}</p>}
    </div>
  </Container>
);

export default HeaderSection;
