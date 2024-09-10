import type { EPhotoType, IPhoto, ISession } from "@/app/types";
import { links } from "@/config";

const parseSlug = (title: string) => title.toLowerCase().split(" ").join("-");

export const teasers = [
  {
    img: "/images/slider-2.jpg",
    href: `${links.photos.href}/guns-guns-guns`,
    title: "Guns Guns Guns",
  },
  {
    img: "/images/slider-3.jpg",
    href: `${links.photos.href}/i-love-the-smell-of-burning-rubber-in-the-morning`,
    title: "I Love The Smell Of Burning Rubber In The Morning",
  },
  {
    img: "/images/slider-4.jpg",
    href: `${links.photos.href}/in-the-spotlight`,
    title: "In The Spotlight",
  },
  {
    img: "/images/slider-5.jpg",
    href: `${links.photos.href}/bike-life`,
    title: "Bike Life",
  },
  {
    img: "/images/slider-6.jpg",
    href: `${links.photos.href}/no-face-no-case`,
    title: "No Face No Case",
  },
];

const suggested = [
  {
    img: "/images/teaser_vandal.jpg",
    href: `${links.photos.href}/no-face-no-case`,
    title: "no face no case",
  },
  {
    //   img: "/images/teaser_moto_color.jpg",
    img: "/images/teaser_moto_bw.jpg",
    href: `${links.photos.href}/bike-life`,
    title: "bike life",
  },
  {
    img: "/images/teaser_guns.jpg",
    href: `${links.photos.href}/guns-guns-guns`,
    title: "guns guns guns",
  },
  {
    img: "/images/teaser_moto_color.jpg",
    href: `${links.photos.href}/i-love-the-smell-of-burning-rubber-in-the-morning`,
    title: "i love the smell of burning rubber in the morning",
  },
  {
    img: "/images/teaser_moto_color.jpg",
    href: `${links.photos.href}/rudy`,
    title: "in the spotlight",
  },
];

function filterSuggested() {
  // return suggested.filter(item => item.title !== this.title);
  return [];
}

export const burningRubberData: ISession = {
  title: "i love the smell of burning rubber in the morning",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "/images/ILTSOBRITM_hero.jpg",
  heroPhotoMobile: "/images/ILTSOBRITM_hero_mobile.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm1.jpg",
      width: 1472,
      height: 943,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm2.jpg",
      width: 1472,
      height: 943,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/iltsobritm/iltsobritm4.jpg",
        "/images/iltsobritm/iltsobritm5.jpg",
        "/images/iltsobritm/iltsobritm6.jpg",
        "/images/iltsobritm/iltsobritm7.jpg",
      ],
      width: 338,
      height: 600,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm3.jpg",
      width: 1472,
      height: 943,
    },
  ],
  suggested: [],
  credits: [{ name: "Jan Klamka", role: "photography & retouch" }],
};

burningRubberData.suggested = suggested.filter(
  item => item.title !== burningRubberData.title,
);

export const bikeLifeData = {
  title: "bike life",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "",
  heroPhotoMobile: "",
  photos: [
    {
      type: "full-width",
      img: "",
      width: 1472,
      height: 943,
    },
  ],
  suggested: [
    {
      img: "",
      href: "",
      width: 338,
      height: 600,
    },
  ],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Michalina Kowalczyk", role: "model" },
  ],
};

export const noFaceNoCaseData = {
  title: "no face on case",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "",
  heroPhotoMobile: "",
  photos: [
    {
      type: "full-width",
      img: "",
      width: 1472,
      height: 943,
    },
  ],
  suggested: [
    {
      img: "",
      href: "",
      width: 338,
      height: 600,
    },
  ],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Mateusz Bednarczyk", role: "model" },
  ],
};

export const gunsData = {
  title: "guns guns guns",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "",
  heroPhotoMobile: "",
  photos: [
    {
      type: "full-width",
      img: "",
      width: 1472,
      height: 943,
    },
  ],
  suggested: [
    {
      img: "",
      href: "",
      width: 338,
      height: 600,
    },
  ],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Mateusz Wojcik", role: "model" },
  ],
};

export const inTheSpotlightData = {
  title: "in the spotlight",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "",
  heroPhotoMobile: "",
  photos: [
    {
      type: "full-width",
      img: "",
      width: 1472,
      height: 943,
    },
  ],
  suggested: [
    {
      img: "",
      href: "",
      width: 338,
      height: 600,
    },
  ],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Maciej Tylinski", role: "model" },
  ],
};

const sessionsList = [
  burningRubberData,
  bikeLifeData,
  noFaceNoCaseData,
  gunsData,
  inTheSpotlightData,
];
const sessions = Object.fromEntries(
  sessionsList.map(item => [parseSlug(item.title), item]),
);

export default sessions;
