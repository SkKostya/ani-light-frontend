import { PlaylistPlay as WatchListIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimeCard } from '@/shared/entities/anime-card';
import type { Anime } from '@/shared/entities/anime-card/anime-card.types';

const WatchList: React.FC = () => {
  const { t } = useTranslation();
  const [animeList, setAnimeList] = useState<Anime[]>([]);

  // Фильтруем аниме для списка просмотра (показываем все, так как нет отдельного поля isWatching)
  const watchListAnime = useMemo(() => animeList, [animeList]);

  const handleToggleFavorite = (animeId: string) => {
    setAnimeList((prevList) =>
      prevList.map((anime) =>
        anime.id === animeId
          ? { ...anime, isFavorite: !anime.isFavorite }
          : anime
      )
    );
  };

  const handleToggleWantToWatch = (animeId: string) => {
    setAnimeList((prevList) =>
      prevList.map((anime) =>
        anime.id === animeId
          ? { ...anime, isWantToWatch: !anime.isWantToWatch }
          : anime
      )
    );
  };

  const handleAnimeClick = () => {
    // TODO: Navigate to anime details page
    // console.log('Clicked anime:', animeId);
  };

  return (
    <Container>
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
            {t('watchlist_title')}
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          {t('watchlist_description')}
        </Typography>

        {/* Сетка карточек аниме */}
        {watchListAnime.length > 0 ? (
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
            {watchListAnime.map((anime) => (
              <AnimeCard
                key={anime.id}
                anime={anime}
                onToggleFavorite={handleToggleFavorite}
                onToggleWantToWatch={handleToggleWantToWatch}
                onClick={handleAnimeClick}
                variant="compact"
              />
            ))}
          </Box>
        ) : (
          /* Пустое состояние */
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              py: 8,
              textAlign: 'center'
            }}
          >
            <WatchListIcon
              sx={{
                fontSize: 64,
                color: 'var(--color-text-disabled)',
                mb: 2
              }}
            />
            <Typography variant="h5" component="h2" gutterBottom>
              {t('watchlist_empty_title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('watchlist_empty_description')}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default WatchList;
