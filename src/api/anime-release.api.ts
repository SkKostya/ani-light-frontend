import { ApiConnector } from './api.connector';
import type {
  AnimeReleaseDetailsResponse,
  AnimeReleaseEpisodesResponse,
  AnimeReleaseListResponse,
  GetAnimeReleaseListParams,
  SearchAnimeReleaseParams,
  SearchAnimeReleaseResponse
} from './types/anime-release.types';

class AnimeReleaseApi extends ApiConnector {
  /**
   * Получить список аниме с пагинацией и фильтрацией
   */
  getAnimeList(
    params?: GetAnimeReleaseListParams
  ): Promise<AnimeReleaseListResponse> {
    return this.call<GetAnimeReleaseListParams, AnimeReleaseListResponse>({
      path: 'anime',
      method: 'get',
      params
    });
  }

  /**
   * Поиск аниме по названию
   */
  searchAnime(
    params: SearchAnimeReleaseParams
  ): Promise<SearchAnimeReleaseResponse> {
    return this.call<SearchAnimeReleaseParams, SearchAnimeReleaseResponse>({
      path: 'anime/search',
      method: 'get',
      params
    });
  }

  /**
   * Получить детали аниме по ID
   */
  getAnimeDetails(id: string): Promise<AnimeReleaseDetailsResponse> {
    return this.call<never, AnimeReleaseDetailsResponse>({
      path: `anime/${id}`,
      method: 'get'
    });
  }

  /**
   * Получить эпизоды аниме по ID
   */
  getAnimeEpisodes(id: string): Promise<AnimeReleaseEpisodesResponse> {
    return this.call<never, AnimeReleaseEpisodesResponse>({
      path: `anime/${id}/episodes`,
      method: 'get'
    });
  }
}

export const animeReleaseApi = new AnimeReleaseApi();
