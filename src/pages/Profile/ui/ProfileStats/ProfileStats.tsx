import { Box, Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { ProfileStats as ProfileStatsType } from '../../types';
import {
  cardStyles,
  containerStyles,
  descriptionStyles,
  getCardIconStyles,
  getProgressFillStyles,
  gridStyles,
  labelStyles,
  progressBarStyles,
  progressContainerStyles,
  progressTextStyles,
  titleStyles,
  valueStyles
} from './ProfileStats.styles';

interface ProfileStatsProps {
  stats: ProfileStatsType;
}

/**
 * Компонент статистики профиля с красивыми карточками метрик
 */
const ProfileStats: React.FC<ProfileStatsProps> = ({ stats }) => {
  const { t } = useTranslation();

  // Функция для вычисления процента прогресса
  const getProgressPercentage = (type: string): number => {
    switch (type) {
      case 'watched':
        return stats.goalWatched
          ? Math.min(Math.round((stats.watched / stats.goalWatched) * 100), 100)
          : 0;
      case 'episodes':
        return stats.goalEpisodes
          ? Math.min(
              Math.round((stats.totalEpisodes / stats.goalEpisodes) * 100),
              100
            )
          : 0;
      case 'hours':
        return stats.goalHours
          ? Math.min(
              Math.round((stats.totalHours / stats.goalHours) * 100),
              100
            )
          : 0;
      default:
        return 0;
    }
  };

  const statsData = [
    {
      type: 'watched',
      icon: '📺',
      value: stats.watched,
      label: t('profile_stats_watched'),
      description:
        t('profile_stats_total_episodes') + `: ${stats.totalEpisodes}`
    },
    {
      type: 'watching',
      icon: '👀',
      value: stats.watching,
      label: t('profile_stats_watching'),
      description: t('profile_stats_watching_now')
    },
    {
      type: 'wantToWatch',
      icon: '📝',
      value: stats.wantToWatch,
      label: t('profile_stats_want_to_watch'),
      description: t('profile_stats_planned')
    },
    {
      type: 'favorites',
      icon: '❤️',
      value: stats.favorites,
      label: t('profile_stats_favorites'),
      description: t('profile_stats_favorite_anime')
    },
    {
      type: 'episodes',
      icon: '🎬',
      value: stats.totalEpisodes,
      label: t('profile_stats_total_episodes'),
      description: t('profile_stats_total_episodes_watched')
    },
    {
      type: 'hours',
      icon: '⏰',
      value: stats.totalHours,
      label: t('profile_stats_total_hours'),
      description: t('profile_stats_watch_days', {
        count: stats.daysWatching,
        days: t(
          `profile_stats_days_${stats.daysWatching === 1 ? 1 : stats.daysWatching < 5 ? 2 : 5}`
        )
      })
    }
  ];

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" sx={titleStyles}>
        {t('profile_stats_title')}
      </Typography>

      <Box sx={gridStyles}>
        {statsData.map((stat, index) => (
          <Card key={index} sx={cardStyles}>
            <Box sx={getCardIconStyles(stat.type)}>{stat.icon}</Box>

            <Typography sx={valueStyles}>
              {stat.value.toLocaleString()}
            </Typography>

            <Typography sx={labelStyles}>{stat.label}</Typography>

            <Typography sx={descriptionStyles}>{stat.description}</Typography>

            {/* Прогресс-бар для метрик с целями */}
            {(stat.type === 'watched' ||
              stat.type === 'episodes' ||
              stat.type === 'hours') &&
              getProgressPercentage(stat.type) > 0 && (
                <Box sx={progressContainerStyles}>
                  <Box sx={progressBarStyles}>
                    <Box
                      sx={getProgressFillStyles(stat.type)}
                      style={{ width: `${getProgressPercentage(stat.type)}%` }}
                    />
                  </Box>
                  <Typography sx={progressTextStyles}>
                    {t('profile_stats_goal_percent', {
                      percent: getProgressPercentage(stat.type)
                    })}
                  </Typography>
                </Box>
              )}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileStats;
