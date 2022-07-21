type Site =
  | 'bitcasino'
  | 'sportsbet'
  | 'livecasino'
  | 'betadda'
  | 'sportsbetmx';

type SiteRecord<T> = Record<Site, T>;

export const siteOrder: SiteRecord<number> = {
  bitcasino: 1,
  betadda: 2,
  livecasino: 3,
  sportsbet: 4,
  sportsbetmx: 5,
};
