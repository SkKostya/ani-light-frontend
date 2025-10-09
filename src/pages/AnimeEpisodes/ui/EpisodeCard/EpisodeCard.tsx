import { Box, Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { AnimeEpisode, OVAEpisode } from '../../types';
import { episodeCardStyles } from './EpisodeCard.styles';

interface EpisodeCardProps {
  episode: AnimeEpisode | OVAEpisode;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  const { t } = useTranslation();

  const episodeNumber = 'episodeNumber' in episode ? episode.episodeNumber : 1;

  return (
    <Card
      sx={{
        ...episodeCardStyles.card,
        ...(episode.isWatched && episodeCardStyles.watchedCard)
      }}
    >
      <Box sx={episodeCardStyles.content}>
        <Typography variant="h4" sx={episodeCardStyles.episodeNumber}>
          {episodeNumber}
        </Typography>
        <Typography
          variant="body2"
          sx={episodeCardStyles.episodeLabel}
          className="episode-label"
        >
          {t('anime_episode_series')}
        </Typography>
      </Box>
    </Card>
  );
};

export default EpisodeCard;
