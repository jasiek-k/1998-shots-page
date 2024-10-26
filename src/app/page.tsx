import Container, { EContainerVariant } from "components/Container";

import HeroSection from "./HeroSection";
import LinkTile from "./LinkTile";
import WelcomeSection from "./WelcomeSection";

import { landingLinks } from "@/app/config";
// import LoadingScreen from "@/components/LoadingScreen";
import StackAnimation from "@/components/StackAnimation";

const App = () => (
  <>
    <Container variant={EContainerVariant.FullWidth} className="flex flex-col">
      <HeroSection />
    </Container>
    <div className="sticky top-0 bg-off-white">
      <WelcomeSection />
    </div>
    <div className="sticky top-0 bg-black pt-35 pb-8">
      <Container className="flex flex-col">
        <StackAnimation />
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-35">
          {landingLinks.map((item, index) => (
            <LinkTile link={item} key={index} />
          ))}
        </div>
      </Container>
    </div>
    {/* <LoadingScreen /> */}
  </>
);

export default App;
