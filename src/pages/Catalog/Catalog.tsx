import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { animeApi } from '@/api/anime.api';
import { userApi } from '@/api/user.api';
import { toast } from '@/shared/entities';
import { AnimeCard, mockAnimeData } from '@/shared/entities/anime-card';
import type { Anime } from '@/shared/entities/anime-card/anime-card.types';
import { MainLoader } from '@/shared/ui';

const Catalog: React.FC = () => {
  const { t } = useTranslation();

  const [animeList, setAnimeList] = useState<Anime[]>(mockAnimeData);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggleFavorite = async (animeId: string) => {
    // Сначала находим исходное состояние
    const originalAnime = animeList.find((a) => a.id === animeId);
    if (!originalAnime) return;

    const wasFavorite = originalAnime.isFavorite;

    setAnimeList((prevList) =>
      prevList.map((anime) =>
        anime.id === animeId
          ? { ...anime, isFavorite: !anime.isFavorite }
          : anime
      )
    );

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
      setAnimeList((prevList) =>
        prevList.map((anime) =>
          anime.id === animeId ? { ...anime, isFavorite: wasFavorite } : anime
        )
      );
    }
  };

  const handleToggleWantToWatch = async (animeId: string) => {
    const originalState = animeList.find(
      (a) => a.id === animeId
    )?.isWantToWatch;

    setAnimeList((prevList) =>
      prevList.map((anime) =>
        anime.id === animeId
          ? { ...anime, isWantToWatch: !anime.isWantToWatch }
          : anime
      )
    );

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
      setAnimeList((prevList) =>
        prevList.map((anime) =>
          anime.id === animeId
            ? { ...anime, isWantToWatch: !anime.isWantToWatch }
            : anime
        )
      );
    }
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await animeApi.getAnimeList();
        setAnimeList(
          response.data.map((item) => ({
            id: item.id,
            title: item.title_ru,
            description: item.description,
            imageUrl: item.poster_url,
            isFavorite: item.userAnime?.is_favorite || false,
            isWantToWatch: item.userAnime?.want_to_watch || false,
            genres: item.genres?.map((genre) => genre.name),
            year: item.year,
            episodes: item.episodes_total
          }))
        );
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <Container>
      {isLoading && <MainLoader fullScreen={true} />}

      <Box sx={{ py: 4 }}>
        {/* Заголовок с переключателем темы */}
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

        {/* Кнопки действий */}
        <Stack direction="row" spacing={2} sx={{ mb: 4 }} flexWrap="wrap">
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            size="large"
            className="anime-gradient-magic"
            sx={{
              color: 'white',
              '&:hover': {
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)'
              }
            }}
          >
            {t('button_search')}
          </Button>
        </Stack>

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
      </Box>
    </Container>
  );
};

export default Catalog;
