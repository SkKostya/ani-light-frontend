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
  const { alias, seasonNumber, episodeNumber } = useParams<{
    alias: string;
    seasonNumber: string;
    episodeNumber: string;
  }>();

  const handlePrevious = () => {
    if (Number(episodeNumber) === 1) return;
    if (seasonNumber)
      navigate(
        ROUTES.animeWithSeason(
          alias,
          seasonNumber,
          String(Number(episodeNumber) - 1)
        )
      );
    else navigate(ROUTES.anime(alias, String(Number(episodeNumber) - 1)));
  };

  const handleNext = () => {
    if (Number(episodeNumber) === totalEpisodes) return;
    if (seasonNumber)
      navigate(
        ROUTES.animeWithSeason(
          alias,
          seasonNumber,
          String(Number(episodeNumber) + 1)
        )
      );
    else navigate(ROUTES.anime(alias, String(Number(episodeNumber) + 1)));
  };

  const handleAllEpisodes = () => {
    navigate(ROUTES.animeEpisodes(alias));
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
          disabled={Number(episodeNumber) === 1}
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
          disabled={Number(episodeNumber) === totalEpisodes}
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
