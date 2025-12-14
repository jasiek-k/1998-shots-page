import { SocialMediaBanner, StackAnimation } from "@components";

import GalleryLinkSection from "./components/GalleryLinkSection";
import HeroSection from "./components/HeroSection";
import WelcomeSection from "./components/WelcomeSection";

const App = () => (
  <div className="flex flex-col gap-45 pb-45">
    <HeroSection />
    <WelcomeSection />
    <StackAnimation />
    <SocialMediaBanner />
    <GalleryLinkSection />
  </div>
);

export default App;
