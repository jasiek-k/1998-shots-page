import { Chip, Container, EContainerVariant, ResponsiveImage, Title } from "@components";

const chips = ["photography", "retouch", "design"];

const WelcomeSection = () => (
  <Container className="flex flex-col" variant={EContainerVariant.BaseNoMobilePadding}>
    <div className="relative w-full flex flex-col items-center text-center justify-center text-off-white">
      <ResponsiveImage
        desktop={{ src: "/images/welcomeimage.jpg", width: 1104, height: 290 }}
        mobile={{ src: "/images/welcomeimage_mobile.jpg", width: 375, height: 540 }}
      />
      <div className="absolute top-0 left-0 w-full h-full opacity-15 bg-og-black" />
      <div className="flex flex-col absolute px-4 md:px-0">
        <Title>WELCOME TO THE 1998®&nbsp;WORLD</Title>
        <div className="flex gap-3 justify-center pt-2 md:pt-0">
          {chips.map(item => (
            <Chip key={item}>{item}</Chip>
          ))}
        </div>
      </div>
    </div>
    <p className="text-justify uppercase font-light px-4 md:px-0 pt-4 md:pt-6 max-w-145 mx-auto leading-header">
      Drift amongst photos that capture moody tones, vintage aesthetics and minimalistic
      compositions. Explore the essence of the
      <b className="font-bold"> 1998&nbsp;SHOTS® </b>lifestyle through this artistic
      lens, where every photograph tells a story of style and timeless allure.
    </p>
  </Container>
);

export default WelcomeSection;
