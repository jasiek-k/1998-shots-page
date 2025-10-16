import { StackAnimation } from "@components";

import HeroSection from "./components/HeroSection";
import LinksSection from "./components/LinksSection";
import WelcomeSection from "./components/WelcomeSection";

// import type { ReactNode } from "react";
// const StickyWrapper = ({ children }: { children: ReactNode[] }) => (
//   <div className="sticky top-0 bg-off-white dark:bg-black pt-20 md:pt-35">
//     <div className="flex flex-col">{children}</div>
//   </div>
// );

const App = () => (
  <div className="flex flex-col gap-35 pb-35">
    <HeroSection />
    <WelcomeSection />
    <StackAnimation />
    <LinksSection />
  </div>
);

export default App;
