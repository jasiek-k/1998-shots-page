import HeroSection from "./HeroSection";
import LinksSection from "./LinksSection";
import WelcomeSection from "./WelcomeSection";

import StackAnimation from "@/components/StackAnimation";

const App = () => (
  <>
    <HeroSection />
    <WelcomeSection />
    <div className="sticky top-0 bg-off-white dark:bg-black pt-20 md:pt-35 pb-8">
      <div className="flex flex-col">
        <StackAnimation />
        <LinksSection />
      </div>
    </div>
  </>
);

export default App;
