import { Container, EContainerVariant, ResponsiveImage } from "@components";
import { WelcomeDesktopIcon } from "@public/icons";

const Divider = () => <span className="font-light text-xs">X</span>;

const WelcomeSection = () => (
  <Container className="flex flex-col" variant={EContainerVariant.BaseNoMobilePadding}>
    <WelcomeDesktopIcon className="hidden md:flex md:pb-5" />
    <ResponsiveImage
      desktop={{ src: "/images/welcomeimage.jpg", width: 1104, height: 290 }}
      mobile={{ src: "/images/welcomeimage_mobile.jpg", width: 375, height: 540 }}
    />
    <div className="grid grid-cols-5 md:grid-cols-12 pt-8 gap-y-6 uppercase">
      <span className="col-start-2 col-span-2 font-light text-xs">[INTRODUCTION]</span>
      <p className="col-start-6 col-span-5 text-justify font-normal">
        Drift amongst photos that capture moody tones, vintage aesthetics and minimalistic
        compositions. Explore the essence of the
        <b className="font-bold"> 1998&nbsp;SHOTS® </b>lifestyle through this artistic
        lens, where every photograph tells a story of style and timeless allure.
      </p>
      <span className="col-start-2 col-span-2 font-light text-xs">[FIELDS]</span>
      <span className="col-start-6 col-span-5 font-normal text-sm">
        photography <Divider /> retouch <Divider /> design
      </span>
      <span className="col-start-6 col-span-5 pt-2 font-normal text-lg tracking-2">
        SERVING AUTHENTICITY SINCE&nbsp;MMXXIII
      </span>
    </div>
  </Container>
);

export default WelcomeSection;
