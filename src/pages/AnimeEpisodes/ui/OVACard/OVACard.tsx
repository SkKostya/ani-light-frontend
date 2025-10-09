import { CheckCircle, PlayArrow, Schedule } from '@mui/icons-material';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

import { ImageWithFallback } from '@/shared/ui';

import type { OVAEpisode } from '../../types';
import { ovaCardStyles } from './OVACard.styles';

interface OVACardProps {
  episode: OVAEpisode;
}

const OVACard = ({ episode }: OVACardProps) => {
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    if (hours > 0) {
      return `${hours}:${remainingMinutes.toString().padStart(2, '0')}`;
    }
    return `${minutes}:00`;
  };

  const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('ru-RU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  const getStatusIcon = () => {
    if (episode.isWatched) {
      return <CheckCircle sx={ovaCardStyles.statusIcon} />;
    }
    if (episode.progress && episode.progress > 0) {
      return <Schedule sx={ovaCardStyles.statusIcon} />;
    }
    return <PlayArrow sx={ovaCardStyles.statusIcon} />;
  };

  return (
    <Card sx={ovaCardStyles.card}>
      <Box sx={ovaCardStyles.mediaContainer}>
        <ImageWithFallback
          src={episode.thumbnail}
          alt={episode.title}
          sx={ovaCardStyles.media}
          fallbackIcon="🎬"
        />
        <Box sx={ovaCardStyles.overlay}>
          <IconButton
            sx={ovaCardStyles.playButton}
            size="small"
            color="primary"
          >
            <PlayArrow />
          </IconButton>
        </Box>
        <Box sx={ovaCardStyles.durationBadge}>
          <Typography variant="caption" sx={ovaCardStyles.durationText}>
            {formatDuration(episode.duration)}
          </Typography>
        </Box>
        <Box sx={ovaCardStyles.statusBadge}>{getStatusIcon()}</Box>
      </Box>

      <CardContent sx={ovaCardStyles.content}>
        <Box sx={ovaCardStyles.header}>
          <Typography variant="h6" sx={ovaCardStyles.title}>
            {episode.title}
          </Typography>
        </Box>

        <Typography variant="caption" sx={ovaCardStyles.airDate}>
          {formatDate(episode.airedAt)}
        </Typography>

        {episode.description && (
          <Typography variant="body2" sx={ovaCardStyles.description}>
            {episode.description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default OVACard;
