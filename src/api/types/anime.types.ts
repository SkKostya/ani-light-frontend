// Типы для Anime API
import type { Episode } from './episode.types';
import type { UserAnime } from './user.types';

export interface Anime {
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
  genres?: Array<{
    id: string;
    external_id: number;
    name: string;
    image: {
      optimized_preview: string;
      preview: string;
    };
  }>;
  userAnime?: Omit<UserAnime, 'anime'>;
}

export interface GetAnimeListParams {
  page?: number;
  limit?: number;
  search?: string;
  genre?: string;
  year?: number;
}

export interface SearchAnimeParams {
  q: string;
}

export interface AnimeListResponse {
  data: Anime[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}

export interface SearchAnimeResponse {
  results: Anime[];
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}

export interface AnimeDetailsResponse extends Anime {
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}

export interface AnimeEpisodesResponse {
  episodes: Episode[];
  shouldHideAds: boolean;
  user?: {
    id: string;
    username: string;
    subscription_type: string;
  } | null;
}
