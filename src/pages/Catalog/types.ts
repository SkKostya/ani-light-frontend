import type { GetAnimeReleaseListParams } from '@/api/types/anime-release.types';

export interface CatalogFilters
  extends Omit<GetAnimeReleaseListParams, 'page' | 'limit'> {
  search?: string;
  debouncedSearch?: string;
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
