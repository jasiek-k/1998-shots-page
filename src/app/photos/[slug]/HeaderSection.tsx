import type { ISession } from "@/app/types";
import Container from "@/components/Container";
import { Title } from "@/components/Text";

interface IDetailsSectionProps {
  title: ISession["title"];
  about: ISession["about"];
  id: ISession["id"];
}

const HeaderSection = ({ title, about, id }: IDetailsSectionProps) => (
  <Container className="flex-col py-35 text-black dark:text-off-white">
    <div className="md:max-w-135 mx-auto text-center">
      <span>[</span>
      <span className="mx-1">{`ISSUE NO. ${id}`}</span>
      <span>]</span>
      <Title className="w-full mt-2">{`"${title}"`}</Title>
      <p className="text-sm mt-10 text-center uppercase">{about}</p>
    </div>
  </Container>
);

export default HeaderSection;
