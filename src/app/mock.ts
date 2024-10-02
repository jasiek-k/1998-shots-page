import { links } from "@/app/config";
import type { EPhotoType, ISession, ISuggestedSession } from "@/app/types";

const suggestedPostsLength = 4;

const parseSlug = (title: string) => title.toLowerCase().split(" ").join("-");

function filterSuggested(this: ISession, item: ISuggestedSession) {
  return item.title !== this.title;
}

export const teasers = [
  {
    img: "/images/slider/slider-6.jpg",
    href: `${links.photos.href}/no-face-no-case`,
    title: "no face no case",
  },
  {
    //   img: "/images/slider/slider-1.jpg",
    img: "/images/slider/slider-5.jpg",
    href: `${links.photos.href}/bike-life`,
    title: "bike life",
  },
  {
    img: "/images/slider/slider-2.jpg",
    href: `${links.photos.href}/guns-guns-guns`,
    title: "guns guns guns",
  },
  {
    img: "/images/slider/slider-3.jpg",
    href: `${links.photos.href}/i-love-the-smell-of-burning-rubber-in-the-morning`,
    title: "i love the smell of burning rubber in the morning",
  },
  {
    img: "/images/slider/slider-4.jpg",
    href: `${links.photos.href}/in-the-spotlight`,
    title: "in the spotlight",
  },
];

export const heroSliderContent = teasers.reverse();

export const burningRubberData: ISession = {
  title: "i love the smell of burning rubber in the morning",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "/images/iltsobritm/iltsobritm_banner.jpg",
  heroPhotoMobile: "/images/iltsobritm/iltsobritm_banner_mobile.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_1.jpg",
      width: 1472,
      height: 943,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_2.jpg",
      width: 1472,
      height: 943,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/iltsobritm/iltsobritm_4.jpg",
        "/images/iltsobritm/iltsobritm_5.jpg",
        "/images/iltsobritm/iltsobritm_6.jpg",
        "/images/iltsobritm/iltsobritm_7.jpg",
      ],
      width: 338,
      height: 600,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_3.jpg",
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
  heroPhoto: "/images/bikeLife/bikelife_banner.jpg",
  heroPhotoMobile: "/images/bikeLife/bikelife_banner_mobile.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/bikeLife/bikelife_1.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "group" as EPhotoType.Group,
      img: ["/images/bikeLife/bikelife_2.jpg", "/images/bikeLife/bikelife_3.jpg"],
      width: 540,
      height: 540,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/bikeLife/bikelife_4.jpg",
      width: 1104,
      height: 1563,
    },
    {
      type: "group" as EPhotoType.Group,
      img: ["/images/bikeLife/bikelife_5.jpg", "/images/bikeLife/bikelife_6.jpg"],
      width: 540,
      height: 540,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/bikeLife/bikelife_7.jpg",
      width: 1104,
      height: 1563,
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
  heroPhoto: "/images/noFaceNoCase/nofacenocase_banner.jpg",
  heroPhotoMobile: "/images/noFaceNoCase/nofacenocase_banner_mobile.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/noFaceNoCase/nofacenocase_1.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/noFaceNoCase/nofacenocase_2.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/noFaceNoCase/nofacenocase_3.jpg",
      width: 1104,
      height: 1104,
    },
  ],
  suggested: [],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch | model" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Mateusz Bednarczyk", role: "model" },
  ],
};

export const gunsData: ISession = {
  title: "guns guns guns",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "/images/guns/guns_banner.jpg",
  heroPhotoMobile: "/images/guns/guns_banner_mobile.jpg",
  photos: [
    {
      type: "group" as EPhotoType.Group,
      img: ["/images/guns/guns_1.jpg", "/images/guns/guns_2.jpg"],
      width: 540,
      height: 757,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/guns/guns_3.jpg",
      width: 1104,
      height: 736,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/guns/guns_4.jpg",
        "/images/guns/guns_5.jpg",
        "/images/guns/guns_6.jpg",
      ],
      width: 352,
      height: 624,
    },
  ],
  suggested: [],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Mateusz Wojcik", role: "model" },
  ],
};

export const inTheSpotlightData: ISession = {
  title: "in the spotlight",
  about:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  heroPhoto: "/images/inTheSpotlight/inthespotlight_banner.jpg",
  heroPhotoMobile: "/images/inTheSpotlight/inthespotlight_banner_mobile.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/inTheSpotlight/inthespotlight_1.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/inTheSpotlight/inthespotlight_2.jpg",
        "/images/inTheSpotlight/inthespotlight_3.jpg",
      ],
      width: 540,
      height: 540,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/inTheSpotlight/inthespotlight_4.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/inTheSpotlight/inthespotlight_5.jpg",
        "/images/inTheSpotlight/inthespotlight_6.jpg",
      ],
      width: 540,
      height: 540,
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
      .slice(0, suggestedPostsLength);

    return [parseSlug(item.title), item];
  }),
);

export default sessions;
