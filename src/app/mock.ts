import { links } from "@/app/config";
import type { EPhotoType, ISession, ISuggestedSession } from "@/app/types";

const suggestedLength = 4;

const parseSlug = (title: string) => title.toLowerCase().split(" ").join("-");

function filterSuggested(this: ISession, item: ISuggestedSession) {
  return item.title !== this.title;
}

export const teasers = [
  {
    img: "/images/slider-6.jpg",
    href: `${links.photos.href}/no-face-no-case`,
    title: "no face no case",
  },
  {
    //   img: "/images/slider-1.jpg",
    img: "/images/slider-5.jpg",
    href: `${links.photos.href}/bike-life`,
    title: "bike life",
  },
  {
    img: "/images/slider-2.jpg",
    href: `${links.photos.href}/guns-guns-guns`,
    title: "guns guns guns",
  },
  {
    img: "/images/slider-3.jpg",
    href: `${links.photos.href}/i-love-the-smell-of-burning-rubber-in-the-morning`,
    title: "i love the smell of burning rubber in the morning",
  },
  {
    img: "/images/slider-4.jpg",
    href: `${links.photos.href}/in-the-spotlight`,
    title: "in the spotlight",
  },
];

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

export const bikeLifeData: ISession = {
  title: "bike life",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "",
  heroPhotoMobile: "",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "",
      width: 1472,
      height: 943,
    },
  ],
  suggested: [],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Michalina Kowalczyk", role: "model" },
  ],
};

export const noFaceNoCaseData: ISession = {
  title: "no face no case",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "",
  heroPhotoMobile: "",
  photos: [
    {
      type: "vertical-photo" as EPhotoType.VerticalPhoto,
      img: "/images/noFaceNoCase/nofacenocase_1.jpg",
      width: 728,
      height: 728,
    },
    {
      type: "vertical-photo" as EPhotoType.VerticalPhoto,
      img: "/images/noFaceNoCase/nofacenocase_2.jpg",
      width: 728,
      height: 728,
    },
    {
      type: "vertical-photo" as EPhotoType.VerticalPhoto,
      img: "/images/noFaceNoCase/nofacenocase_3.jpg",
      width: 728,
      height: 728,
    },
  ],
  suggested: [],
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
  suggested: [],
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
  suggested: [],
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
  sessionsList.map(item => {
    item.suggested = teasers
      .filter(filterSuggested.bind(item as ISession))
      .slice(0, suggestedLength);

    return [parseSlug(item.title), item];
  }),
);

export default sessions;
