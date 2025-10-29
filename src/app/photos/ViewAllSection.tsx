import { SessionTile, Title } from "@components";
import { useMemo } from "react";

import sessions from "@/app/mock";

// TODO text
const PageDetails = () => (
  <div className="flex flex-col justify-between px-4 md:px-0">
    <Title className="tracking-2">PHOTO SESSIONS®</Title>
    <div className="flex flex-col pt-35 md:pt-0">
      <p className="uppercase pb-6 text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud. Ut enim ad minim veniam, quis nostrud.
      </p>
      <span>[MORE THINGS COMING IN THE FUTURE]</span>
    </div>
  </div>
);

const ViewAllSection = () => {
  const content = useMemo(() => Object.values(sessions).reverse(), []);

  return (
    <div className="grid md:grid-cols-3 gap-y-6 md:gap-x-6 md:gap-y-6">
      <PageDetails />
      {content.map(item => (
        <SessionTile key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ViewAllSection;
