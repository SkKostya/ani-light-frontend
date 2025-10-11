import { ApiConnector } from './api.connector';
import type {
  AnimeDetailsResponse,
  AnimeEpisodesResponse,
  AnimeListResponse,
  GetAnimeListParams,
  SearchAnimeParams,
  SearchAnimeResponse
} from './types/anime.types';

class AnimeApi extends ApiConnector {
  /**
   * Получить список аниме с пагинацией и фильтрацией
   */
  getAnimeList(params?: GetAnimeListParams): Promise<AnimeListResponse> {
    return this.call<GetAnimeListParams, AnimeListResponse>({
      path: 'anime',
      method: 'get',
      params
    });
  }

  /**
   * Поиск аниме по названию
   */
  searchAnime(params: SearchAnimeParams): Promise<SearchAnimeResponse> {
    return this.call<SearchAnimeParams, SearchAnimeResponse>({
      path: 'anime/search',
      method: 'get',
      params
    });
  }

  /**
   * Получить детали аниме по ID
   */
  getAnimeDetails(id: string): Promise<AnimeDetailsResponse> {
    return this.call<never, AnimeDetailsResponse>({
      path: `anime/${id}`,
      method: 'get'
    });
  }

  /**
   * Получить эпизоды аниме по ID
   */
  getAnimeEpisodes(id: string): Promise<AnimeEpisodesResponse> {
    return this.call<never, AnimeEpisodesResponse>({
      path: `anime/${id}/episodes`,
      method: 'get'
    });
  }
}

export const animeApi = new AnimeApi();
