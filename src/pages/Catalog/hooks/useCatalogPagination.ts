import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

import { animeApi } from '@/api/anime.api';
import type { Anime } from '@/shared/entities/anime-card/anime-card.types';

import type { CatalogFilters, PaginationState } from '../types';

interface UseCatalogPaginationProps {
  filters: CatalogFilters;
  onError: (error: string) => void;
}

export const useCatalogPagination = ({
  filters,
  onError
}: UseCatalogPaginationProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLoadingRef = useRef(false);

  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const [pagination, setPagination] = useState<PaginationState>({
    page: 1,
    limit: isMobile ? 15 : 25,
    total: 0,
    totalPages: 0,
    hasMore: true,
    isLoading: false
  });

  // Обновляем лимит при изменении размера экрана
  useEffect(() => {
    const newLimit = isMobile ? 15 : 25;
    setPagination((prev) => ({
      ...prev,
      limit: newLimit
    }));
  }, [isMobile]);

  const loadAnime = useCallback(
    async (page: number, reset = false) => {
      // Защита от повторных запросов
      if (isLoadingRef.current) return;

      isLoadingRef.current = true;
      setPagination((prev) => ({ ...prev, isLoading: true }));

      try {
        const response = await animeApi.getAnimeList({
          ...filters,
          page,
          limit: pagination.limit
        });

        const newAnimeList = response.data.map((item) => ({
          id: item.id,
          title: item.title_ru,
          description: item.description,
          imageUrl: item.poster_url,
          isFavorite: item.userAnime?.is_favorite || false,
          isWantToWatch: item.userAnime?.want_to_watch || false,
          genres: item.genres?.map((genre) => genre.name),
          year: item.year,
          episodes: item.episodes_total,
          onGoing: item.is_ongoing
        }));

        setAnimeList((prev) =>
          reset ? newAnimeList : [...prev, ...newAnimeList]
        );

        setPagination((prev) => ({
          ...prev,
          page: response.pagination.page,
          total: response.pagination.total,
          totalPages: response.pagination.totalPages,
          hasMore: response.hasNext,
          isLoading: false
        }));
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : 'Ошибка загрузки аниме';
        onError(errorMessage);
        setPagination((prev) => ({ ...prev, isLoading: false }));
      } finally {
        isLoadingRef.current = false;
      }
    },
    [JSON.stringify(filters), pagination.limit]
  );

  const loadMore = useCallback(() => {
    if (pagination.hasMore && !isLoadingRef.current && animeList.length > 0) {
      loadAnime(pagination.page + 1);
    }
  }, [pagination.hasMore, pagination.page, animeList.length]);

  const resetAndLoad = useCallback(async () => {
    setAnimeList([]);
    setPagination((prev) => ({
      ...prev,
      page: 1,
      hasMore: true
    }));
    await loadAnime(1, true);
  }, []);

  const updateAnimeInList = useCallback(
    (animeId: string, updates: Partial<Anime>) => {
      setAnimeList((prev) =>
        prev.map((anime) =>
          anime.id === animeId ? { ...anime, ...updates } : anime
        )
      );
    },
    []
  );

  return {
    animeList,
    pagination,
    loadMore,
    resetAndLoad,
    updateAnimeInList
  };
};
