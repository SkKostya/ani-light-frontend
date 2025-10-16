import './anime-player.scss';

import { ErrorOutline, Refresh } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import ArtPlayer from 'artplayer';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

import { animePlayerStyles } from './AnimePlayer.styles';
import useInitPlayer from './hooks/useInitPlayer';
import useSkipNextActions from './hooks/useSkipNextActions';

interface AnimePlayerProps {
  videoUrl?: string;
  poster?: string;
  title?: string;
  quality?: Array<{
    name: string;
    url: string;
    default?: boolean;
  }>;
  onEnded?: () => void;
  opening: {
    start: number;
    stop: number;
  };
  ending: {
    start: number;
    stop: number;
  };
  onNextEpisode?: () => void;
}

const AnimePlayer = ({
  videoUrl,
  poster,
  title,
  quality = [],
  onEnded,
  opening,
  ending,
  onNextEpisode
}: AnimePlayerProps) => {
  const { t } = useTranslation();
  const playerRef = useRef<HTMLDivElement>(null);
  const artPlayerRef = useRef<ArtPlayer | null>(null);

  const {
    updateButtonsVisibility,
    handleSkipNextPosition,
    addButtonsToLayers
  } = useSkipNextActions({
    artPlayerRef: artPlayerRef,
    opening,
    ending,
    onNextEpisode
  });

  const { isLoading, hasError, errorMessage, showPlaceholder, handleRetry } =
    useInitPlayer({
      videoUrl,
      poster,
      title,
      quality,
      playerRef,
      artPlayerRef,
      updateButtonsVisibility,
      handleSkipNextPosition,
      addButtonsToLayers,
      onEnded
    });

  // Если нет URL видео, показываем placeholder
  if (showPlaceholder) {
    return (
      <Box sx={animePlayerStyles.container}>
        <Box sx={animePlayerStyles.playerPlaceholder}>
          <Box sx={animePlayerStyles.placeholderContent}>
            <Typography variant="h4" sx={animePlayerStyles.placeholderTitle}>
              {t('anime_player_placeholder_title')}
            </Typography>
            <Typography
              variant="body1"
              sx={animePlayerStyles.placeholderSubtitle}
            >
              {t('anime_player_placeholder_subtitle')}
            </Typography>
          </Box>

          {/* Декоративные элементы */}
          <Box sx={animePlayerStyles.decorativeElements}>
            <Box sx={animePlayerStyles.glowCircle1} />
            <Box sx={animePlayerStyles.glowCircle2} />
            <Box sx={animePlayerStyles.glowCircle3} />
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={animePlayerStyles.container}>
      {/* Контейнер для плеера */}
      <Box sx={animePlayerStyles.playerWrapper}>
        <div ref={playerRef} style={{ width: '100%', height: '100%' }} />
      </Box>

      {/* Overlay загрузки */}
      {isLoading && (
        <Box sx={animePlayerStyles.loadingOverlay}>
          <Box sx={animePlayerStyles.loadingContent}>
            <Box sx={animePlayerStyles.loadingSpinner} />
            <Typography variant="h6">{t('anime_player_loading')}</Typography>
          </Box>
        </Box>
      )}

      {/* Overlay ошибки */}
      {hasError && (
        <Box sx={animePlayerStyles.errorOverlay}>
          <Box sx={animePlayerStyles.errorContent}>
            <ErrorOutline sx={animePlayerStyles.errorIcon} />
            <Typography variant="h5" sx={animePlayerStyles.errorTitle}>
              {t('anime_player_error')}
            </Typography>
            <Typography variant="body1" sx={animePlayerStyles.errorMessage}>
              {errorMessage}
            </Typography>
            <Button
              variant="contained"
              onClick={handleRetry}
              startIcon={<Refresh />}
              sx={animePlayerStyles.retryButton}
            >
              {t('anime_player_retry')}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default AnimePlayer;
