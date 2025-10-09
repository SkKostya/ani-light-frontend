import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { animeEpisodesPageStyles } from './AnimeEpisodes.styles';
import { mockAnimeDetailedInfo } from './mock-data';
import { AnimeInfo, OVASection, SeasonSection } from './ui';

const AnimeEpisodes = () => {
  const { t } = useTranslation();

  // В реальном приложении данные будут загружаться через API
  const animeInfo = mockAnimeDetailedInfo;

  return (
    <Box sx={animeEpisodesPageStyles.container}>
      <Container maxWidth="lg">
        {/* Заголовок страницы */}
        <Box sx={animeEpisodesPageStyles.header}>
          <Typography variant="h4" sx={animeEpisodesPageStyles.title}>
            {t('anime_episodes_title')}
          </Typography>
        </Box>

        {/* Информация об аниме */}
        <Box sx={animeEpisodesPageStyles.infoSection}>
          <AnimeInfo anime={animeInfo} />
        </Box>

        {/* Сезоны */}
        <Box sx={animeEpisodesPageStyles.seasonsSection}>
          <Typography variant="h5" sx={animeEpisodesPageStyles.sectionTitle}>
            {t('anime_episodes_seasons_title')}
          </Typography>
          {animeInfo.seasons.map((season) => (
            <SeasonSection key={season.id} season={season} />
          ))}
        </Box>

        {/* OVA эпизоды */}
        {animeInfo.ovaEpisodes.length > 0 && (
          <Box sx={animeEpisodesPageStyles.ovaSection}>
            <Typography variant="h5" sx={animeEpisodesPageStyles.sectionTitle}>
              {t('anime_episodes_ova_title')}
            </Typography>
            <OVASection ovaEpisodes={animeInfo.ovaEpisodes} />
          </Box>
        )}

        {/* Связанные аниме */}
        {animeInfo.relatedAnime.length > 0 && (
          <Box sx={animeEpisodesPageStyles.relatedSection}>
            <Typography variant="h5" sx={animeEpisodesPageStyles.sectionTitle}>
              {t('anime_episodes_related_title')}
            </Typography>
            <Box sx={animeEpisodesPageStyles.relatedGrid}>
              {animeInfo.relatedAnime.map((related) => (
                <Box key={related.id} sx={animeEpisodesPageStyles.relatedCard}>
                  <Box
                    component="img"
                    src={related.poster}
                    alt={related.title}
                    sx={animeEpisodesPageStyles.relatedPoster}
                  />
                  <Typography
                    variant="body2"
                    sx={animeEpisodesPageStyles.relatedTitle}
                  >
                    {related.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default AnimeEpisodes;
