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
  const { alias } = useParams<{ alias: string }>();

  const [animeInfo, setAnimeInfo] = useState<AnimeDetailedInfo | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadAnimeInfo = async () => {
      if (!alias) return;
      const animeInfo = await animeApi.getAnimeReleases(alias);

      const firstRelease = animeInfo.animeReleases[0];
      const userAnime = animeInfo.userAnime?.[0];
      const genres = animeInfo.animeReleases
        .flatMap(
          (release) =>
            release.animeGenres?.map((genre) => genre.genre.name) || ''
        )
        .filter(Boolean);
      const isOnGoing = animeInfo.animeReleases.some(
        (release) => release.is_ongoing
      );

      setAnimeInfo({
        id: animeInfo.id,
        title: animeInfo.name,
        originalTitle: animeInfo.name_english,
        description: firstRelease?.description || '',
        poster: animeInfo.image || firstRelease?.poster_url || '',
        firstYear: animeInfo.first_year || new Date().getFullYear(),
        lastYear: animeInfo.last_year || new Date().getFullYear(),
        isOnGoing,
        genres,
        isFavorite: userAnime?.is_favorite || false,
        isInWatchList: userAnime?.want_to_watch || false,
        isInWantList: userAnime?.want_to_watch || false,
        seasons: animeInfo.animeReleases.map((release) => ({
          id: release.id,
          seasonNumber: release.sort_order,
          title: release.title_ru,
          description: release.description,
          totalEpisodes: release.episodes_total
        })),
        ageRating: {
          label: firstRelease?.ageRating.label || '',
          description: firstRelease?.ageRating.description || ''
        }
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
