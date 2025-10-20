import { Box, LinearProgress, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/constants';
import { LocalizedLink } from '@/shared/ui';

import type { HistoryCardProps } from '../../types';
import { formatTime } from '../../utils';
import { historyCardStyles } from './HistoryCard.styles';

const HistoryCard: React.FC<HistoryCardProps> = ({ entry, onClick }) => {
  const { t } = useTranslation();
  const [imageError, setImageError] = useState(false);

  const handleClick = () => {
    onClick?.(entry);
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const progressPercentage = Math.round(entry.progress * 100);

  return (
    <LocalizedLink
      to={
        entry.season > 0
          ? ROUTES.animeWithSeason(
              entry.alias,
              String(entry.season),
              String(entry.episode)
            )
          : ROUTES.anime(entry.alias, String(entry.episode))
      }
    >
      <Box
        sx={historyCardStyles.container}
        onClick={handleClick}
        role="button"
        tabIndex={0}
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
            {!imageError ? (
              <Box
                component="img"
                src={process.env.PUBLIC_ANILIBRIA_URL + entry.imageUrl}
                alt={entry.title}
                sx={historyCardStyles.animeImage}
                onError={handleImageError}
              />
            ) : (
              <Box
                sx={historyCardStyles.fallbackImage}
                className="fallback-image"
              >
                <Box
                  sx={historyCardStyles.fallbackIcon}
                  className="fallback-icon"
                >
                  🎬
                </Box>
              </Box>
            )}
          </Box>

          {/* Информация о серии */}
          <Box sx={historyCardStyles.infoContainer}>
            {/* Название аниме */}
            <Typography variant="h6" sx={historyCardStyles.animeTitle}>
              {entry.title}
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
          </Box>
        </Box>

        {/* Прогресс-бар */}
        <LinearProgress
          variant="determinate"
          value={progressPercentage}
          sx={historyCardStyles.progressBar}
        />
      </Box>
    </LocalizedLink>
  );
};

export { HistoryCard };
