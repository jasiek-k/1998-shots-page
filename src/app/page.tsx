import HeroSection from "./components/HeroSection";
import LinksSection from "./components/LinksSection";
import WelcomeSection from "./components/WelcomeSection";

import StackAnimation from "@/components/StackAnimation";

const App = () => (
  <>
    <HeroSection />
    <WelcomeSection />
    <div className="sticky top-0 bg-off-white dark:bg-black pt-20 md:pt-35">
      <div className="flex flex-col">
        <StackAnimation />
        <LinksSection />
      </div>
    </div>
  </>
);

export default App;
