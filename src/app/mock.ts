import type { EPhotoType, TInitSession } from "@/app/types";
import { mapSessions, mapTeasers } from "@/app/utils";

export const noFaceNoCase: TInitSession = {
  id: 1,
  title: "no face no case",
  heroPhoto: "/images/noFaceNoCase/nofacenocase_banner.jpg",
  heroPhotoMobile: "/images/noFaceNoCase/nofacenocase_banner_mobile.jpg",
  teaser: "/images/slider/slider_6.jpg",
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
  credits: [
    { name: "Jan Klamka", role: "photography & retouch | model" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Mateusz Bednarczyk", role: "model" },
  ],
};

export const inTheSpotlight: TInitSession = {
  id: 2,
  title: "in the spotlight",
  heroPhoto: "/images/inTheSpotlight/inthespotlight_banner.jpg",
  heroPhotoMobile: "/images/inTheSpotlight/inthespotlight_banner_mobile.jpg",
  teaser: "/images/slider/slider_4.jpg",
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
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Maciej Tylinski", role: "model" },
  ],
};

export const bikeLife: TInitSession = {
  id: 3,
  title: "bike life",
  heroPhoto: "/images/bikeLife/bikelife_banner.jpg",
  heroPhotoMobile: "/images/bikeLife/bikelife_banner_mobile.jpg",
  // teaser: "/images/slider/slider_1.jpg",
  teaser: "/images/slider/slider_5.jpg",
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
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Michalina Kowalczyk", role: "model" },
  ],
};

export const guns: TInitSession = {
  id: 4,
  title: "guns guns guns",
  heroPhoto: "/images/guns/guns_banner.jpg",
  heroPhotoMobile: "/images/guns/guns_banner_mobile.jpg",
  teaser: "/images/slider/slider_2.jpg",
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
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Sebastian Komicz", role: "support" },
    { name: "Mateusz Wojcik", role: "model" },
  ],
};

export const burningRubber: TInitSession = {
  id: 5,
  title: "i love the smell of burning rubber in the morning",
  subtitle: "part I",
  heroPhoto: "/images/iltsobritm/iltsobritm_banner.jpg",
  heroPhotoMobile: "/images/iltsobritm/iltsobritm_banner_mobile.jpg",
  teaser: "/images/slider/slider_3.jpg",
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
  credits: [{ name: "Jan Klamka", role: "photography & retouch" }],
};

const untitledNo1: TInitSession = {
  id: 6,
  title: "untitled no. 1",
  heroPhoto: "/images/untitledNo1/untitled_banner.jpg",
  heroPhotoMobile: "/images/untitledNo1/untitled_banner_mobile.jpg",
  teaser: "/images/slider/slider_7.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/untitledNo1/untitled_1.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/untitledNo1/untitled_2.jpg",
      width: 1104,
      height: 1104,
    },
    {
      // TODO add cropped photos
      type: "group" as EPhotoType.Group,
      img: ["/images/untitledNo1/untitled_3.jpg", "/images/untitledNo1/untitled_4.jpg"],
      width: 540,
      height: 691,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/untitledNo1/untitled_5.jpg",
      width: 1104,
      height: 1104,
    },
  ],
  credits: [
    { name: "Jan Klamka", role: "photography & retouch" },
    { name: "Michalina Kowalczyk", role: "model" },
  ],
};

const burningRubberPart2 = {
  id: 7,
  title: "i love the smell of burning rubber in the morning",
  subtitle: "part II",
  heroPhoto: "/images/iltsobritmPart2/iltsobritmPart2_banner.jpg",
  heroPhotoMobile: "/images/iltsobritmPart2/iltsobritmPart2_banner_mobile.jpg",
  teaser: "/images/slider/slider_8.jpg",
  photos: [
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritmPart2/iltsobritm_1.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritmPart2/iltsobritm_2.jpg",
      width: 1104,
      height: 1104,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/iltsobritmPart2/iltsobritm_3.jpg",
        "/images/iltsobritmPart2/iltsobritm_4.jpg",
      ],
      width: 540,
      height: 810,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritmPart2/iltsobritm_5.jpg",
      width: 1104,
      height: 621,
    },
    {
      type: "group" as EPhotoType.Group,
      img: [
        "/images/iltsobritmPart2/iltsobritm_6.jpg",
        "/images/iltsobritmPart2/iltsobritm_7.jpg",
      ],
      width: 540,
      height: 810,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritmPart2/iltsobritm_8.jpg",
      width: 1104,
      height: 621,
    },
    {
      type: "full-width" as EPhotoType.FullWidth,
      img: "/images/iltsobritmPart2/iltsobritm_9.jpg",
      width: 1104,
      height: 736,
    },
  ],
  credits: [{ name: "Jan Klamka", role: "photography & retouch" }],
};

const sessionsList = [
  noFaceNoCase,
  inTheSpotlight,
  bikeLife,
  guns,
  burningRubber,
  untitledNo1,
  burningRubberPart2,
];

const teasers = mapTeasers(sessionsList);

export const heroSliderContent = teasers.reverse();
export default mapSessions(sessionsList, teasers);
