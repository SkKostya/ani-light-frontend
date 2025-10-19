import {
  PlayArrow as PlayIcon,
  Schedule as ScheduleIcon
} from '@mui/icons-material';
import { Box, Button, Card, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { ImageWithFallback } from '@/shared/ui';

import { nextEpisodeCardStyles } from './NextEpisodeCard.styles';
import type { NextEpisodeCardProps } from './NextEpisodeCard.types';

const NextEpisodeCard: React.FC<NextEpisodeCardProps> = ({
  episode,
  onPlay
}) => {
  const { t } = useTranslation();

  const handlePlay = () => {
    onPlay?.(episode);
  };

  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours}ч ${remainingMinutes}м`;
    }
    return `${minutes}м`;
  };

  const isNewEpisode = () => {
    // Проверяем, является ли эпизод новым (вышел недавно)
    const episodeDate = new Date(episode.next_episode.created_at || '');
    const now = new Date();
    const daysDiff =
      (now.getTime() - episodeDate.getTime()) / (1000 * 3600 * 24);
    return daysDiff <= 7; // Новый эпизод, если вышел в течение недели
  };

  return (
    <Card sx={nextEpisodeCardStyles.card} onClick={handlePlay}>
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

        {/* Бейдж нового эпизода */}
        {isNewEpisode() && (
          <Box sx={nextEpisodeCardStyles.newEpisodeBadge}>
            {t('anime_new_episode')}
          </Box>
        )}
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

        {/* Прогресс-бар (если есть информация о прогрессе) */}
        <Box sx={nextEpisodeCardStyles.progressBar}>
          <Box sx={nextEpisodeCardStyles.progressFill} />
        </Box>
        <Typography sx={nextEpisodeCardStyles.progressText}>
          {t('anime_ready_to_watch')}
        </Typography>

        {/* Кнопки действий */}
        <Box sx={nextEpisodeCardStyles.actionButtons}>
          <Button
            variant="contained"
            startIcon={<PlayIcon />}
            onClick={handlePlay}
            sx={{
              ...nextEpisodeCardStyles.actionButton,
              ...nextEpisodeCardStyles.primaryButton
            }}
          >
            {t('anime_watch_now')}
          </Button>
          <Button
            variant="outlined"
            onClick={(e) => {
              e.stopPropagation();
              // TODO: Добавить функционал "Добавить в избранное"
            }}
            sx={{
              ...nextEpisodeCardStyles.actionButton,
              ...nextEpisodeCardStyles.secondaryButton
            }}
          >
            {t('anime_add_to_favorites')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default NextEpisodeCard;
