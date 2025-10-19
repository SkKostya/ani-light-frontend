import { useSearchParams } from 'react-router';

import { useDebouncedValue } from '@/shared/hooks/useDebouncedValue';

export const useUrlFilters = () => {
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search') || '';
  const debouncedSearch = useDebouncedValue(search, 300) || undefined;
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
    debouncedSearch,
    genre,
    year_from,
    year_to,
    min_rating,
    max_rating,
    is_ongoing
  };
};
