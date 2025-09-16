import { StackAnimation } from "@components";
import type { ReactNode } from "react";

import HeroSection from "./components/HeroSection";
import LinksSection from "./components/LinksSection";
import WelcomeSection from "./components/WelcomeSection";

// TODO shadow?
const StickyWrapper = ({ children }: { children: ReactNode[] }) => (
  <div className="sticky top-0 bg-off-white dark:bg-black pt-20 md:pt-35">
    <div className="flex flex-col">{children}</div>
  </div>
);

const App = () => (
  <>
    <HeroSection />
    <WelcomeSection />
    <StickyWrapper>
      <StackAnimation />
      <LinksSection />
    </StickyWrapper>
  </>
);

export default App;
