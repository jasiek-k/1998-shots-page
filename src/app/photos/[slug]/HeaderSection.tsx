import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface IDetailsSectionProps {
  title: ISession["title"];
  about: ISession["about"];
}

const HeaderSection = ({ title, about }: IDetailsSectionProps) => (
  <Container className="flex-col py-35 dark:font-off-white light:font-black">
    <div className="md:max-w-135 mx-auto">
      <h1 className="text-lg md:text-xl w-full text-center uppercase font-bold leading-header">
        {`"${title}"`}
      </h1>
      <p className="text-sm mt-10 text-center uppercase">{about}</p>
    </div>
  </Container>
);

export default HeaderSection;
