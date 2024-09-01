interface IBasePhoto {
  width: number;
  height: number;
}

export interface ISuggestedSession extends IBasePhoto {
  img: string;
  href: string;
}

export interface ICredit {
  name: string;
  role: string;
}

export interface ISession {
  title: string;
  about: string;
  heroPhoto: string;
  heroPhotoMobile: string;
  photos: Array<IFullWidth | IGroup | IPhoto>;
  suggested: ISuggestedSession[];
  credits: Array<ICredit>;
}

export enum EPhotoType {
  FullWidth = "full-width",
  Group = "group",
  Photo = "photo",
}

export interface IFullWidth extends IBasePhoto {
  type: EPhotoType.FullWidth;
  img: string;
  caption?: string;
}

export interface IGroup extends IBasePhoto {
  type: EPhotoType.Group;
  img: string[];
  caption?: string;
}

export interface IPhoto extends IBasePhoto {
  type: EPhotoType.Photo;
  img: string;
  caption?: string;
}
