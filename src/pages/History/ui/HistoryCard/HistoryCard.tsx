import { Box, LinearProgress, Typography } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';

import type { HistoryCardProps } from '../../types';
import { formatDuration, formatTime } from '../../utils';
import { historyCardStyles } from './HistoryCard.styles';

const HistoryCard: React.FC<HistoryCardProps> = ({ entry, onClick }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    onClick?.(entry);
  };

  const progressPercentage = Math.round(entry.progress * 100);

  return (
    <Box
      sx={historyCardStyles.container}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      {/* Время просмотра */}
      <Box sx={historyCardStyles.timeContainer}>
        <Typography variant="caption" sx={historyCardStyles.timeText}>
          {formatTime(entry.watchedAt)}
        </Typography>
      </Box>

      {/* Основной контент */}
      <Box sx={historyCardStyles.contentContainer}>
        {/* Изображение аниме */}
        <Box sx={historyCardStyles.imageContainer}>
          <Box
            component="img"
            src={entry.animeImageUrl}
            alt={entry.animeTitle}
            sx={historyCardStyles.animeImage}
          />
        </Box>

        {/* Информация о серии */}
        <Box sx={historyCardStyles.infoContainer}>
          {/* Название аниме */}
          <Typography variant="h6" sx={historyCardStyles.animeTitle}>
            {entry.animeTitle}
          </Typography>

          {/* Сезон и серия */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={historyCardStyles.episodeInfo}
          >
            {t('history_season_episode', {
              season: entry.season,
              episode: entry.episode
            })}
          </Typography>

          {/* Название серии (если есть) */}
          {entry.episodeTitle && (
            <Typography variant="body2" sx={historyCardStyles.episodeTitle}>
              {entry.episodeTitle}
            </Typography>
          )}

          {/* Время просмотра */}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={historyCardStyles.durationInfo}
          >
            {formatDuration(entry.watchedDuration)} /{' '}
            {formatDuration(entry.totalDuration)}
          </Typography>
        </Box>
      </Box>

      {/* Прогресс-бар */}
      <Box sx={historyCardStyles.progressContainer}>
        <LinearProgress
          variant="determinate"
          value={progressPercentage}
          sx={historyCardStyles.progressBar}
        />
        <Typography variant="caption" sx={historyCardStyles.progressText}>
          {progressPercentage}%
        </Typography>
      </Box>
    </Box>
  );
};

export { HistoryCard };
