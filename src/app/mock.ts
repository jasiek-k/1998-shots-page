import { links } from "@/app/config";
import type { EPhotoType, ISession, ISuggestedSession } from "@/app/types";

const suggestedPostsLength = 4;

const parseSlug = (title: string) => title.toLowerCase().split(" ").join("-");

function filterSuggested(this: ISession, item: ISuggestedSession) {
  return item.title !== this.title;
}

export const teasers = [
  {
    img: "/images/slider/slider_6.jpg",
    href: `${links.photos.href}/no-face-no-case`,
    title: "no face no case",
  },
  {
    //   img: "/images/slider/slider_1.jpg",
    img: "/images/slider/slider_5.jpg",
    href: `${links.photos.href}/bike-life`,
    title: "bike life",
  },
  {
    img: "/images/slider/slider_2.jpg",
    href: `${links.photos.href}/guns-guns-guns`,
    title: "guns guns guns",
  },
  {
    img: "/images/slider/slider_3.jpg",
    href: `${links.photos.href}/i-love-the-smell-of-burning-rubber-in-the-morning`,
    title: "i love the smell of burning rubber in the morning",
  },
  {
    img: "/images/slider/slider_4.jpg",
    href: `${links.photos.href}/in-the-spotlight`,
    title: "in the spotlight",
  },
];

export const heroSliderContent = teasers.reverse();

export const burningRubberData: ISession = {
  id: 5,
  title: "i love the smell of burning rubber in the morning",
  heroPhoto: "/images/iltsobritm/iltsobritm_banner.jpg",
  heroPhotoMobile: "/images/iltsobritm/iltsobritm_banner_mobile.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_1.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "group" as EPhotoType.Group,
      img: ["/images/iltsobritm/iltsobritm_2.jpg", "/images/iltsobritm/iltsobritm_3.jpg"],
      width: 540,
      height: 540,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_4.jpg",
      width: 1104,
      height: 701,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_5.jpg",
      width: 1104,
      height: 706,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/iltsobritm/iltsobritm_6.jpg",
        "/images/iltsobritm/iltsobritm_7.jpg",
        "/images/iltsobritm/iltsobritm_8.jpg",
        "/images/iltsobritm/iltsobritm_9.jpg",
      ],
      width: 516,
      height: 916,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_10.jpg",
      width: 1104,
      height: 552,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/iltsobritm/iltsobritm_11.jpg",
        "/images/iltsobritm/iltsobritm_12.jpg",
      ],
      width: 540,
      height: 540,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritm/iltsobritm_13.jpg",
      width: 1104,
      height: 1104,
    },
  ],
  suggested: [],
  credits: [{ name: "Jan Klamka", role: "photography & retouch" }],
};

export const bikeLifeData: ISession = {
  id: 3,
  title: "bike life",
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
  id: 1,
  title: "no face no case",
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
  id: 4,
  title: "guns guns guns",
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
  id: 2,
  title: "in the spotlight",
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
