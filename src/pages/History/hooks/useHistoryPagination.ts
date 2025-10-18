import { useMediaQuery, useTheme } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { UserEpisode } from '@/api/types/user.types';
import { userApi } from '@/api/user.api';

import type { HistoryEntry } from '../types';

interface PaginationState {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
  isLoading: boolean;
}

// Преобразуем UserEpisode в HistoryEntry
const transformUserEpisodeToHistoryEntry = (
  userEpisode: UserEpisode
): HistoryEntry => {
  const watchedAt =
    userEpisode.watched_until_end_at ||
    userEpisode.last_watched_at ||
    userEpisode.updated_at;

  return {
    id: userEpisode.id,
    animeId: userEpisode.episode.anime_id,
    animeTitle:
      userEpisode.episode.animeRelease.title_ru ||
      userEpisode.episode.animeRelease.title_en,
    animeImageUrl: userEpisode.episode.animeRelease.poster_url,
    season: userEpisode.episode.animeRelease.sort_order,
    episode: userEpisode.episode.number,
    episodeTitle: userEpisode.episode.title,
    watchedAt: watchedAt,
    watchedDuration:
      userEpisode.status === 'watched' ? userEpisode.episode.duration : 0,
    totalDuration: userEpisode.episode.duration,
    progress: userEpisode.status === 'watched' ? 100 : 0,
    rating: userEpisode.rating
  };
};

export const useHistoryPagination = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isLoadingRef = useRef(false);

  const [historyEntries, setHistoryEntries] = useState<HistoryEntry[]>([]);
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

  const loadHistory = useCallback(
    async (page: number, reset = false) => {
      // Защита от повторных запросов
      if (isLoadingRef.current) return;

      isLoadingRef.current = true;
      setPagination((prev) => ({ ...prev, isLoading: true }));

      try {
        const currentLimit = isMobile ? 15 : 25;
        const response = await userApi.getUserEpisodesHistory({
          page,
          limit: currentLimit
        });

        const newHistoryEntries = response.data
          .filter(
            (entry) => entry.status === 'watched' && entry.watched_until_end_at
          ) // Только просмотренные до конца
          .map(transformUserEpisodeToHistoryEntry);

        setHistoryEntries((prev) =>
          reset ? newHistoryEntries : [...prev, ...newHistoryEntries]
        );

        setPagination((prev) => ({
          ...prev,
          page: response.pagination.page,
          total: response.pagination.total,
          totalPages: response.pagination.totalPages,
          hasMore: response.pagination.totalPages > response.pagination.page,
          isLoading: false
        }));
      } catch (error) {
        console.error(error);
        setPagination((prev) => ({ ...prev, isLoading: false }));
      } finally {
        isLoadingRef.current = false;
      }
    },
    [isMobile]
  );

  const loadMore = useCallback(() => {
    if (pagination.hasMore && !isLoadingRef.current) {
      loadHistory(pagination.page + 1);
    }
  }, [pagination.hasMore, pagination.page]);

  const resetAndLoad = useCallback(async () => {
    setHistoryEntries([]);
    setPagination((prev) => ({
      ...prev,
      page: 1,
      hasMore: true
    }));
    await loadHistory(1, true);
  }, []);

  // Группируем данные по датам
  const groupedHistory = historyEntries.reduce(
    (acc, entry) => {
      const date = new Date(entry.watchedAt).toDateString();
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(entry);
      return acc;
    },
    {} as Record<string, HistoryEntry[]>
  );

  // Сортируем даты в убывающем порядке (новые сверху)
  const sortedDates = Object.keys(groupedHistory).sort(
    (a, b) => new Date(b).getTime() - new Date(a).getTime()
  );

  return {
    historyEntries,
    groupedHistory,
    sortedDates,
    pagination,
    loadMore,
    resetAndLoad
  };
};
