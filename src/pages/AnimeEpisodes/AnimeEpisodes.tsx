import { Box, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { animeReleaseApi } from '@/api/anime-release.api';
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
      const animeInfo = await animeReleaseApi.getAnimeDetails(animeId);

      setAnimeInfo({
        id: animeInfo.id,
        title: animeInfo.title_ru,
        originalTitle: animeInfo.title_en,
        description: animeInfo.description,
        poster: animeInfo.poster_url,
        banner: '',
        year: animeInfo.year,
        status: 'completed',
        genres: animeInfo.animeGenres?.map((genre) => genre.genre.name) || [],
        themes: [],
        rating: 0,
        totalEpisodes: animeInfo.episodes_total,
        totalSeasons: 1,
        duration: 0,
        studio: '',
        director: '',
        writer: '',
        music: '',
        isFavorite: false,
        isInWatchList: false,
        isInWantList: false,
        userRating: 0,
        userStatus: 'completed',
        seasons: [],
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
