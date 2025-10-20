import { type SxProps, type Theme } from '@mui/material';

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
    minHeight: '100px',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-medium)',
      borderColor: 'var(--color-primary)',
      '& .anime-image': {
        transform: 'scale(1.05)'
      },
      '& .fallback-image': {
        borderColor: 'var(--color-primary)',
        backgroundColor: 'var(--color-background-paper)',
        '& .fallback-icon': {
          opacity: 1,
          filter: 'grayscale(0)',
          transform: 'scale(1.1)'
        }
      }
    },
    '&:focus': {
      outline: '2px solid var(--color-primary)',
      outlineOffset: '2px'
    }
  } as SxProps<Theme>,

  timeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
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
    alignItems: 'center',
    flex: 1,
    p: 1.5
  } as SxProps<Theme>,

  imageContainer: {
    flexShrink: 0,
    width: { xs: 60, sm: 70 },
    height: { xs: 60, sm: 70 },
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

  fallbackImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--color-background)',
    border: '2px dashed var(--color-border)',
    borderRadius: 'var(--border-radius-medium)',
    transition: 'all 0.3s ease-in-out',
    '&.fallback-image': {
      // Класс для hover эффекта
    }
  } as SxProps<Theme>,

  fallbackIcon: {
    fontSize: { xs: '1.5rem', sm: '2rem' },
    opacity: 0.6,
    filter: 'grayscale(0.3)',
    transition: 'all 0.3s ease-in-out',
    '&.fallback-icon': {
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
    paddingRight: '28px',
    mb: 0.5,
    color: 'var(--color-text-primary)'
  } as SxProps<Theme>,

  episodeInfo: {
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    mb: 0.5,
    color: 'var(--color-text-secondary)'
  } as SxProps<Theme>,

  durationInfo: {
    fontSize: { xs: '0.75rem', sm: '0.8rem' },
    color: 'var(--color-text-secondary)',
    mt: 'auto'
  } as SxProps<Theme>,

  progressBar: {
    height: 4,
    borderRadius: 3,
    backgroundColor: 'var(--color-border)',
    '& .MuiLinearProgress-bar': {
      borderRadius: 3,
      background:
        'linear-gradient(90deg, var(--color-primary) 0%, var(--color-secondary) 100%)'
    }
  } as SxProps<Theme>
};
