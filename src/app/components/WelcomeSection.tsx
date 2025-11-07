import { Container, EContainerVariant, ResponsiveImage } from "@components";
import { WelcomeDesktopIcon, WelcomeMobileIcon } from "@public/icons";

const config = {
  mobile: { src: "/images/others/welcomeimage_mobile.jpg", width: 375, height: 240 },
  desktop: { src: "/images/others/welcomeimage.jpg", width: 1104, height: 290 },
};

const Divider = () => <span className="font-light text-xs">X</span>;

const WelcomeSection = () => (
  <Container className="flex flex-col" variant={EContainerVariant.BaseNoMobilePadding}>
    <WelcomeDesktopIcon className="hidden md:flex md:pb-5" />
    <WelcomeMobileIcon className="md:hidden flex pb-4 px-4" />
    <ResponsiveImage config={config} />
    <div className="grid grid-cols-5 md:grid-cols-12 pt-8 gap-y-4 md:gap-y-6 uppercase px-4 md:px-0">
      <span className="col-start-1 col-span-5 md:col-start-2 md:col-span-2 font-light text-xs">
        [INTRODUCTION]
      </span>
      <p className="col-start-2 col-span-4 md:col-start-6 md:col-span-5 text-justify font-normal">
        Drift amongst photos that capture moody tones, vintage aesthetics and minimalistic
        compositions. Explore the essence of the
        <b className="font-bold"> 1998&nbsp;SHOTS® </b>lifestyle through this artistic
        lens, where every photograph tells a story of style and timeless allure.
      </p>
      <span className="col-start-1 col-span-5 md:col-start-2 md:col-span-2 font-light text-xs">
        [FIELDS]
      </span>
      <span className="col-start-2 col-span-4 md:col-start-6 md:col-span-5 font-normal text-sm">
        photography <Divider /> retouch <Divider /> design
      </span>
      <span className="text-center md:text-left col-start-1 col-span-5 md:col-start-6 md:col-span-5 pt-4 md:pt-2 font-normal text-md tracking-2">
        SERVING AUTHENTICITY SINCE&nbsp;MMXXIII
      </span>
    </div>
  </Container>
);

export default WelcomeSection;
