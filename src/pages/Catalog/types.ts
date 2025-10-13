import type { GetAnimeListParams } from '@/api/types/anime.types';

export interface CatalogFilters
  extends Omit<GetAnimeListParams, 'page' | 'limit'> {
  search?: string;
  genre?: string;
  year?: number;
}

export interface PaginationState {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
  isLoading: boolean;
}

export interface CatalogState {
  animeList: any[];
  filters: CatalogFilters;
  pagination: PaginationState;
}
