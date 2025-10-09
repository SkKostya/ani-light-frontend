import { Box, Container, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { animePageStyles } from './Anime.styles';
import {
  AnimeComments,
  AnimeControls,
  AnimePlayer,
  RecentEpisodes
} from './ui';

const Anime = () => {
  const { t } = useTranslation();

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
          <AnimePlayer />
        </Box>

        {/* Кнопки управления */}
        <Box sx={animePageStyles.controlsContainer}>
          <AnimeControls />
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
