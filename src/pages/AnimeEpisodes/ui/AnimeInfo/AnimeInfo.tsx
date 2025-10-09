import {
  Favorite,
  FavoriteBorder,
  PlayArrow,
  PlaylistAdd,
  PlaylistAddCheck,
  Star,
  StarBorder
} from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Rating,
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

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours}ч ${remainingMinutes}м`;
    }
    return `${minutes}м`;
  };

  const getStatusText = (status: string): string => {
    switch (status) {
      case 'ongoing':
        return t('anime_status_ongoing');
      case 'completed':
        return t('anime_status_completed');
      case 'upcoming':
        return t('anime_status_upcoming');
      case 'cancelled':
        return t('anime_status_cancelled');
      default:
        return status;
    }
  };

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
                  <Typography variant="body1" sx={animeInfoStyles.year}>
                    {anime.year} • {getStatusText(anime.status)}
                  </Typography>
                </Box>

                {/* Рейтинг и статистика */}
                <Box sx={animeInfoStyles.ratingContainer}>
                  <Box sx={animeInfoStyles.rating}>
                    <Rating
                      value={anime.rating / 2}
                      precision={0.1}
                      readOnly
                      size="large"
                      icon={<Star sx={animeInfoStyles.starIcon} />}
                      emptyIcon={<StarBorder sx={animeInfoStyles.starIcon} />}
                    />
                    <Typography variant="h6" sx={animeInfoStyles.ratingText}>
                      {anime.rating}/10
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={animeInfoStyles.stats}>
                    {t('anime_episodes_total_episodes', {
                      count: anime.totalEpisodes
                    })}{' '}
                    •{' '}
                    {t('anime_episodes_total_seasons', {
                      count: anime.totalSeasons
                    })}{' '}
                    • {formatDuration(anime.duration)}
                  </Typography>
                </Box>

                {/* Жанры и темы */}
                <Box>
                  <Typography variant="body2" sx={animeInfoStyles.label}>
                    {t('anime_genres')}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
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

                <Box>
                  <Typography variant="body2" sx={animeInfoStyles.label}>
                    {t('anime_themes')}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {anime.themes.map((theme) => (
                      <Chip
                        key={theme}
                        label={theme}
                        size="small"
                        variant="outlined"
                        sx={animeInfoStyles.themeChip}
                      />
                    ))}
                  </Stack>
                </Box>

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
