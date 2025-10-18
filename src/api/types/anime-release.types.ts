// Типы для Anime API
import type { IPaginatedResponse } from './api.types';
import type { Episode } from './episode.types';
import type { UserAnime } from './user.types';

export interface AnimeRelease {
  id: string;
  external_id?: number;
  title_ru: string;
  title_en: string;
  description: string;
  year: number;
  poster_url: string;
  alias: string;
  is_blocked_by_geo: boolean;
  is_ongoing: boolean;
  publish_day: {
    value: number;
    description: string;
  };
  episodes_total: number;
  average_duration_of_episode: number;
  external_created_at: string;
  age_rating: {
    id: string;
    value: string;
    label: string;
    description: string;
  };
  animeGenres?: Array<{
    id: string;
    anime_id: string;
    genre_id: string;
    genre: {
      id: string;
      external_id: number;
      name: string;
      image: {
        optimized_preview: string;
        preview: string;
      };
    };
  }>;
  userAnime?: Omit<UserAnime, 'anime'>;
}

export interface GetAnimeReleaseListParams {
  page?: number;
  limit?: number;
  search?: string;
  genre?: string;
  year?: number;
}

export interface SearchAnimeReleaseParams {
  q: string;
}

export interface AnimeReleaseListResponse
  extends IPaginatedResponse<AnimeRelease> {
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}

export interface SearchAnimeReleaseResponse {
  results: AnimeRelease[];
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}

export interface AnimeReleaseDetailsResponse extends AnimeRelease {
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}

export interface AnimeReleaseEpisodesResponse {
  episodes: Episode[];
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}
