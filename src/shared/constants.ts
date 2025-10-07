export const ROUTES = {
  catalog: 'anime',
  anime: (uuid = ':uuid') => `anime/${uuid}`
};

export enum Languages {
  ru = 'ru',
  en = 'en'
}
export const SUPPORTED_LANGUAGES = [Languages.ru, Languages.en];
