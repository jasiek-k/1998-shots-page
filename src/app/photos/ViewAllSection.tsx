/* eslint-disable @typescript-eslint/no-explicit-any */
import { SessionTile } from "@components";
import { useMemo } from "react";

import sessions from "@/app/mock";

const ViewAllSection = ({ toggleIsViewingAll }: any) => {
  const content = useMemo(() => Object.values(sessions).reverse(), []);

  return (
    <>
      <div className="flex justify-end pr-4 md:pr-0 pb-3">
        <button onClick={toggleIsViewingAll} className="uppercase">
          [ VIEW IN SLIDER ]
        </button>
      </div>
      <div className="grid md:grid-cols-2 gap-y-12 md:gap-x-6 md:gap-y-14">
        {content.map(item => (
          <SessionTile key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default ViewAllSection;
