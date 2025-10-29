import { SocialMediaBanner, StackAnimation } from "@components";

import HeroSection from "./components/HeroSection";
import LinksSection from "./components/LinksSection";
import WelcomeSection from "./components/WelcomeSection";

const App = () => (
  <div className="flex flex-col gap-45 pb-35">
    <HeroSection />
    <WelcomeSection />
    <StackAnimation />
    <LinksSection />
    <SocialMediaBanner />
  </div>
);

export default App;
