import { useCallback, useMemo } from 'react';
import { useSearchParams } from 'react-router';

import type { CatalogFilters } from '../types';

export const useUrlFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Получаем фильтры из URL
  const urlFilters = useMemo((): CatalogFilters => {
    const search = searchParams.get('search') || undefined;
    const genre = searchParams.get('genre') || undefined;
    const year = searchParams.get('year')
      ? Number(searchParams.get('year'))
      : undefined;

    return {
      search,
      genre,
      year
    };
  }, [searchParams]);

  // Обновляем URL при изменении фильтров
  const updateUrlFilters = useCallback(
    (filters: CatalogFilters) => {
      const newSearchParams = new URLSearchParams(searchParams);

      // Очищаем существующие параметры фильтров
      newSearchParams.delete('search');
      newSearchParams.delete('genre');
      newSearchParams.delete('year');

      // Добавляем новые параметры только если они есть
      if (filters.search) {
        newSearchParams.set('search', filters.search);
      }
      if (filters.genre) {
        newSearchParams.set('genre', filters.genre);
      }
      if (filters.year) {
        newSearchParams.set('year', filters.year.toString());
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
    newSearchParams.delete('year');
    setSearchParams(newSearchParams, { replace: true });
  }, [searchParams, setSearchParams]);

  return {
    urlFilters,
    updateUrlFilters,
    resetUrlFilters
  };
};
