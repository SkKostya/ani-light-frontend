import { Box, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import type { OVAEpisode } from '../../types';
import OVACard from '../OVACard';
import { ovaSectionStyles } from './OVASection.styles';

interface OVASectionProps {
  ovaEpisodes: OVAEpisode[];
}

const OVASection = ({ ovaEpisodes }: OVASectionProps) => {
  const { t } = useTranslation();

  return (
    <Box sx={ovaSectionStyles.container}>
      <Typography variant="body2" sx={ovaSectionStyles.description}>
        {t('anime_episodes_ova_description')}
      </Typography>

      <Grid container spacing={2} sx={ovaSectionStyles.grid}>
        {ovaEpisodes.map((episode) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={episode.id}>
            <OVACard episode={episode} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default OVASection;
