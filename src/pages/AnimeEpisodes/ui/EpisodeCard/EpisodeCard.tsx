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

import type { AnimeEpisode, OVAEpisode } from '../../types';
import { episodeCardStyles } from './EpisodeCard.styles';

interface EpisodeCardProps {
  episode: AnimeEpisode | OVAEpisode;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
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
      return <CheckCircle sx={episodeCardStyles.statusIcon} />;
    }
    if (episode.progress && episode.progress > 0) {
      return <Schedule sx={episodeCardStyles.statusIcon} />;
    }
    return <PlayArrow sx={episodeCardStyles.statusIcon} />;
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
    <Card sx={episodeCardStyles.card}>
      <Box sx={episodeCardStyles.mediaContainer}>
        <CardMedia
          component="img"
          image={episode.thumbnail}
          alt={episode.title}
          sx={episodeCardStyles.media}
        />
        <Box sx={episodeCardStyles.overlay}>
          <IconButton
            sx={episodeCardStyles.playButton}
            size="small"
            color="primary"
          >
            <PlayArrow />
          </IconButton>
        </Box>
        <Box sx={episodeCardStyles.durationBadge}>
          <Typography variant="caption" sx={episodeCardStyles.durationText}>
            {formatDuration(episode.duration)}
          </Typography>
        </Box>
        <Box sx={episodeCardStyles.statusBadge}>{getStatusIcon()}</Box>
      </Box>

      <CardContent sx={episodeCardStyles.content}>
        <Box sx={episodeCardStyles.header}>
          <Typography variant="h6" sx={episodeCardStyles.title}>
            {'episodeNumber' in episode
              ? t('anime_episode_number', { number: episode.episodeNumber })
              : episode.title}
          </Typography>
          <Chip
            label={
              episode.isWatched
                ? t('anime_episodes_watched')
                : t('anime_episodes_not_watched')
            }
            size="small"
            color={getStatusColor()}
            sx={episodeCardStyles.statusChip}
          />
        </Box>

        {'episodeNumber' in episode && (
          <Typography variant="body2" sx={episodeCardStyles.episodeTitle}>
            {episode.title}
          </Typography>
        )}

        <Typography variant="caption" sx={episodeCardStyles.airDate}>
          {formatDate(episode.airedAt)}
        </Typography>

        {episode.description && (
          <Typography variant="body2" sx={episodeCardStyles.description}>
            {episode.description}
          </Typography>
        )}

        {episode.progress && episode.progress > 0 && !episode.isWatched && (
          <Box sx={episodeCardStyles.progressContainer}>
            <LinearProgress
              variant="determinate"
              value={episode.progress}
              sx={episodeCardStyles.progressBar}
            />
            <Typography variant="caption" sx={episodeCardStyles.progressText}>
              {Math.round(episode.progress)}%
            </Typography>
          </Box>
        )}

        {episode.watchedAt && (
          <Typography variant="caption" sx={episodeCardStyles.watchedDate}>
            {t('anime_episodes_watched_on', {
              date: formatDate(episode.watchedAt)
            })}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
