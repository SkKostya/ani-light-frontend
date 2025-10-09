import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Grid,
  LinearProgress,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { AnimeSeason } from '../../types';
import EpisodeCard from '../EpisodeCard';
import { seasonSectionStyles } from './SeasonSection.styles';

interface SeasonSectionProps {
  season: AnimeSeason;
}

const SeasonSection = ({ season }: SeasonSectionProps) => {
  const { t } = useTranslation();

  const progressPercentage =
    (season.watchedEpisodes / season.totalEpisodes) * 100;

  return (
    <Accordion sx={seasonSectionStyles.accordion} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={seasonSectionStyles.accordionSummary}
      >
        <Box sx={seasonSectionStyles.header}>
          <Box sx={seasonSectionStyles.titleContainer}>
            <Typography variant="h6" sx={seasonSectionStyles.title}>
              {season.title}
            </Typography>
            <Typography variant="body2" sx={seasonSectionStyles.year}>
              {season.year}
            </Typography>
          </Box>

          <Box sx={seasonSectionStyles.statsContainer}>
            <Chip
              label={t('anime_episodes_episodes_count', {
                count: season.totalEpisodes
              })}
              size="small"
              sx={seasonSectionStyles.episodeChip}
            />
            <Chip
              label={
                season.isCompleted
                  ? t('anime_episodes_completed')
                  : t('anime_episodes_in_progress')
              }
              size="small"
              color={season.isCompleted ? 'success' : 'primary'}
              sx={seasonSectionStyles.statusChip}
            />
          </Box>
        </Box>

        <Box sx={seasonSectionStyles.progressContainer}>
          <Box sx={seasonSectionStyles.progressHeader}>
            <Typography variant="body2" sx={seasonSectionStyles.progressText}>
              {t('anime_episodes_watched_episodes', {
                watched: season.watchedEpisodes,
                total: season.totalEpisodes
              })}
            </Typography>
            <Typography
              variant="body2"
              sx={seasonSectionStyles.progressPercentage}
            >
              {Math.round(progressPercentage)}%
            </Typography>
          </Box>
          <LinearProgress
            variant="determinate"
            value={progressPercentage}
            sx={seasonSectionStyles.progressBar}
          />
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={seasonSectionStyles.accordionDetails}>
        {season.description && (
          <Typography variant="body2" sx={seasonSectionStyles.description}>
            {season.description}
          </Typography>
        )}

        <Grid container spacing={2} sx={seasonSectionStyles.episodesGrid}>
          {season.episodes.map((episode) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={episode.id}>
              <EpisodeCard episode={episode} />
            </Grid>
          ))}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default SeasonSection;
