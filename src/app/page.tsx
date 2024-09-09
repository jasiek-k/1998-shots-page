import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import Container, { EContainerRatio, EContainerVariant } from "components/Container";
import { RatioContainer } from "components/Container";

import { LogoRound } from "public/svgs";

import ResponsiveImage from "@/components/ResponsiveImage";
import {
  bannerDesktop,
  bannerMobile,
  heroDesktop,
  heroMobile,
  landingLinks,
} from "@/config";

const caption = ["PHOTOGRAPHY X DESIGN", `FROM 51°45'33.30"N, 19°27'21.54"E`, "XXX"];

// const images = [
//   "/images/landing_1.jpg",
//   "/images/landing_2.jpg",
//   "/images/landing_3.jpg",
// ];
// <p className="text-center uppercase text-sm mb-6">
//   That&apos;s how it&apos;s done over here
// </p>
// <div className="flex gap-6">
//   {images.map((src, index) => (
//     <div key={index} className="flex w-2/6">
//       <Image src={src} className="w-full" alt="" width={352} height={352} />
//     </div>
//   ))}
// </div>
// <div className="my-25 w-full bg-off-white h-divider" />

const HeroCaption: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ className }) => (
  <div className={clsx("flex justify-center flex-col", className)}>
    {caption.map((item, index) => (
      <span className="text-center font-light text-sm" key={index}>
        {item}
      </span>
    ))}
  </div>
);

const App = () => (
  <Container variant={EContainerVariant.FullWidth} className="pb-8 flex flex-col">
    <RatioContainer variant={EContainerRatio.FullPage}>
      <ResponsiveImage mobile={heroMobile} desktop={heroDesktop} />
      <HeroCaption className="absolute bottom-20 w-full" />
    </RatioContainer>
    <Container className="flex flex-col">
      <div className="flex flex-col md:mx-auto md:max-w-135 items-center py-23 md:py-35">
        <h1 className="text-lg md:text-xl font-bold text-center">
          WELCOME TO THE 1998&nbsp;SHOTS®&nbsp;WORLD
        </h1>
        <p className="py-12 md:py-15 text-center uppercase">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
        </p>
        <LogoRound width={70} />
      </div>
      <ResponsiveImage mobile={bannerMobile} desktop={bannerDesktop} />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 pt-4 md:pt-6">
        {landingLinks.map(({ href, src, caption, subcaption }, index) => (
          <Link key={index} href={href} prefetch={true} className="w-full md:w-2/4">
            <RatioContainer variant={EContainerRatio.HeroLink}>
              <Image src={src} alt="" className="w-full" width={540} height={300} />
              <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
                <span className="text-sm md:text-md uppercase font-bold">{caption}</span>
                <span className="text-xxs md:text-sm uppercase">{subcaption}</span>
              </div>
            </RatioContainer>
          </Link>
        ))}
      </div>
    </Container>
  </Container>
);

export default App;
