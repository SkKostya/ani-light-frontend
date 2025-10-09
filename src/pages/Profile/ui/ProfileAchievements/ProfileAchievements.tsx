import { CheckCircle, Lock } from '@mui/icons-material';
import { Box, Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { Achievement } from '../../types';
import {
  checkIconStyles,
  containerStyles,
  descriptionStyles,
  gridStyles,
  lockIconStyles,
  lockedCardStyles,
  lockedIconStyles,
  progressBarStyles,
  progressContainerStyles,
  progressFillStyles,
  progressTextStyles,
  titleStyles,
  titleTextStyles,
  unlockedCardStyles,
  unlockedDateStyles,
  unlockedIconStyles
} from './ProfileAchievements.styles';

interface ProfileAchievementsProps {
  achievements: Achievement[];
}

/**
 * Компонент достижений профиля
 */
const ProfileAchievements: React.FC<ProfileAchievementsProps> = ({
  achievements
}) => {
  const { t } = useTranslation();

  const getCardStyles = (achievement: Achievement) => {
    return achievement.unlocked ? unlockedCardStyles : lockedCardStyles;
  };

  const getIconStyles = (achievement: Achievement) => {
    return achievement.unlocked ? unlockedIconStyles : lockedIconStyles;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" sx={titleStyles}>
        {t('profile_achievements_title')}
      </Typography>

      <Box sx={gridStyles}>
        {achievements.map((achievement) => (
          <Card key={achievement.id} sx={getCardStyles(achievement)}>
            {/* Иконка блокировки или галочки */}
            {achievement.unlocked ? (
              <CheckCircle sx={checkIconStyles} />
            ) : (
              <Lock sx={lockIconStyles} />
            )}

            {/* Иконка достижения */}
            <Box sx={getIconStyles(achievement)}>{achievement.icon}</Box>

            {/* Название и описание */}
            <Typography sx={titleTextStyles}>{achievement.title}</Typography>

            <Typography sx={descriptionStyles}>
              {achievement.description}
            </Typography>

            {/* Прогресс для незаблокированных достижений */}
            {!achievement.unlocked && achievement.progress !== undefined && (
              <Box sx={progressContainerStyles}>
                <Box sx={progressBarStyles}>
                  <Box
                    sx={progressFillStyles}
                    style={{
                      width: `${(achievement.progress / (achievement.maxProgress || 1)) * 100}%`
                    }}
                  />
                </Box>
                <Typography sx={progressTextStyles}>
                  {t('profile_achievements_progress', {
                    current: achievement.progress,
                    total: achievement.maxProgress
                  })}
                </Typography>
              </Box>
            )}

            {/* Дата разблокировки */}
            {achievement.unlocked && achievement.unlockedDate && (
              <Typography sx={unlockedDateStyles}>
                {t('profile_achievements_unlocked')}:{' '}
                {formatDate(achievement.unlockedDate)}
              </Typography>
            )}
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProfileAchievements;
