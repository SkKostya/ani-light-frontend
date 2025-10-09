import { Pause, PlayArrow } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { animePlayerStyles } from './AnimePlayer.styles';

const AnimePlayer = () => {
  const { t } = useTranslation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={animePlayerStyles.container}>
      {/* Placeholder для плеера */}
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

          {/* Кнопка воспроизведения */}
          <Button
            variant="contained"
            size="large"
            onClick={handlePlayPause}
            startIcon={isPlaying ? <Pause /> : <PlayArrow />}
            sx={animePlayerStyles.playButton}
          >
            {isPlaying ? t('anime_player_pause') : t('anime_player_play')}
          </Button>
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
};

export default AnimePlayer;
