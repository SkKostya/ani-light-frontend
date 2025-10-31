import { Home, Refresh, VideoLibrary } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useSearchParams } from 'react-router';

import { episodeApi } from '@/api/episode.api';
import type { GetNextEpisodeResponse } from '@/api/types/episode.types';
import { ROUTES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { LocalizedLink, MainLoader } from '@/shared/ui';
import { getEpisodeDetails } from '@/store/episode.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';

import { animePageStyles } from './Anime.styles';
import { AnimeControls, AnimePlayer, RecentEpisodes } from './ui';

const Anime = () => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const dispatch = useAppDispatch();
  const { episode } = useAppSelector((state) => state.episode);

  const { alias } = useParams<{ alias: string }>();
  const [searchParams] = useSearchParams();
  const seasonNumber = searchParams.get('season');
  const episodeNumber = searchParams.get('episode');

  const animePageRef = useRef<HTMLDivElement>(null);

  const [nextEpisode, setNextEpisode] = useState<GetNextEpisodeResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!alias || !seasonNumber || !episodeNumber) return;
    const loadEpisode = async () => {
      setIsLoading(true);
      const response = await dispatch(
        getEpisodeDetails({
          alias,
          seasonNumber: parseInt(seasonNumber),
          number: parseInt(episodeNumber)
        })
      );

      if (getEpisodeDetails.rejected.match(response)) {
        console.error(response.error);
      }

      try {
        const nextEpisodeResponse = await episodeApi.getNextEpisode({
          alias,
          seasonNumber: parseInt(seasonNumber),
          number: parseInt(episodeNumber)
        });
        setNextEpisode(nextEpisodeResponse);
      } catch (err) {
        console.error(err);
      }

      setIsLoading(false);
    };
    loadEpisode();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [alias, seasonNumber, episodeNumber]);

  if (!episode) {
    const handleRefresh = () => {
      window.location.reload();
    };

    return (
      <Box sx={animePageStyles.container}>
        {isLoading && <MainLoader fullScreen />}

        <Box sx={animePageStyles.notFoundContainer}>
          {/* Иконка */}
          <Box sx={animePageStyles.notFoundIcon}>
            <VideoLibrary />
          </Box>

          {/* Заголовок */}
          <Typography
            variant="h3"
            component="h1"
            sx={animePageStyles.notFoundTitle}
          >
            {t('anime_episode_not_found_title')}
          </Typography>

          {/* Описание */}
          <Typography variant="body1" sx={animePageStyles.notFoundDescription}>
            {t('anime_episode_not_found_description')}
          </Typography>

          {/* Предложение */}
          <Typography variant="body2" sx={animePageStyles.notFoundSuggestion}>
            {t('anime_episode_not_found_suggestion')}
          </Typography>

          {/* Кнопки действий */}
          <Box sx={animePageStyles.notFoundButtons}>
            <Button
              component={LocalizedLink}
              to={ROUTES.catalog}
              variant="contained"
              startIcon={<Home />}
              sx={animePageStyles.notFoundButton}
            >
              {t('anime_episode_not_found_button_catalog')}
            </Button>

            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={handleRefresh}
              sx={animePageStyles.notFoundButton}
            >
              {t('anime_episode_not_found_button_refresh')}
            </Button>
          </Box>
        </Box>
      </Box>
    );
  }

  const handleNextEpisode = () => {
    const nextSeasonSortOrder = nextEpisode?.seasonSortOrder
      ? String(nextEpisode.seasonSortOrder)
      : undefined;
    const nextEpisodeNumber = nextEpisode?.nextEpisodeNumber;
    if (!nextEpisodeNumber) return;
    navigate(
      ROUTES.anime(alias, {
        episodeNumber: String(nextEpisodeNumber),
        seasonNumber: nextSeasonSortOrder ?? seasonNumber ?? undefined
      })
    );
  };

  return (
    <Box
      ref={animePageRef}
      sx={animePageStyles.container}
      data-next-season-sort-order={nextEpisode?.seasonSortOrder}
      data-next-episode-number={nextEpisode?.nextEpisodeNumber}
      data-season-external-id={episode?.animeRelease.external_id}
      data-current-episode-number={episode?.number}
    >
      <Container maxWidth="lg">
        {/* Плеер */}
        <Box sx={animePageStyles.playerContainer}>
          <AnimePlayer animePageRef={animePageRef} />
        </Box>

        {/* Кнопки управления */}
        <Box sx={animePageStyles.controlsContainer}>
          <AnimeControls
            onNextEpisode={
              nextEpisode?.nextEpisodeNumber ? handleNextEpisode : undefined
            }
          />
        </Box>

        {/* Последние просмотренные серии */}
        <RecentEpisodes />

        {/* Комментарии */}
        {/* <AnimeComments episodeId={episode.id} /> */}
      </Container>
    </Box>
  );
};

export default Anime;
