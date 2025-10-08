import { SxProps, Theme } from '@mui/material';

export const historyCardStyles = {
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--border-radius-large)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-small)',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    overflow: 'hidden',
    minHeight: { xs: '100px', sm: '120px' },
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-medium)',
      borderColor: 'var(--color-primary)',
      '& .anime-image': {
        transform: 'scale(1.05)'
      }
    },
    '&:focus': {
      outline: '2px solid var(--color-primary)',
      outlineOffset: '2px'
    }
  } as SxProps<Theme>,

  timeContainer: {
    position: 'absolute',
    top: 8,
    right: 12,
    zIndex: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: 'var(--border-radius-small)',
    px: 1,
    py: 0.5
  } as SxProps<Theme>,

  timeText: {
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 500,
    lineHeight: 1
  } as SxProps<Theme>,

  contentContainer: {
    display: 'flex',
    flex: 1,
    p: { xs: 1.5, sm: 2 },
    pt: { xs: 2.5, sm: 3 }
  } as SxProps<Theme>,

  imageContainer: {
    flexShrink: 0,
    width: { xs: 50, sm: 60 },
    height: { xs: 70, sm: 80 },
    mr: { xs: 1.5, sm: 2 },
    borderRadius: 'var(--border-radius-medium)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow-small)'
  } as SxProps<Theme>,

  animeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    '&.anime-image': {
      // Класс для hover эффекта
    }
  } as SxProps<Theme>,

  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minWidth: 0 // Позволяет тексту обрезаться
  } as SxProps<Theme>,

  animeTitle: {
    fontSize: { xs: '0.9rem', sm: '1rem' },
    fontWeight: 600,
    lineHeight: 1.2,
    mb: 0.5,
    color: 'var(--color-text-primary)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  } as SxProps<Theme>,

  episodeInfo: {
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    mb: 0.5,
    color: 'var(--color-text-secondary)'
  } as SxProps<Theme>,

  episodeTitle: {
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    fontWeight: 500,
    mb: 0.5,
    color: 'var(--color-text-primary)',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  } as SxProps<Theme>,

  durationInfo: {
    fontSize: { xs: '0.75rem', sm: '0.8rem' },
    color: 'var(--color-text-secondary)',
    mt: 'auto'
  } as SxProps<Theme>,

  progressContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    p: { xs: 1.5, sm: 2 },
    pt: 1,
    backgroundColor: 'var(--color-background-secondary)'
  } as SxProps<Theme>,

  progressBar: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    backgroundColor: 'var(--color-border)',
    '& .MuiLinearProgress-bar': {
      borderRadius: 3,
      background:
        'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
    }
  } as SxProps<Theme>,

  progressText: {
    fontSize: '0.75rem',
    fontWeight: 500,
    color: 'var(--color-text-secondary)',
    minWidth: '35px',
    textAlign: 'right'
  } as SxProps<Theme>
};
