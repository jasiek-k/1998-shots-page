export const mobileBreakpoint = 768;
export const suggestedPostsNumber = 4;

export const defaultTheme = "dark";
export const storageKey = "1998-SHOTS-THEME";

export const instagramName = "1998.shots";
export const instagramLink = `https://www.instagram.com/${instagramName}`;
export const emailAddress = "1998.shots.mail@gmail.com";

export const links = {
  home: { name: "HOME", href: "/" },
  photos: { name: "PHOTOS", href: "/photos" },
  instagram: { name: "INSTAGRAM", href: instagramLink, target: "_blank" },
  email: { name: "E-MAIL", href: `mailto:${emailAddress}` },
};

export const landingLinks = [
  {
    src: "/images/landing/landing_link_photos.jpg",
    href: links.photos.href,
    caption: "GO TO GALLERY",
    subcaption: "DISCOVER MY WORK",
  },
  // {
  //   src: "/images/landing/landing_link_contact.jpg",
  //   href: links.contact.href,
  //   caption: "GO TO CONTACT SECTION",
  //   subcaption: "LET'S GET IN TOUCH",
  // },
];

export const heroMobile = {
  src: "/images/landing/landing_hero_mobile.jpg",
  width: 375,
  height: 667,
};

export const heroDesktop = {
  src: "/images/landing/landing_hero.jpg",
  width: 1920,
  height: 1080,
};

export const bannerMobile = {
  src: "/images/landing/landing_banner_mobile.jpg",
  width: 343,
  height: 190,
};

export const bannerDesktop = {
  src: "/images/landing/landing_banner.jpg",
  width: 1104,
  height: 352,
};
