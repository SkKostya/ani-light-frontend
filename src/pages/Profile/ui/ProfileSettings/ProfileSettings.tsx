import {
  Delete,
  Download,
  Notifications,
  Palette,
  PrivacyTip,
  Save
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  FormControlLabel,
  Switch,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ProfileSettings as ProfileSettingsType } from '../../types';
import {
  buttonStyles,
  cardStyles,
  containerStyles,
  dangerButtonStyles,
  iconStyles,
  sectionStyles,
  sectionTitleStyles,
  settingDescriptionStyles,
  settingInfoStyles,
  settingItemStyles,
  settingTitleStyles,
  switchStyles,
  titleStyles
} from './ProfileSettings.styles';

interface ProfileSettingsProps {
  settings: ProfileSettingsType;
  onSave?: (settings: ProfileSettingsType) => void;
  onExportData?: () => void;
  onDeleteAccount?: () => void;
}

/**
 * Компонент настроек профиля
 */
const ProfileSettings: React.FC<ProfileSettingsProps> = ({
  settings,
  onSave,
  onExportData,
  onDeleteAccount
}) => {
  const { t } = useTranslation();
  const [localSettings, setLocalSettings] =
    useState<ProfileSettingsType>(settings);

  const handleSettingChange = (path: string, value: any) => {
    setLocalSettings((prev) => {
      const newSettings = { ...prev };
      const keys = path.split('.');
      let current = newSettings as any;

      for (let i = 0; i < keys.length - 1; i++) {
        current = current[keys[i]];
      }

      current[keys[keys.length - 1]] = value;
      return newSettings;
    });
  };

  const handleSave = () => {
    onSave?.(localSettings);
  };

  return (
    <Box sx={containerStyles}>
      <Typography variant="h5" sx={titleStyles}>
        {t('profile_settings_title')}
      </Typography>

      <Card sx={cardStyles}>
        {/* Настройки темы и языка */}
        <Box sx={sectionStyles}>
          <Typography sx={sectionTitleStyles}>
            <Palette sx={iconStyles} />
            {t('profile_settings_theme')} & {t('profile_settings_language')}
          </Typography>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_theme')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_theme_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.theme === 'dark'}
                  onChange={(e) =>
                    handleSettingChange(
                      'theme',
                      e.target.checked ? 'dark' : 'light'
                    )
                  }
                  sx={switchStyles}
                />
              }
              label={t('profile_settings_dark_theme')}
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_language')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_language_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.language === 'en'}
                  onChange={(e) =>
                    handleSettingChange(
                      'language',
                      e.target.checked ? 'en' : 'ru'
                    )
                  }
                  sx={switchStyles}
                />
              }
              label={t('profile_settings_english')}
            />
          </Box>
        </Box>

        {/* Настройки уведомлений */}
        <Box sx={sectionStyles}>
          <Typography sx={sectionTitleStyles}>
            <Notifications sx={iconStyles} />
            {t('profile_settings_notifications')}
          </Typography>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_email_notifications')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_email_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.notifications.email}
                  onChange={(e) =>
                    handleSettingChange('notifications.email', e.target.checked)
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_push_notifications')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_push_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.notifications.push}
                  onChange={(e) =>
                    handleSettingChange('notifications.push', e.target.checked)
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_new_episodes')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_new_episodes_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.notifications.newEpisodes}
                  onChange={(e) =>
                    handleSettingChange(
                      'notifications.newEpisodes',
                      e.target.checked
                    )
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_recommendations')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_recommendations_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.notifications.recommendations}
                  onChange={(e) =>
                    handleSettingChange(
                      'notifications.recommendations',
                      e.target.checked
                    )
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>
        </Box>

        {/* Настройки приватности */}
        <Box sx={sectionStyles}>
          <Typography sx={sectionTitleStyles}>
            <PrivacyTip sx={iconStyles} />
            {t('profile_settings_privacy')}
          </Typography>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_show_stats')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_show_stats_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.privacy.showStats}
                  onChange={(e) =>
                    handleSettingChange('privacy.showStats', e.target.checked)
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_show_activity')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_show_activity_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.privacy.showActivity}
                  onChange={(e) =>
                    handleSettingChange(
                      'privacy.showActivity',
                      e.target.checked
                    )
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_show_favorites')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_show_favorites_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.privacy.showFavorites}
                  onChange={(e) =>
                    handleSettingChange(
                      'privacy.showFavorites',
                      e.target.checked
                    )
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>

          <Box sx={settingItemStyles}>
            <Box sx={settingInfoStyles}>
              <Typography sx={settingTitleStyles}>
                {t('profile_settings_show_watchlist')}
              </Typography>
              <Typography sx={settingDescriptionStyles}>
                {t('profile_settings_show_watchlist_description')}
              </Typography>
            </Box>
            <FormControlLabel
              control={
                <Switch
                  checked={localSettings.privacy.showWatchList}
                  onChange={(e) =>
                    handleSettingChange(
                      'privacy.showWatchList',
                      e.target.checked
                    )
                  }
                  sx={switchStyles}
                />
              }
              label=""
            />
          </Box>
        </Box>

        {/* Действия */}
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 3 }}>
          <Button startIcon={<Save />} onClick={handleSave} sx={buttonStyles}>
            {t('profile_settings_save')}
          </Button>

          <Button
            startIcon={<Download />}
            onClick={onExportData}
            sx={buttonStyles}
          >
            {t('profile_settings_export_data')}
          </Button>

          <Button
            startIcon={<Delete />}
            onClick={onDeleteAccount}
            sx={dangerButtonStyles}
          >
            {t('profile_settings_delete_account')}
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default ProfileSettings;
