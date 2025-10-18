import type { SxProps, Theme } from '@mui/material';

export const animeInfoStyles = {
  card: {
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-large)',
    overflow: 'hidden',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'var(--gradient-magic)'
    }
  } as SxProps<Theme>,

  cardContent: {
    p: { xs: 2, sm: 3, md: 4 }
  } as SxProps<Theme>,

  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 2 }
  } as SxProps<Theme>,

  descriptionContainer: {
    mt: { xs: 2 },
    pt: { xs: 2 },
    borderTop: '1px solid var(--color-border)'
  } as SxProps<Theme>,

  posterContainer: {
    position: 'relative',
    borderRadius: 'var(--border-radius-medium)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-medium)',
    '&:hover .poster-overlay': {
      opacity: 1
    }
  } as SxProps<Theme>,

  poster: {
    width: '100%',
    height: { xs: 240 },
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  } as SxProps<Theme>,

  posterOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    className: 'poster-overlay'
  } as SxProps<Theme>,

  yearContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  } as SxProps<Theme>,

  yearLabel: {
    fontSize: '1rem',
    fontWeight: 500,
    color: 'var(--color-text-primary)'
  } as SxProps<Theme>,

  playButton: {
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    width: 80,
    height: 80,
    boxShadow: 'var(--shadow-glow)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-dark)',
      transform: 'scale(1.1)',
      boxShadow: 'var(--shadow-glow)'
    }
  } as SxProps<Theme>,

  title: {
    color: 'var(--color-text-primary)',
    fontWeight: 700,
    fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
    mb: 1,
    lineHeight: 1.2
  } as SxProps<Theme>,

  originalTitle: {
    color: 'var(--color-text-secondary)',
    fontWeight: 400,
    fontSize: { xs: '1rem', sm: '1.125rem' },
    mb: 1,
    fontStyle: 'italic'
  } as SxProps<Theme>,

  year: {
    color: 'var(--color-text-secondary)',
    fontSize: '1rem',
    fontWeight: 500
  } as SxProps<Theme>,

  ratingContainer: {
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    alignItems: { xs: 'flex-start', sm: 'center' },
    gap: { xs: 1, sm: 2 }
  } as SxProps<Theme>,

  rating: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  } as SxProps<Theme>,

  starIcon: {
    fontSize: '1.5rem'
  } as SxProps<Theme>,

  ratingText: {
    color: 'var(--color-primary)',
    fontWeight: 600,
    fontSize: '1.25rem'
  } as SxProps<Theme>,

  stats: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem'
  } as SxProps<Theme>,

  label: {
    color: 'var(--color-text-primary)',
    fontWeight: 600,
    fontSize: '0.875rem',
    mb: 1,
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  } as SxProps<Theme>,

  genreChip: {
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    fontWeight: 500,
    fontSize: '0.75rem',
    '&:hover': {
      backgroundColor: 'var(--color-primary-dark)'
    }
  } as SxProps<Theme>,

  themeChip: {
    borderColor: 'var(--color-primary)',
    color: 'var(--color-primary)',
    fontWeight: 500,
    fontSize: '0.75rem',
    '&:hover': {
      backgroundColor: 'var(--color-primary)',
      color: 'white'
    }
  } as SxProps<Theme>,

  description: {
    color: 'var(--color-text-secondary)',
    lineHeight: 1.6,
    fontSize: '0.875rem',
    textAlign: 'justify'
  } as SxProps<Theme>,

  actionIconButton: {
    width: 48,
    height: 48,
    border: '2px solid var(--color-border)',
    borderRadius: 'var(--border-radius-medium)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderColor: 'var(--color-primary)',
      backgroundColor: 'var(--color-primary-light)',
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-medium)'
    }
  } as SxProps<Theme>,

  ageRatingLabel: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '6px 8px',
    borderRadius: 'var(--border-radius-small)',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    zIndex: 2,
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      transform: 'scale(1.05)',
      boxShadow: 'var(--shadow-glow)'
    }
  } as SxProps<Theme>
};
