import { Box, Container, Typography } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { userApi } from '@/api/user.api';
import { toast } from '@/shared/entities';
import { AnimeCard } from '@/shared/entities/anime-card';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { MainLoader } from '@/shared/ui';

import { useCatalogPagination } from './hooks/useCatalogPagination';
import { useUrlFilters } from './hooks/useUrlFilters';
import type { CatalogFilters } from './types';
import {
  CatalogFilters as CatalogFiltersComponent,
  LoadingIndicator
} from './ui';

const Catalog: React.FC = () => {
  const { t } = useTranslation();

  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const { urlFilters, updateUrlFilters, resetUrlFilters } = useUrlFilters();

  const handleError = useCallback((error: string) => {
    toast.error(error, 'Ошибка');
  }, []);

  const { animeList, pagination, loadMore, resetAndLoad, updateAnimeInList } =
    useCatalogPagination({
      filters: urlFilters,
      onError: handleError
    });

  console.info('🔍 Catalog render:', {
    isInitialLoading,
    paginationIsLoading: pagination.isLoading
  });

  const handleToggleFavorite = useCallback(
    async (animeId: string) => {
      // Сначала находим исходное состояние
      const originalAnime = animeList.find((a) => a.id === animeId);
      if (!originalAnime) return;

      const wasFavorite = originalAnime.isFavorite;

      // Оптимистичное обновление UI
      updateAnimeInList(animeId, { isFavorite: !wasFavorite });

      try {
        await userApi.toggleFavoriteAnime(animeId);
        // Показываем toast на основе исходного состояния
        if (wasFavorite) {
          toast.info('Аниме удалено из избранного', 'Информация');
        } else {
          toast.success('Аниме добавлено в избранное!', 'Успех');
        }
      } catch (err) {
        const error = err as Error;
        toast.error(error.message, 'Ошибка');
        // В случае ошибки возвращаем исходное состояние
        updateAnimeInList(animeId, { isFavorite: wasFavorite });
      }
    },
    [animeList, updateAnimeInList]
  );

  const handleToggleWantToWatch = useCallback(
    async (animeId: string) => {
      const originalState = animeList.find(
        (a) => a.id === animeId
      )?.isWantToWatch;

      // Оптимистичное обновление UI
      updateAnimeInList(animeId, { isWantToWatch: !originalState });

      try {
        await userApi.toggleWantToWatchAnime(animeId);
        // Показываем успешное уведомление
        if (originalState) {
          toast.success('Аниме удалено из списка "Хочу посмотреть"', 'Успех');
        } else {
          toast.success('Аниме добавлено в список "Хочу посмотреть"', 'Успех');
        }
      } catch (err) {
        const error = err as Error;
        toast.error(error.message, 'Ошибка');
        // В случае ошибки возвращаем исходное состояние
        updateAnimeInList(animeId, { isWantToWatch: originalState });
      }
    },
    [animeList, updateAnimeInList]
  );

  // Настройка Intersection Observer для бесконечной прокрутки
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '100px'
  });

  // Загружаем больше контента при пересечении с индикатором загрузки
  useEffect(() => {
    if (
      isIntersecting &&
      pagination.hasMore &&
      !pagination.isLoading &&
      animeList.length > 0 // Загружаем только если уже есть данные
    ) {
      loadMore();
    }
  }, [
    isIntersecting,
    pagination.hasMore,
    pagination.isLoading,
    animeList.length,
    loadMore
  ]);

  // Загружаем начальные данные
  useEffect(() => {
    const loadInitialData = async () => {
      setIsInitialLoading(true);
      await resetAndLoad();
      setIsInitialLoading(false);
    };

    loadInitialData();
  }, []);

  // Обработчики фильтров
  const handleFiltersChange = useCallback(
    (newFilters: CatalogFilters) => {
      updateUrlFilters(newFilters);
      resetAndLoad();
    },
    [updateUrlFilters]
  );

  const handleSearch = useCallback(() => {
    resetAndLoad();
  }, [resetAndLoad]);

  const handleResetFilters = useCallback(() => {
    resetUrlFilters();
    resetAndLoad();
  }, [resetUrlFilters, resetAndLoad]);

  return (
    <Container>
      {isInitialLoading && <MainLoader fullScreen={true} />}

      <Box sx={{ py: 4 }}>
        {/* Заголовок */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 3
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ mb: 0 }}>
            {t('catalog_title')}
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          {t('catalog_description')}
        </Typography>

        {/* Фильтры */}
        <CatalogFiltersComponent
          filters={urlFilters}
          onFiltersChange={handleFiltersChange}
          onSearch={handleSearch}
          onReset={handleResetFilters}
        />

        {/* Сетка карточек аниме */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: 3
          }}
        >
          {animeList.map((anime) => (
            <AnimeCard
              key={anime.id}
              anime={anime}
              onToggleFavorite={handleToggleFavorite}
              onToggleWantToWatch={handleToggleWantToWatch}
              variant="compact"
            />
          ))}
        </Box>

        {/* Индикатор загрузки и статус пагинации */}
        {animeList.length > 0 && !isInitialLoading && !pagination.isLoading && (
          <Box ref={ref}>
            <LoadingIndicator
              isLoading={pagination.isLoading}
              hasMore={pagination.hasMore}
              currentCount={animeList.length}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Catalog;
