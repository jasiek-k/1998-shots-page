import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface IDetailsSectionProps {
  title: ISession["title"];
  about: ISession["about"];
  className?: string;
}

/* <Container className="flex-col my-12 md:my-20 dark:font-off-white light:font-black">
  <h1 className="text-lg md:text-xl w-full text-center uppercase font-bold">
    {`"${title}"`}
  </h1>
  <div className="md:px-23">
    <div className="border-t-1 w-full dark:bg-off-white light:bg-black mb-10 mt-9 md:mt-8" />
    <p className="text-sm text-center uppercase">{about}</p>
  </div>
</Container> */

const HeaderSection = ({ title, about, className }: IDetailsSectionProps) => (
  <Container className="flex-col my-20 dark:font-off-white light:font-black">
    <div className="md:max-w-135 mx-auto">
      <h1 className="text-lg md:text-xl w-full text-center uppercase font-bold leading-header">
        {`"${title}"`}
      </h1>
      <p className="text-sm mt-10 text-center uppercase">{about}</p>
    </div>
  </Container>
);

export default HeaderSection;
