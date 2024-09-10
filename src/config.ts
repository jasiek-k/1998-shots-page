export const links = {
  home: { name: "HOME", href: "/" },
  photos: { name: "PHOTOS", href: "/photos" },
  contact: { name: "CONTACT", href: "/contact" },
};

export const instagramName = "1998.shots";
export const instagramLink = `https://www.instagram.com/${instagramName}`;
export const emailAddress = "1998.shots.mail@gmail.com";

export const landingLinks = [
  {
    src: "/images/landing_link_photos.jpg",
    href: links.photos.href,
    caption: "DISCOVER MY WORK",
    subcaption: "VIEW THE PHOTOS",
  },
  {
    src: "/images/landing_link_contact.jpg",
    href: links.contact.href,
    caption: "LET'S GET IN TOUCH",
    subcaption: "GO TO CONTACT SECTION",
  },
];

export const heroMobile = {
  src: "/images/landing_hero_mobile.jpg",
  width: 375,
  height: 667,
};

export const heroDesktop = {
  src: "/images/landing_hero.jpg",
  width: 1920,
  height: 1080,
};

export const bannerMobile = {
  src: "/images/landing_banner_mobile.jpg",
  width: 343,
  height: 190,
};

export const bannerDesktop = {
  src: "/images/landing_banner.jpg",
  width: 1104,
  height: 352,
};
