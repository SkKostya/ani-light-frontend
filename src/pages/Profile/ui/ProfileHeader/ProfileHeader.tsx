import { Edit } from '@mui/icons-material';
import { Avatar, Box, Button, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { ProfileStats, UserProfile } from '../../types';
import {
  avatarContainerStyles,
  avatarStyles,
  bioStyles,
  containerStyles,
  contentStyles,
  editButtonStyles,
  infoContainerStyles,
  levelContainerStyles,
  levelStyles,
  progressBarStyles,
  progressFillStyles,
  statItemStyles,
  statLabelStyles,
  statValueStyles,
  statsRowStyles,
  usernameStyles
} from './ProfileHeader.styles';

interface ProfileHeaderProps {
  profile: UserProfile;
  stats: ProfileStats;
  onEditAvatar?: () => void;
}

/**
 * Компонент заголовка профиля с аватаром, информацией и статистикой
 */
const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  profile,
  stats,
  onEditAvatar
}) => {
  const { t } = useTranslation();

  const progressPercentage = (stats.experience / stats.nextLevelExp) * 100;

  return (
    <Box sx={containerStyles}>
      <Box sx={contentStyles}>
        {/* Аватар */}
        <Box sx={avatarContainerStyles}>
          <Avatar
            src={profile.avatar}
            alt={profile.username}
            sx={avatarStyles}
          />
          <Button
            sx={editButtonStyles}
            onClick={onEditAvatar}
            title={t('profile_avatar_edit')}
          >
            <Edit fontSize="small" />
          </Button>
        </Box>

        {/* Информация о пользователе */}
        <Box sx={infoContainerStyles}>
          <Typography variant="h4" sx={usernameStyles}>
            {profile.username}
          </Typography>

          {profile.bio && <Typography sx={bioStyles}>{profile.bio}</Typography>}

          {/* Статистика */}
          <Box sx={statsRowStyles}>
            <Box sx={statItemStyles}>
              <Typography sx={statValueStyles}>{stats.watched}</Typography>
              <Typography sx={statLabelStyles}>
                {t('profile_stats_watched')}
              </Typography>
            </Box>

            <Box sx={statItemStyles}>
              <Typography sx={statValueStyles}>{stats.watching}</Typography>
              <Typography sx={statLabelStyles}>
                {t('profile_stats_watching')}
              </Typography>
            </Box>

            <Box sx={statItemStyles}>
              <Typography sx={statValueStyles}>{stats.wantToWatch}</Typography>
              <Typography sx={statLabelStyles}>
                {t('profile_stats_want_to_watch')}
              </Typography>
            </Box>

            <Box sx={statItemStyles}>
              <Typography sx={statValueStyles}>{stats.favorites}</Typography>
              <Typography sx={statLabelStyles}>
                {t('profile_stats_favorites')}
              </Typography>
            </Box>
          </Box>

          {/* Уровень и опыт */}
          <Box sx={levelContainerStyles}>
            <Typography sx={levelStyles}>
              {t('profile_level')} {stats.level} • {stats.experience} /{' '}
              {stats.nextLevelExp} {t('profile_experience')}
            </Typography>
            <Box sx={progressBarStyles}>
              <Box
                sx={progressFillStyles}
                style={{ width: `${progressPercentage}%` }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileHeader;
