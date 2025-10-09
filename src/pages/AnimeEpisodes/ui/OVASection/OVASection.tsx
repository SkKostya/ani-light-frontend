import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { Grid } from '@/shared/ui';

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

      <Grid maxColCount={3} minColSize={260}>
        {ovaEpisodes.map((episode) => (
          <OVACard key={episode.id} episode={episode} />
        ))}
      </Grid>
    </Box>
  );
};

export default OVASection;
