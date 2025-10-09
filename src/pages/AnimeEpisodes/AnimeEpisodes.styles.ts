import type { SxProps, Theme } from '@mui/material';

export const animeEpisodesPageStyles = {
  container: {
    minHeight: '100vh',
    backgroundColor: 'var(--color-background)',
    py: { xs: 2, sm: 3, md: 4 }
  } as SxProps<Theme>,

  header: {
    mb: { xs: 3, sm: 4 },
    textAlign: 'center'
  } as SxProps<Theme>,

  title: {
    background: 'var(--anime-gradient-magic)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
    mb: 2,
    textShadow: 'var(--shadow-glow)'
  } as SxProps<Theme>,

  infoSection: {
    mb: { xs: 4, sm: 5, md: 6 }
  } as SxProps<Theme>,

  seasonsSection: {
    mb: { xs: 4, sm: 5, md: 6 }
  } as SxProps<Theme>,

  ovaSection: {
    mb: { xs: 4, sm: 5, md: 6 }
  } as SxProps<Theme>,

  sectionTitle: {
    color: 'var(--color-primary)',
    fontWeight: 600,
    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
    mb: { xs: 2, sm: 3 },
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '-8px',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '60px',
      height: '3px',
      background: 'var(--anime-gradient-sunset)',
      borderRadius: '2px'
    }
  } as SxProps<Theme>
};
