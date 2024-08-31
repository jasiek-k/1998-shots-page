import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface IDetailsSectionProps {
  title: ISession["title"];
  about: ISession["about"];
  className?: string;
}

const HeaderSection = ({ title, about, className }: IDetailsSectionProps) => (
  <Container className="flex-col my-12 md:my-20">
    <h1 className="text-lg md:text-xxl font-off-white w-full text-center uppercase font-bold">
      {`"${title}"`}
    </h1>
    <div className="md:px-23">
      <div className="border-t-1 w-full bg-off-white mb-10 mt-9 md:mt-8" />
      <p className="text-sm text-center uppercase">{about}</p>
    </div>
  </Container>
);

export default HeaderSection;
