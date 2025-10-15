import { Close } from '@mui/icons-material';
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { settingsPanelStyles } from './SettingsPanel.styles';

interface SettingsPanelProps {
  quality: string;
  playbackRate: number;
  qualityOptions: Array<{ name: string; url: string; default?: boolean }>;
  onQualityChange: (quality: string) => void;
  onPlaybackRateChange: (rate: number) => void;
  onClose: () => void;
}

export const SettingsPanel = ({
  quality,
  playbackRate,
  qualityOptions,
  onQualityChange,
  onPlaybackRateChange,
  onClose
}: SettingsPanelProps) => {
  const { t } = useTranslation();

  const playbackRates = [
    { value: 0.5, label: t('anime_player_speed_0_5x') },
    { value: 0.75, label: t('anime_player_speed_0_75x') },
    { value: 1, label: t('anime_player_speed_1x') },
    { value: 1.25, label: t('anime_player_speed_1_25x') },
    { value: 1.5, label: t('anime_player_speed_1_5x') },
    { value: 2, label: t('anime_player_speed_2x') }
  ];

  return (
    <Box sx={settingsPanelStyles.panel}>
      <Box sx={settingsPanelStyles.header}>
        <Typography variant="h6" sx={settingsPanelStyles.title}>
          {t('anime_player_settings')}
        </Typography>
        <IconButton
          onClick={onClose}
          sx={settingsPanelStyles.closeButton}
          size="small"
        >
          <Close />
        </IconButton>
      </Box>

      <Box sx={settingsPanelStyles.content}>
        {/* Качество видео */}
        <Box sx={settingsPanelStyles.settingItem}>
          <Typography variant="body2" sx={settingsPanelStyles.settingLabel}>
            {t('anime_player_quality')}
          </Typography>
          <FormControl size="small" sx={settingsPanelStyles.select}>
            <InputLabel>{t('anime_player_quality')}</InputLabel>
            <Select
              value={quality}
              onChange={(e) => onQualityChange(e.target.value)}
              label={t('anime_player_quality')}
            >
              {qualityOptions.map((option) => (
                <MenuItem key={option.name} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        {/* Скорость воспроизведения */}
        <Box sx={settingsPanelStyles.settingItem}>
          <Typography variant="body2" sx={settingsPanelStyles.settingLabel}>
            {t('anime_player_speed')}
          </Typography>
          <FormControl size="small" sx={settingsPanelStyles.select}>
            <InputLabel>{t('anime_player_speed')}</InputLabel>
            <Select
              value={playbackRate}
              onChange={(e) => onPlaybackRateChange(Number(e.target.value))}
              label={t('anime_player_speed')}
            >
              {playbackRates.map((rate) => (
                <MenuItem key={rate.value} value={rate.value}>
                  {rate.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
