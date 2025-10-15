import { PlaylistPlay, SkipNext, SkipPrevious } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';

import { animeControlsStyles } from './AnimeControls.styles';

interface IProps {
  totalEpisodes: number;
}

const AnimeControls = ({ totalEpisodes }: IProps) => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const { animeId, releaseId, episodeNumber } = useParams<{
    animeId: string;
    releaseId: string;
    episodeNumber: string;
  }>();

  const handlePrevious = () => {
    if (Number(episodeNumber) === 1) return;
    navigate(
      ROUTES.anime(animeId, releaseId, String(Number(episodeNumber) - 1))
    );
  };

  const handleNext = () => {
    if (Number(episodeNumber) === totalEpisodes) return;
    navigate(
      ROUTES.anime(animeId, releaseId, String(Number(episodeNumber) + 1))
    );
  };

  const handleAllEpisodes = () => {
    navigate(ROUTES.animeEpisodes(animeId));
  };

  return (
    <Box sx={animeControlsStyles.container}>
      <Stack
        direction={'row'}
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        justifyContent="space-between"
      >
        {/* Предыдущая серия */}
        <Button
          variant="outlined"
          onClick={handlePrevious}
          sx={animeControlsStyles.controlButton}
        >
          <SkipPrevious />
          <Typography
            variant="body1"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {t('anime_controls_previous')}
          </Typography>
        </Button>

        {/* Все серии */}
        <Button
          variant="outlined"
          onClick={handleAllEpisodes}
          sx={animeControlsStyles.controlButton}
        >
          <PlaylistPlay />
          {t('anime_controls_all_episodes')}
        </Button>

        {/* Следующая серия */}
        <Button
          variant="contained"
          onClick={handleNext}
          sx={animeControlsStyles.controlButton}
        >
          <Typography
            variant="body1"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            {t('anime_controls_next')}
          </Typography>
          <SkipNext />
        </Button>
      </Stack>
    </Box>
  );
};

export default AnimeControls;
