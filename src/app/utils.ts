import { suggestedPostsNumber } from "@/app/config";
import { links } from "@/app/config";
import type { ISession, ISuggestedSession, ITeaser, TInitSession } from "@/app/types";

export const parseSlug = (title: string, subtitle = ""): string =>
  [title, subtitle]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .replace(/[^a-zA-Z1-9 ]/g, "")
    .split(" ")
    .join("-");

export function filterSuggested(this: ISession, item: ISuggestedSession): boolean {
  return item.title !== this.title;
}

const filterTeasers = (teasers: ITeaser[], session: TInitSession) =>
  teasers
    .filter(filterSuggested.bind(session as ISession))
    .slice(0, suggestedPostsNumber);

export const mapSessions = (
  sessionsList: Array<TInitSession>,
  teasers: ITeaser[],
): Record<string, ISession> => {
  const mapSession = (item: TInitSession) => {
    const slug = parseSlug(item.title, item.subtitle);
    const updatedSession = {
      ...item,
      suggested: filterTeasers(teasers, item),
    };

    return [slug, updatedSession];
  };

  return Object.fromEntries(sessionsList.map(mapSession));
};

export const mapTeasers = (sessions: Omit<ISession, "suggested">[]): ITeaser[] =>
  sessions.map(({ title, subtitle, teaser }) => ({
    title,
    img: teaser,
    href: `${links.photos.href}/${parseSlug(title, subtitle)}`,
  }));

export const prefetchImage = (url: string) => {
  const img = new Image();
  img.src = url;
};
