import { Box, Card, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LocalizedLink } from '@/shared/ui';

import { episodeCardStyles } from './EpisodeCard.styles';

interface EpisodeCardProps {
  episode: {
    number: number;
    isWatched: boolean;
  };
  href: string;
}

const EpisodeCard = ({ episode, href }: EpisodeCardProps) => {
  const { t } = useTranslation();

  return (
    <LocalizedLink to={href}>
      <Card
        sx={{
          ...episodeCardStyles.card,
          ...(episode.isWatched && episodeCardStyles.watchedCard)
        }}
      >
        <Box sx={episodeCardStyles.content}>
          <Typography variant="h4" sx={episodeCardStyles.episodeNumber}>
            {episode.number}
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
    </LocalizedLink>
  );
};

export default EpisodeCard;
