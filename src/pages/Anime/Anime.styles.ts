import type { SxProps, Theme } from '@mui/material';

export const animePageStyles = {
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
    background: 'var(--gradient-magic)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 700,
    fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
    mb: 2,
    textShadow: '0 0 20px rgba(233, 30, 99, 0.3)'
  } as SxProps<Theme>,

  playerContainer: {
    mb: { xs: 3, sm: 4 },
    borderRadius: 'var(--border-radius-large)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-large)',
    backgroundColor: 'var(--color-background-paper)',
    border: '2px solid var(--color-primary)',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--gradient-magic)',
      opacity: 0.1,
      zIndex: 1,
      pointerEvents: 'none'
    }
  } as SxProps<Theme>,

  controlsContainer: {
    mb: { xs: 3, sm: 4 },
    display: 'flex',
    justifyContent: 'center',
    gap: { xs: 2, sm: 3 }
  } as SxProps<Theme>,

  recentContainer: {
    mt: { xs: 4, sm: 5 }
  } as SxProps<Theme>,

  recentTitle: {
    color: 'var(--color-text-primary)',
    fontWeight: 600,
    mb: { xs: 2, sm: 3 },
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 60,
      height: 3,
      background: 'var(--gradient-magic)',
      borderRadius: 'var(--border-radius-small)'
    }
  } as SxProps<Theme>
};
