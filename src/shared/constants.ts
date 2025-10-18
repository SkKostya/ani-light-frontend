export const ROUTES = {
  catalog: 'anime',
  animeEpisodes: (alias = ':alias') => `anime/${alias}`,
  animeWithSeason: (
    alias = ':alias',
    seasonNumber = ':seasonNumber',
    episodeNumber = ':episodeNumber'
  ) => `anime/${alias}/season/${seasonNumber}/episode/${episodeNumber}`,
  anime: (alias = ':alias', episodeNumber = ':episodeNumber') =>
    `anime/${alias}/episode/${episodeNumber}`,

  watchList: 'watch-list',
  wantList: 'want-list',
  favorites: 'favorites',
  history: 'history',
  profile: 'profile'
};

export enum Languages {
  ru = 'ru',
  en = 'en'
}
export const SUPPORTED_LANGUAGES = [Languages.ru, Languages.en];
