import {
  Favorite,
  FavoriteBorder,
  PlayArrow,
  PlaylistAdd,
  PlaylistAddCheck
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ImageWithFallback } from '@/shared/ui';

import type { AnimeDetailedInfo } from '../../types';
import { animeInfoStyles } from './AnimeInfo.styles';

interface AnimeInfoProps {
  anime: AnimeDetailedInfo;
}

const AnimeInfo = ({ anime }: AnimeInfoProps) => {
  const { t } = useTranslation();

  return (
    <Card sx={animeInfoStyles.card}>
      <CardContent sx={animeInfoStyles.cardContent}>
        <Box sx={animeInfoStyles.mainContainer}>
          <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
            {/* Постер */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
              <Box sx={animeInfoStyles.posterContainer}>
                <ImageWithFallback
                  src={anime.poster}
                  alt={anime.title}
                  sx={animeInfoStyles.poster}
                  fallbackIcon="🎭"
                />
                <Box sx={animeInfoStyles.posterOverlay}>
                  <IconButton
                    sx={animeInfoStyles.playButton}
                    size="large"
                    color="primary"
                  >
                    <PlayArrow fontSize="large" />
                  </IconButton>
                </Box>
              </Box>
            </Grid>

            {/* Информация */}
            <Grid size={{ xs: 12, sm: 8, md: 9 }}>
              <Stack spacing={2}>
                {/* Заголовок и год */}
                <Box>
                  <Typography variant="h4" sx={animeInfoStyles.title}>
                    {anime.title}
                  </Typography>
                  {anime.originalTitle && (
                    <Typography variant="h6" sx={animeInfoStyles.originalTitle}>
                      {anime.originalTitle}
                    </Typography>
                  )}
                  <Box sx={animeInfoStyles.yearContainer}>
                    <Typography variant="body2" sx={animeInfoStyles.yearLabel}>
                      Дата выхода:
                    </Typography>
                    <Typography variant="body1" sx={animeInfoStyles.year}>
                      {anime.firstYear}
                      {anime.firstYear !== anime.lastYear
                        ? ` - ${anime.lastYear}`
                        : ''}
                      {anime.isOnGoing ? ' • ' + t('anime_status_ongoing') : ''}
                    </Typography>
                  </Box>
                </Box>

                {/* Жанры и темы */}
                {anime.genres.length > 0 && (
                  <Box>
                    <Typography variant="body2" sx={animeInfoStyles.label}>
                      {t('anime_genres')}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      useFlexGap
                    >
                      {anime.genres.map((genre) => (
                        <Chip
                          key={genre}
                          label={genre}
                          size="small"
                          sx={animeInfoStyles.genreChip}
                        />
                      ))}
                    </Stack>
                  </Box>
                )}

                {/* Кнопки действий */}
                <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
                  <IconButton
                    color={anime.isFavorite ? 'error' : 'default'}
                    sx={animeInfoStyles.actionIconButton}
                  >
                    {anime.isFavorite ? <Favorite /> : <FavoriteBorder />}
                  </IconButton>
                  <IconButton
                    color={anime.isInWatchList ? 'primary' : 'default'}
                    sx={animeInfoStyles.actionIconButton}
                  >
                    {anime.isInWatchList ? (
                      <PlaylistAddCheck />
                    ) : (
                      <PlaylistAdd />
                    )}
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          {/* Описание - на всю ширину внизу */}
          <Box sx={animeInfoStyles.descriptionContainer}>
            <Typography variant="body2" sx={animeInfoStyles.label}>
              {t('anime_description')}
            </Typography>
            <Typography variant="body2" sx={animeInfoStyles.description}>
              {anime.description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default AnimeInfo;
