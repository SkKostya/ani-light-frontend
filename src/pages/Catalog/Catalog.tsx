import { Search as SearchIcon } from '@mui/icons-material';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AnimeCard, mockAnimeData } from '@/shared/entities/anime-card';
import type { Anime } from '@/shared/entities/anime-card/anime-card.types';

const Catalog: React.FC = () => {
  const { t } = useTranslation();
  const [animeList, setAnimeList] = useState<Anime[]>(mockAnimeData);

  const handleToggleFavorite = (animeId: string) => {
    setAnimeList((prevList) =>
      prevList.map((anime) =>
        anime.id === animeId
          ? { ...anime, isFavorite: !anime.isFavorite }
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
        <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
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
              onClick={handleAnimeClick}
              variant="compact"
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Catalog;
