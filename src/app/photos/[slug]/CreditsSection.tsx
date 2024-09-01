import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const creditStyle = "uppercase text-sm md:text-md font-bold";

const CreditsSection = ({ credits }: ICreditsSectionProps) => (
  <Container className="flex-col mt-6 md:mt-0 mb-12 md:mb-35">
    <div className="flex justify-between mb-1 md:mb-2">
      <span className="text-xs md:text-sm">NAME</span>
      <span className="text-xs md:text-sm">ROLE</span>
    </div>
    {credits.map(({ name, role }, index) => (
      <>
        <div key={index} className="flex justify-between">
          <span className={creditStyle}>{name}</span>
          <span className={creditStyle}> {role}</span>
        </div>
        {index < credits.length - 1 && (
          <div className="w-full border-t-1 bg-off-white mt-1 md:mt-0 mb-2" />
        )}
      </>
    ))}
  </Container>
);

export default CreditsSection;
