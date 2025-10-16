import { SessionTile } from "@components";
import { useMemo } from "react";

import sessions from "@/app/mock";

const ViewAllSection = () => {
  const content = useMemo(() => Object.values(sessions).reverse(), []);

  return (
    <div className="grid md:grid-cols-3 gap-y-8 md:gap-x-6 md:gap-y-8">
      {content.map(item => (
        <SessionTile key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ViewAllSection;
