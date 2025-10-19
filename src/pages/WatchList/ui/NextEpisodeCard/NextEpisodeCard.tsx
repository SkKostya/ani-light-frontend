import {
  PlayArrow as PlayIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/constants';
import { ImageWithFallback, LocalizedLink } from '@/shared/ui';

import { nextEpisodeCardStyles } from './NextEpisodeCard.styles';
import type { NextEpisodeCardProps } from './NextEpisodeCard.types';

const NextEpisodeCard: React.FC<NextEpisodeCardProps> = ({ episode }) => {
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

  return (
    <LocalizedLink
      to={
        episode.anime_release.sort_order > 0
          ? ROUTES.animeWithSeason(
              episode.anime.alias,
              String(episode.anime_release.sort_order),
              String(episode.next_episode.number)
            )
          : ROUTES.anime(
              episode.anime.alias,
              String(episode.next_episode.number)
            )
      }
    >
      <Card sx={nextEpisodeCardStyles.card}>
        {/* Контейнер изображения */}
        <Box sx={nextEpisodeCardStyles.imageContainer}>
          <ImageWithFallback
            src={episode.anime.image || ''}
            alt={episode.anime.name}
            sx={nextEpisodeCardStyles.animeImage}
          />

          {/* Оверлей с кнопкой воспроизведения */}
          <Box sx={nextEpisodeCardStyles.episodeOverlay}>
            <Box sx={nextEpisodeCardStyles.playButton}>
              <PlayIcon sx={{ fontSize: 32, color: 'white' }} />
            </Box>
          </Box>

          {/* Бейдж номера эпизода */}
          <Box sx={nextEpisodeCardStyles.episodeBadge}>
            {t('anime_episode_series')} {episode.next_episode.number}
          </Box>
        </Box>

        {/* Контент карточки */}
        <Box sx={nextEpisodeCardStyles.content}>
          {/* Название аниме */}
          <Typography sx={nextEpisodeCardStyles.animeTitle}>
            {episode.anime.name}
          </Typography>

          {/* Информация об эпизоде */}
          <Box sx={nextEpisodeCardStyles.episodeInfo}>
            <Box sx={nextEpisodeCardStyles.episodeNumber}>
              {t('anime_episode')} {episode.next_episode.number}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <ScheduleIcon
                sx={{ fontSize: 16, color: 'var(--color-text-secondary)' }}
              />
              <Typography sx={nextEpisodeCardStyles.episodeDuration}>
                {formatDuration(episode.next_episode.duration)}
              </Typography>
            </Box>
          </Box>

          <Typography sx={nextEpisodeCardStyles.progressText}>
            {t('anime_ready_to_watch')}
          </Typography>
        </Box>
      </Card>
    </LocalizedLink>
  );
};

export default NextEpisodeCard;
