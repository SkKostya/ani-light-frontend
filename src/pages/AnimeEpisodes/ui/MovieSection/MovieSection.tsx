import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { episodeApi } from '@/api/episode.api';
import type { EpisodeDetails } from '@/api/types/episode.types';
import { ROUTES } from '@/shared/constants';
import { useIntersectionObserver } from '@/shared/hooks/useIntersectionObserver';
import { MainLoader } from '@/shared/ui';

import type { AnimeSeason } from '../../types';
import EpisodeCard from '../EpisodeCard';
import { movieSectionStyles } from './MovieSection.styles';

interface MovieSectionProps {
  movies: AnimeSeason[];
}

const MovieSection = ({ movies }: MovieSectionProps) => {
  const { t } = useTranslation();
  const { alias } = useParams<{ alias: string }>();
  const { ref, isIntersecting } = useIntersectionObserver({
    freezeOnceVisible: true
  });

  const [moviesData, setMoviesData] = useState<
    {
      seasonNumber: number;
      episodes: EpisodeDetails[];
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isIntersecting) return;
    const getEpisodes = async () => {
      setIsLoading(true);
      try {
        const response = (
          await Promise.allSettled(
            movies.map(async (movie) => {
              const response = await episodeApi.getEpisodes({
                animeId: movie.id
              });
              return { seasonNumber: movie.seasonNumber, episodes: response };
            })
          )
        ).filter((result) => result.status === 'fulfilled');
        setMoviesData(response.map((result) => result.value).flat());
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    getEpisodes();
  }, [isIntersecting]);

  return (
    <Accordion ref={ref} sx={movieSectionStyles.accordion} defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        sx={movieSectionStyles.accordionSummary}
      >
        <Typography variant="h6" sx={movieSectionStyles.title}>
          {t('anime_movies_title')}
        </Typography>
      </AccordionSummary>

      <AccordionDetails sx={movieSectionStyles.accordionDetails}>
        {isLoading ? (
          <MainLoader fullWidth />
        ) : moviesData.length > 0 ? (
          <Box sx={movieSectionStyles.episodesGrid}>
            {moviesData.map((movie, index) => (
              <React.Fragment key={movie.seasonNumber}>
                {movie.episodes.map((episode) => (
                  <EpisodeCard
                    key={episode.id}
                    episode={{
                      number: index + 1,
                      isWatched: episode.userEpisode?.status === 'watched'
                    }}
                    href={ROUTES.anime(alias, {
                      episodeNumber: String(episode.number),
                      seasonNumber:
                        movie.seasonNumber > 0
                          ? String(movie.seasonNumber)
                          : undefined
                    })}
                  />
                ))}
              </React.Fragment>
            ))}
          </Box>
        ) : (
          <Typography variant="body1" sx={movieSectionStyles.noEpisodes}>
            {t('anime_no_episodes')}
          </Typography>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

export default MovieSection;
