import { Home, Refresh, VideoLibrary } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { episodeApi } from '@/api/episode.api';
import type { EpisodeDetails } from '@/api/types/episode.types';
import { ROUTES } from '@/shared/constants';
import { LocalizedLink, MainLoader } from '@/shared/ui';

import { animePageStyles } from './Anime.styles';
import {
  AnimeComments,
  AnimeControls,
  AnimePlayer,
  RecentEpisodes
} from './ui';

const Anime = () => {
  const { t } = useTranslation();

  const { releaseId, episodeNumber } = useParams<{
    animeId: string;
    episodeNumber: string;
    releaseId: string;
  }>();

  const [episode, setEpisode] = useState<EpisodeDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Тестовые данные для плеера
  const playerProps = useMemo(() => {
    const qualityOptions = [];

    if (episode?.video_url_1080) {
      qualityOptions.push({
        name: '1080p',
        url: episode.video_url_1080,
        default: true
      });
    }

    if (episode?.video_url_720) {
      qualityOptions.push({
        name: '720p',
        url: episode.video_url_720,
        default: !episode?.video_url_1080
      });
    }

    if (episode?.video_url_480) {
      qualityOptions.push({
        name: '480p',
        url: episode.video_url_480,
        default: !episode?.video_url_1080 && !episode?.video_url_720
      });
    }

    return {
      videoUrl: episode?.video_url || undefined,
      poster: episode?.preview_image
        ? process.env.PUBLIC_ANILIBRIA_URL + episode.preview_image
        : undefined,
      title: episode?.animeRelease.title_ru,
      subtitle: episode?.animeRelease.title_en,
      quality: qualityOptions
    };
  }, [episode]);

  useEffect(() => {
    if (!releaseId || !episodeNumber) return;
    const loadEpisode = async () => {
      try {
        setIsLoading(true);
        const episode = await episodeApi.getEpisodeDetails({
          animeId: releaseId,
          number: parseInt(episodeNumber)
        });
        setEpisode(episode);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    loadEpisode();
  }, [releaseId, episodeNumber]);

  if (isLoading) return <MainLoader fullWidth />;

  if (!episode) {
    const handleRefresh = () => {
      window.location.reload();
    };

    return (
      <Box sx={animePageStyles.container}>
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

  return (
    <Box sx={animePageStyles.container}>
      <Container maxWidth="lg">
        {/* Заголовок страницы */}
        <Box sx={animePageStyles.header}>
          <Typography variant="h4" sx={animePageStyles.title}>
            {t('anime_title')}
          </Typography>
        </Box>

        {/* Плеер */}
        <Box sx={animePageStyles.playerContainer}>
          <AnimePlayer {...playerProps} />
        </Box>

        {/* Кнопки управления */}
        <Box sx={animePageStyles.controlsContainer}>
          <AnimeControls totalEpisodes={episode.animeRelease.episodes_total} />
        </Box>

        {/* Последние просмотренные серии */}
        <Box sx={animePageStyles.recentContainer}>
          <Typography variant="h6" sx={animePageStyles.recentTitle}>
            {t('anime_recent_episodes')}
          </Typography>
          <RecentEpisodes />
        </Box>

        {/* Комментарии */}
        <AnimeComments />
      </Container>
    </Box>
  );
};

export default Anime;
