export interface ISuggestedSession {
  img: string;
  href: string;
}

export interface ISession {
  title: string;
  details: string[];
  photos: Array<IFullWidth | IGroup | IPhoto>;
  suggested: ISuggestedSession[];
}

export enum EPhotoType {
  FullWidth = "full-width",
  Group = "group",
  Photo = "photo",
}

interface IFullWidth {
  type: EPhotoType.FullWidth;
  img: string;
}

interface IGroup {
  type: EPhotoType.Group;
  img: string[];
}

interface IPhoto {
  type: EPhotoType.Photo;
  img: string;
}
