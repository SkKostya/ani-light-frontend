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

  relatedSection: {
    mb: { xs: 2, sm: 3 }
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
  } as SxProps<Theme>,

  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(2, 1fr)',
      sm: 'repeat(3, 1fr)',
      md: 'repeat(4, 1fr)',
      lg: 'repeat(5, 1fr)'
    },
    gap: { xs: 2, sm: 3 },
    mt: 3
  } as SxProps<Theme>,

  relatedCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    p: 2,
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-medium)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-large)',
      '& .anime-glow': {
        animation: 'anime-glow 2s ease-in-out infinite'
      }
    }
  } as SxProps<Theme>,

  relatedPoster: {
    width: '100%',
    height: { xs: 120, sm: 140, md: 160 },
    objectFit: 'cover',
    borderRadius: 'var(--border-radius-medium)',
    mb: 1,
    boxShadow: 'var(--shadow-small)'
  } as SxProps<Theme>,

  relatedTitle: {
    textAlign: 'center',
    fontWeight: 500,
    color: 'var(--color-text-primary)',
    fontSize: { xs: '0.75rem', sm: '0.875rem' },
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  } as SxProps<Theme>
};
