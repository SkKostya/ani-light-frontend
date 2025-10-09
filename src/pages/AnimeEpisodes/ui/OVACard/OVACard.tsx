import { CheckCircle, PlayArrow, Schedule } from '@mui/icons-material';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  LinearProgress,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { OVAEpisode } from '../../types';
import { ovaCardStyles } from './OVACard.styles';

interface OVACardProps {
  episode: OVAEpisode;
}

const OVACard = ({ episode }: OVACardProps) => {
  const { t } = useTranslation();

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

  const getStatusColor = () => {
    if (episode.isWatched) {
      return 'success';
    }
    if (episode.progress && episode.progress > 0) {
      return 'warning';
    }
    return 'default';
  };

  return (
    <Card sx={ovaCardStyles.card}>
      <Box sx={ovaCardStyles.mediaContainer}>
        <CardMedia
          component="img"
          image={episode.thumbnail}
          alt={episode.title}
          sx={ovaCardStyles.media}
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
        <Box sx={ovaCardStyles.ovaBadge}>
          <Typography variant="caption" sx={ovaCardStyles.ovaText}>
            OVA
          </Typography>
        </Box>
      </Box>

      <CardContent sx={ovaCardStyles.content}>
        <Box sx={ovaCardStyles.header}>
          <Typography variant="h6" sx={ovaCardStyles.title}>
            {episode.title}
          </Typography>
          <Chip
            label={
              episode.isWatched
                ? t('anime_episodes_watched')
                : t('anime_episodes_not_watched')
            }
            size="small"
            color={getStatusColor()}
            sx={ovaCardStyles.statusChip}
          />
        </Box>

        <Typography variant="caption" sx={ovaCardStyles.airDate}>
          {formatDate(episode.airedAt)}
        </Typography>

        {episode.description && (
          <Typography variant="body2" sx={ovaCardStyles.description}>
            {episode.description}
          </Typography>
        )}

        {episode.progress && episode.progress > 0 && !episode.isWatched && (
          <Box sx={ovaCardStyles.progressContainer}>
            <LinearProgress
              variant="determinate"
              value={episode.progress}
              sx={ovaCardStyles.progressBar}
            />
            <Typography variant="caption" sx={ovaCardStyles.progressText}>
              {Math.round(episode.progress)}%
            </Typography>
          </Box>
        )}

        {episode.watchedAt && (
          <Typography variant="caption" sx={ovaCardStyles.watchedDate}>
            {t('anime_episodes_watched_on', {
              date: formatDate(episode.watchedAt)
            })}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default OVACard;
