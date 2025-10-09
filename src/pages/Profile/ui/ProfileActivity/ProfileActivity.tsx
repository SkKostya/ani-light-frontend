import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { RecentActivity } from '../../types';
import {
  activityItemStyles,
  activityTextStyles,
  animeTitleStyles,
  containerStyles,
  contentStyles,
  emptyDescriptionStyles,
  emptyIconStyles,
  emptyStateStyles,
  emptyTitleStyles,
  getIconStyles,
  timestampStyles,
  titleStyles
} from './ProfileActivity.styles';

interface ProfileActivityProps {
  activities: RecentActivity[];
}

/**
 * Компонент недавней активности профиля
 */
const ProfileActivity: React.FC<ProfileActivityProps> = ({ activities }) => {
  const { t } = useTranslation();

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'watched':
        return '👀';
      case 'added_to':
        return '➕';
      case 'rated':
        return '⭐';
      case 'reviewed':
        return '✍️';
      default:
        return '📝';
    }
  };

  const getActivityText = (activity: RecentActivity) => {
    const { type, animeTitle, details } = activity;

    switch (type) {
      case 'watched':
        return (
          <>
            {t('profile_activity_watched')}{' '}
            <Typography component="span" sx={animeTitleStyles}>
              {animeTitle}
            </Typography>
            {details && ` • ${details}`}
          </>
        );
      case 'added_to':
        return (
          <>
            {t('profile_activity_added_to')}{' '}
            <Typography component="span" sx={animeTitleStyles}>
              {animeTitle}
            </Typography>
            {details && ` ${details}`}
          </>
        );
      case 'rated':
        return (
          <>
            {t('profile_activity_rated')}{' '}
            <Typography component="span" sx={animeTitleStyles}>
              {animeTitle}
            </Typography>
            {details && ` • ${details}`}
          </>
        );
      case 'reviewed':
        return (
          <>
            {t('profile_activity_reviewed')}{' '}
            <Typography component="span" sx={animeTitleStyles}>
              {animeTitle}
            </Typography>
            {details && ` • ${details}`}
          </>
        );
      default:
        return animeTitle;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) {
      return t('profile_activity_just_now');
    } else if (diffInHours < 24) {
      return t('profile_activity_hours_ago', { count: diffInHours });
    } else {
      const diffInDays = Math.floor(diffInHours / 24);
      return t('profile_activity_days_ago', { count: diffInDays });
    }
  };

  if (activities.length === 0) {
    return (
      <Box sx={containerStyles}>
        <Typography variant="h5" sx={titleStyles}>
          {t('profile_recent_activity')}
        </Typography>

        <Box sx={emptyStateStyles}>
          <Typography sx={emptyIconStyles}>📝</Typography>
          <Typography sx={emptyTitleStyles}>
            {t('profile_activity_empty_title')}
          </Typography>
          <Typography sx={emptyDescriptionStyles}>
            {t('profile_activity_empty_description')}
          </Typography>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" sx={titleStyles}>
        {t('profile_recent_activity')}
      </Typography>

      {activities.map((activity) => (
        <Box key={activity.id} sx={activityItemStyles}>
          <Box sx={getIconStyles(activity.type)}>
            {getActivityIcon(activity.type)}
          </Box>

          <Box sx={contentStyles}>
            <Typography sx={activityTextStyles}>
              {getActivityText(activity)}
            </Typography>

            <Typography sx={timestampStyles}>
              {formatTimestamp(activity.timestamp)}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProfileActivity;
