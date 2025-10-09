import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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

  return (
    <Accordion sx={seasonSectionStyles.accordion} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={seasonSectionStyles.accordionSummary}
      >
        <Typography variant="h6" sx={seasonSectionStyles.title}>
          {t('anime_season_number', { number: season.seasonNumber })}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={seasonSectionStyles.accordionDetails}>
        <Box sx={seasonSectionStyles.episodesGrid}>
          {season.episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default SeasonSection;
