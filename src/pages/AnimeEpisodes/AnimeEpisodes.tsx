import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { animeApi } from '@/api/anime.api';
import { MainLoader } from '@/shared/ui';

import { animeEpisodesPageStyles } from './AnimeEpisodes.styles';
import type { AnimeDetailedInfo } from './types';
import { AnimeInfo, SeasonSection } from './ui';

const AnimeEpisodes = () => {
  const { t } = useTranslation();
  const { animeId } = useParams<{ animeId: string }>();

  // В реальном приложении данные будут загружаться через API

  const [animeInfo, setAnimeInfo] = useState<AnimeDetailedInfo | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAnimeInfo = async () => {
      if (!animeId) return;
      const animeInfo = await animeApi.getAnimeReleases(animeId);

      const firstRelease = animeInfo.animeReleases[0];
      const userAnime = animeInfo.userAnime?.[0];
      const genres = animeInfo.animeReleases
        .flatMap(
          (release) =>
            release.animeGenres?.map((genre) => genre.genre.name) || ''
        )
        .filter(Boolean);

      setAnimeInfo({
        id: animeInfo.id,
        title: animeInfo.name,
        originalTitle: animeInfo.name_english,
        description: firstRelease?.description || '',
        poster: animeInfo.image || firstRelease?.poster_url || '',
        banner: '',
        year: animeInfo.last_year || new Date().getFullYear(),
        status: 'completed',
        genres: genres,
        themes: [],
        rating: animeInfo.rating || 0,
        totalEpisodes: animeInfo.total_episodes,
        totalSeasons: animeInfo.total_releases,
        duration: 0,
        studio: '',
        director: '',
        writer: '',
        music: '',
        isFavorite: userAnime?.is_favorite || false,
        isInWatchList: userAnime?.want_to_watch || false,
        isInWantList: userAnime?.want_to_watch || false,
        userRating: userAnime?.rating || 0,
        userStatus: 'completed',
        seasons: animeInfo.animeReleases.map((release, index) => ({
          id: release.id,
          seasonNumber: index + 1,
          title: release.title_ru,
          description: release.description,
          year: release.year,
          episodes: release.episodes.map((episode) => ({
            id: episode.id,
            title: animeInfo.name,
            episodeNumber: episode.number,
            seasonNumber: index + 1,
            thumbnail: animeInfo.image || firstRelease?.poster_url || '',
            videoUrl: episode.video_url || '',
            description: release.description,
            airedAt: new Date(animeInfo.first_year || new Date().getFullYear()),
            isWatched: false,
            duration: episode.duration
          })),
          totalEpisodes: release.episodes_total,
          watchedEpisodes: 0,
          isCompleted: false
        })),
        ovaEpisodes: [],
        relatedAnime: []
      });
      setIsLoading(false);
    };
    loadAnimeInfo();
  }, []);

  return (
    <Box sx={animeEpisodesPageStyles.container}>
      {isLoading && <MainLoader fullScreen={true} />}

      <Container maxWidth="lg">
        {/* Заголовок страницы */}
        <Box sx={animeEpisodesPageStyles.header}>
          <Typography variant="h4" sx={animeEpisodesPageStyles.title}>
            {t('anime_episodes_title')}
          </Typography>
        </Box>

        {animeInfo && (
          <>
            {/* Информация об аниме */}
            <Box sx={animeEpisodesPageStyles.infoSection}>
              <AnimeInfo anime={animeInfo} />
            </Box>

            {/* Сезоны */}
            <Box sx={animeEpisodesPageStyles.seasonsSection}>
              <Typography
                variant="h5"
                sx={animeEpisodesPageStyles.sectionTitle}
              >
                {t('anime_episodes_seasons_title')}
              </Typography>
              {animeInfo.seasons.map((season) => (
                <SeasonSection key={season.id} season={season} />
              ))}
            </Box>
          </>
        )}
      </Container>
    </Box>
  );
};

export default AnimeEpisodes;
