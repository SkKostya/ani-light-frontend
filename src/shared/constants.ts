export const ROUTES = {
  catalog: 'anime',
  animeEpisodes: (animeId = ':animeId') => `anime/${animeId}`,
  anime: (animeId = ':animeId', episodeId = ':episodeId') =>
    `anime/${animeId}/${episodeId}`,

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
