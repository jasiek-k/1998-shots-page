import type { ISession } from "@/app/types";
import Container from "@/components/Container";

interface ICreditsSectionProps {
  credits: ISession["credits"];
}

const creditStyle = "uppercase  ";

const CreditsSection = ({ credits }: ICreditsSectionProps) => (
  <Container className="flex flex-col md:flex-row mt-29 mb-35">
    <div className="w-full flex flex-col justify-center">
      {credits.map(({ name, role }, index) => (
        <div key={index} className="flex">
          <div className="flex w-1/2 items-center justify-end">
            <span className={`${creditStyle} text-xs md:text-sm text-right pr-3`}>
              {name}
            </span>
          </div>
          <div className="flex w-1/2 items-center">
            <span
              className={`${creditStyle} text-xs md:text-md text-left pl-3 font-bold`}
            >
              {role}
            </span>
          </div>
        </div>
      ))}
    </div>
  </Container>
);

export default CreditsSection;
