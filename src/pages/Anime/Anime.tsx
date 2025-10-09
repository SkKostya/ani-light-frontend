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

  // Тестовые данные для плеера
  const playerProps = {
    videoUrl:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
    title: 'Attack on Titan - Episode 1',
    subtitle: 'The Fall of Shiganshina',
    quality: [
      {
        name: '1080p',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        default: true
      },
      {
        name: '720p',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      },
      {
        name: '480p',
        url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
      }
    ],
    subtitles: [
      { name: 'Русский', url: '', lang: 'ru' },
      { name: 'English', url: '', lang: 'en' },
      { name: '日本語', url: '', lang: 'ja' }
    ],
    onPlay: () => console.info('Video started playing'),
    onPause: () => console.info('Video paused'),
    onEnded: () => console.info('Video ended'),
    onError: (error: Error) => console.error('Player error:', error),
    onQualityChange: (quality: string) =>
      console.info('Quality changed to:', quality)
  };

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
