import { ApiConnector } from './api.connector';
import type {
  IAnimeDetails,
  IAnimeListResponse,
  IGetAnimeListParams
} from './types/anime.types';

class AnimeApi extends ApiConnector {
  /**
   * Получить список аниме с пагинацией и фильтрацией
   */
  getAnimeList(params?: IGetAnimeListParams): Promise<IAnimeListResponse> {
    return this.call<IGetAnimeListParams, IAnimeListResponse>({
      path: 'anime',
      method: 'get',
      params
    });
  }

  /**
   * Получить релизы аниме по ID
   */
  getAnimeReleases(id: string): Promise<IAnimeDetails> {
    return this.call<never, IAnimeDetails>({
      path: `anime/${id}/releases`,
      method: 'get'
    });
  }
}

export const animeApi = new AnimeApi();
