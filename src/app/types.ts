interface IBasePhoto {
  width: number;
  height: number;
}

export interface ISuggestedSession {
  img: string;
  href: string;
  title: string;
}

export interface ILinkTile {
  src: string;
  href: string;
  caption: string;
  subcaption: string;
}

export interface ICredit {
  name: string;
  role: string;
}

export enum EPhotoType {
  FullWidth = "full-width",
  Group = "group",
  VerticalPhoto = "vertical-photo",
}

export interface IFullWidth extends IBasePhoto {
  type: EPhotoType.FullWidth;
  img: string;
}

export interface IGroup extends IBasePhoto {
  type: EPhotoType.Group;
  img: string[];
}

export interface IVerticalPhoto extends IBasePhoto {
  type: EPhotoType.VerticalPhoto;
  img: string;
}

export type TPhoto = IFullWidth | IGroup | IVerticalPhoto;

export interface ISession {
  id: number;
  year: number;
  title: string;
  subtitle?: string;
  about?: string;
  hero: string;
  heroMobile: string;
  heroSecondaryMobile: string;
  teaser: string;
  photos: Array<TPhoto>;
  suggested: ISuggestedSession[];
  credits: Array<ICredit>;
  href: string;
}

export type TInitSession = Omit<ISession, "suggested" | "href">;

export interface ITeaser {
  title: string;
  img: string;
  href: string;
}
