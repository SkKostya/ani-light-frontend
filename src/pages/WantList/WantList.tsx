import { PlaylistAdd as WantListIcon } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimeCard, mockAnimeData } from '@/shared/entities/anime-card';
import type { Anime } from '@/shared/entities/anime-card/anime-card.types';

const WantList: React.FC = () => {
  const { t } = useTranslation();
  const [animeList, setAnimeList] = useState<Anime[]>(mockAnimeData);

  // Фильтруем только аниме из списка желаний
  const wantListAnime = useMemo(
    () => animeList.filter((anime) => anime.isWantToWatch),
    [animeList]
  );

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
            {t('wantlist_title')}
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary" paragraph>
          {t('wantlist_description')}
        </Typography>

        {/* Сетка карточек аниме */}
        {wantListAnime.length > 0 ? (
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
            {wantListAnime.map((anime) => (
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
            <WantListIcon
              sx={{
                fontSize: 64,
                color: 'var(--color-text-disabled)',
                mb: 2
              }}
            />
            <Typography variant="h5" component="h2" gutterBottom>
              {t('wantlist_empty_title')}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {t('wantlist_empty_description')}
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default WantList;
