import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import type { IGetAnimeListParams } from '@/api/types/anime.types';

export const useUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Получаем фильтры из URL
  const urlFilters = useMemo((): IGetAnimeListParams => {
    const search = searchParams.get('search') || undefined;
    const genre = searchParams.get('genre') || undefined;
    const year_from = searchParams.get('year_from')
      ? Number(searchParams.get('year_from'))
      : undefined;
    const year_to = searchParams.get('year_to')
      ? Number(searchParams.get('year_to'))
      : undefined;
    const min_rating = searchParams.get('min_rating')
      ? Number(searchParams.get('min_rating'))
      : undefined;
    const max_rating = searchParams.get('max_rating')
      ? Number(searchParams.get('max_rating'))
      : undefined;
    const is_ongoing = searchParams.get('is_ongoing')
      ? Boolean(searchParams.get('is_ongoing'))
      : undefined;
    return {
      search,
      genre,
      year_from,
      year_to,
      min_rating,
      max_rating,
      is_ongoing
    };
  }, [searchParams]);

  // Обновляем URL при изменении фильтров
  const updateUrlFilters = useCallback(
    (filters: IGetAnimeListParams) => {
      const newSearchParams = new URLSearchParams(searchParams);

      // Очищаем существующие параметры фильтров
      newSearchParams.delete('search');
      newSearchParams.delete('genre');
      newSearchParams.delete('year_from');
      newSearchParams.delete('year_to');
      newSearchParams.delete('min_rating');
      newSearchParams.delete('max_rating');
      newSearchParams.delete('is_ongoing');

      // Добавляем новые параметры только если они есть
      if (filters.search) {
        newSearchParams.set('search', filters.search);
      }
      if (filters.genre) {
        newSearchParams.set('genre', filters.genre);
      }
      if (filters.year_from) {
        newSearchParams.set('year_from', filters.year_from.toString());
      }
      if (filters.year_to) {
        newSearchParams.set('year_to', filters.year_to.toString());
      }
      if (filters.min_rating) {
        newSearchParams.set('min_rating', filters.min_rating.toString());
      }
      if (filters.max_rating) {
        newSearchParams.set('max_rating', filters.max_rating.toString());
      }
      if (filters.is_ongoing) {
        newSearchParams.set('is_ongoing', filters.is_ongoing.toString());
      }

      setSearchParams(newSearchParams, { replace: true });
    },
    [searchParams, setSearchParams]
  );

  // Сбрасываем фильтры в URL
  const resetUrlFilters = useCallback(() => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.delete('search');
    newSearchParams.delete('genre');
    newSearchParams.delete('year_from');
    newSearchParams.delete('year_to');
    newSearchParams.delete('min_rating');
    newSearchParams.delete('max_rating');
    newSearchParams.delete('is_ongoing');
    setSearchParams(newSearchParams, { replace: true });
  }, [searchParams, setSearchParams]);

  return {
    urlFilters,
    updateUrlFilters,
    resetUrlFilters
  };
};
