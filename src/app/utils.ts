// TODO
/* eslint-disable @typescript-eslint/no-explicit-any */
import { suggestedPostsNumber } from "@/app/config";
import type { ISession, ISuggestedSession } from "@/app/types";
import { links } from "@/app/config";

export const parseSlug = (title: string) => title.toLowerCase().split(" ").join("-");

export function filterSuggested(this: ISession, item: ISuggestedSession) {
  return item.title !== this.title;
}

const filterTeasers = (teasers: any, session: any) =>
  teasers
    .filter(filterSuggested.bind(session as ISession))
    .slice(0, suggestedPostsNumber);

export const mapSessions = (sessionsList: Array<ISession>, teasers: any) =>
  Object.fromEntries(
    sessionsList.map(item => {
      const slug = parseSlug(item.title);
      const updatedSession = {
        ...item,
        suggested: filterTeasers(teasers, item),
      };

      return [slug, updatedSession];
    }),
  );

export const mapTeasers = (sessions: ISession[]) => sessions.map(({title, teaser}) => ({
  title,
  img: teaser,
  href: `${links.photos.href}/${parseSlug(title)}`,
}));