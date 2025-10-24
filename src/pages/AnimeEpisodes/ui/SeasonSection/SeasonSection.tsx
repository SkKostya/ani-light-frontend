import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { episodeApi } from '@/api/episode.api';
import type { EpisodeDetails } from '@/api/types/episode.types';
import { ROUTES } from '@/shared/constants';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { MainLoader } from '@/shared/ui';

import type { AnimeSeason } from '../../types';
import EpisodeCard from '../EpisodeCard';
import { seasonSectionStyles } from './SeasonSection.styles';

interface SeasonSectionProps {
  season: AnimeSeason;
}

const SeasonSection = ({ season }: SeasonSectionProps) => {
  const { t } = useTranslation();
  const { alias } = useParams<{ alias: string }>();
  const { ref, isIntersecting } = useIntersectionObserver({
    freezeOnceVisible: true
  });

  const [episodes, setEpisodes] = useState<EpisodeDetails[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isIntersecting) return;
    const getEpisodes = async () => {
      setIsLoading(true);
      try {
        const response = await episodeApi.getEpisodes({
          animeId: season.id
        });
        setEpisodes(response);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getEpisodes();
  }, [isIntersecting]);

  return (
    <Accordion ref={ref} sx={seasonSectionStyles.accordion} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={seasonSectionStyles.accordionSummary}
      >
        <Typography variant="h6" sx={seasonSectionStyles.title}>
          {season.title}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={seasonSectionStyles.accordionDetails}>
        {isLoading ? (
          <MainLoader fullWidth />
        ) : episodes.length > 0 ? (
          <Box sx={seasonSectionStyles.episodesGrid}>
            {episodes.map((episode) => (
              <EpisodeCard
                key={episode.id}
                episode={{
                  number: episode.number,
                  isWatched: episode.userEpisode?.status === 'watched'
                }}
                href={ROUTES.anime(alias, {
                  episodeNumber: String(episode.number),
                  seasonNumber:
                    season.seasonNumber > 0
                      ? String(season.seasonNumber)
                      : undefined
                })}
              />
            ))}
          </Box>
        ) : (
          <Typography variant="body1" sx={seasonSectionStyles.noEpisodes}>
            {t('anime_no_episodes')}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default SeasonSection;
