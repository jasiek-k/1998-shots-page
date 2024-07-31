import Link from "next/link";

import type { ISession } from "@/app/types";

interface IDetailsSectionProps {
  details: ISession["details"];
}

const DetailsSection = ({ details }: IDetailsSectionProps) => {
  return (
    <div className="flex w-full nowrap text-sm uppercase items-center">
      <Link href="underline font-light">FUCK, GO BACK</Link>
      <div style={{ height: "1px" }} className="flex grow bg-off-white mx-2" />
      <div className="flex items-center">
        {details.map((item, index) => (
          <>
            <span className="font-light" key={index}>
              {item}
            </span>
            {index < details.length - 1 && (
              <div style={{ height: "1px" }} className="bg-off-white w-2 mx-2" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};

export default DetailsSection;
