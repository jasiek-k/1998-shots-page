import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const style = "uppercase text-mobileSm md:text-md font-bold";

const CreditsSection = ({ credits }: ICreditsSectionProps) => (
  <Container className="flex-col mb-15 md:mb-35">
    <div className="flex justify-between mb-2">
      <span className="text-sm">NAME</span>
      <span className="text-sm">ROLE</span>
    </div>
    {credits.map(({ name, role }, index) => (
      <>
        <div key={index} className="flex justify-between">
          <span className={style}>{name}</span>
          <span className={style}> {role}</span>
        </div>
        {index < credits.length - 1 && (
          <div className="w-full border-t-1 bg-off-white mb-2" />
        )}
      </>
    ))}
  </Container>
);

export default CreditsSection;
