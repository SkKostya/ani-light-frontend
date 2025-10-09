export const ROUTES = {
  catalog: 'anime',
  animeEpisodes: (uuid = ':uuid') => `anime/${uuid}/episodes`,
  anime: (uuid = ':uuid') => `anime/${uuid}`,

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
