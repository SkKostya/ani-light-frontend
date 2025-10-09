import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { LocalizedLink } from '@/shared/ui';

import { mockRecentEpisodes } from '../../mock-data';
import { recentEpisodesStyles } from './RecentEpisodes.styles';

const RecentEpisodes = () => {
  const { t } = useTranslation();

  return (
    <Box sx={recentEpisodesStyles.container}>
      <Box sx={recentEpisodesStyles.chipContainer}>
        {mockRecentEpisodes.map((episode) => (
          <Box key={episode.id} sx={recentEpisodesStyles.chip}>
            <LocalizedLink
              to={`/anime/${episode.animeId}/episode/${episode.episodeNumber}`}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                width: '100%'
              }}
            >
              <Box sx={recentEpisodesStyles.chipContent}>
                <Typography
                  variant="caption"
                  sx={recentEpisodesStyles.episodeTitle}
                >
                  {episode.animeTitle}
                </Typography>
                <Typography
                  variant="caption"
                  sx={recentEpisodesStyles.episodeNumber}
                >
                  {t('anime_episode_number', { number: episode.episodeNumber })}
                </Typography>
              </Box>
            </LocalizedLink>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default RecentEpisodes;
