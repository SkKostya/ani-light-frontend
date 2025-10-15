import {
  Fullscreen,
  FullscreenExit,
  Pause,
  PictureInPicture,
  PlayArrow,
  Settings,
  SkipNext,
  SkipPrevious,
  VolumeOff,
  VolumeUp
} from '@mui/icons-material';
import { Box, IconButton, Slider, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { SettingsPanel } from './SettingsPanel';
import { videoControlsStyles } from './VideoControls.styles';

interface VideoControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  isFullscreen: boolean;
  isPipSupported: boolean;
  quality: string;
  playbackRate: number;
  onPlayPause: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onMuteToggle: () => void;
  onFullscreenToggle: () => void;
  onPipToggle: () => void;
  onQualityChange: (quality: string) => void;
  onPlaybackRateChange: (rate: number) => void;
  onSkipForward: () => void;
  onSkipBackward: () => void;
  qualityOptions: Array<{ name: string; url: string; default?: boolean }>;
}

export const VideoControls = ({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  isFullscreen,
  isPipSupported,
  quality,
  playbackRate,
  onPlayPause,
  onSeek,
  onVolumeChange,
  onMuteToggle,
  onFullscreenToggle,
  onPipToggle,
  onQualityChange,
  onPlaybackRateChange,
  onSkipForward,
  onSkipBackward,
  qualityOptions
}: VideoControlsProps) => {
  const { t } = useTranslation();
  const [showSettings, setShowSettings] = useState(false);
  const [, setIsHovered] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);

  // Форматирование времени
  const formatTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Обработка клика по прогресс-бару
  const handleProgressClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const percentage = clickX / rect.width;
    const newTime = percentage * duration;
    onSeek(newTime);
  };

  // Обработка изменения громкости
  const handleVolumeChange = (_: Event, newValue: number | number[]) => {
    onVolumeChange(newValue as number);
  };

  // Закрытие настроек при клике вне панели
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        setShowSettings(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box
      sx={videoControlsStyles.controlsContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Прогресс-бар */}
      <Box sx={videoControlsStyles.progressContainer}>
        <Box sx={videoControlsStyles.progressBar} onClick={handleProgressClick}>
          <Box
            sx={{
              ...videoControlsStyles.progressFill,
              width: `${(currentTime / duration) * 100}%`
            }}
          />
          <Box
            sx={{
              ...videoControlsStyles.progressThumb,
              left: `${(currentTime / duration) * 100}%`
            }}
          />
        </Box>
      </Box>

      {/* Основные контролы */}
      <Box sx={videoControlsStyles.mainControls}>
        {/* Левая группа */}
        <Box sx={videoControlsStyles.controlsGroup}>
          <IconButton
            onClick={onPlayPause}
            sx={videoControlsStyles.controlButton}
            aria-label={
              isPlaying ? t('anime_player_pause') : t('anime_player_play')
            }
          >
            {isPlaying ? <Pause /> : <PlayArrow />}
          </IconButton>

          <IconButton
            onClick={onSkipBackward}
            sx={videoControlsStyles.controlButton}
            aria-label={t('anime_player_rewind_10')}
          >
            <SkipPrevious />
          </IconButton>

          <IconButton
            onClick={onSkipForward}
            sx={videoControlsStyles.controlButton}
            aria-label={t('anime_player_forward_10')}
          >
            <SkipNext />
          </IconButton>

          {/* Время */}
          <Typography sx={videoControlsStyles.timeText}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </Typography>
        </Box>

        {/* Правая группа */}
        <Box sx={videoControlsStyles.controlsGroup}>
          {/* Громкость */}
          <Box sx={videoControlsStyles.volumeContainer}>
            <IconButton
              onClick={onMuteToggle}
              sx={videoControlsStyles.controlButton}
              aria-label={
                isMuted
                  ? t('anime_player_volume_on')
                  : t('anime_player_volume_off')
              }
            >
              {isMuted || volume === 0 ? <VolumeOff /> : <VolumeUp />}
            </IconButton>
            <Slider
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              min={0}
              max={1}
              step={0.01}
              sx={videoControlsStyles.volumeSlider}
              size="small"
            />
          </Box>

          {/* Настройки */}
          <Box sx={videoControlsStyles.settingsContainer} ref={settingsRef}>
            <IconButton
              onClick={() => setShowSettings(!showSettings)}
              sx={{
                ...videoControlsStyles.controlButton,
                ...(showSettings && videoControlsStyles.activeButton)
              }}
              aria-label={t('anime_player_settings')}
            >
              <Settings />
            </IconButton>
            {showSettings && (
              <SettingsPanel
                quality={quality}
                playbackRate={playbackRate}
                qualityOptions={qualityOptions}
                onQualityChange={onQualityChange}
                onPlaybackRateChange={onPlaybackRateChange}
                onClose={() => setShowSettings(false)}
              />
            )}
          </Box>

          {/* PiP */}
          {isPipSupported && (
            <IconButton
              onClick={onPipToggle}
              sx={videoControlsStyles.controlButton}
              aria-label={t('anime_player_picture_in_picture')}
            >
              <PictureInPicture />
            </IconButton>
          )}

          {/* Полноэкранный режим */}
          <IconButton
            onClick={onFullscreenToggle}
            sx={videoControlsStyles.controlButton}
            aria-label={
              isFullscreen
                ? t('anime_player_exit_fullscreen')
                : t('anime_player_fullscreen')
            }
          >
            {isFullscreen ? <FullscreenExit /> : <Fullscreen />}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};
