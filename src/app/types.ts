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
  title: string;
  about?: string;
  heroPhoto: string;
  heroPhotoMobile: string;
  photos: Array<TPhoto>;
  suggested: ISuggestedSession[];
  credits: Array<ICredit>;
}
