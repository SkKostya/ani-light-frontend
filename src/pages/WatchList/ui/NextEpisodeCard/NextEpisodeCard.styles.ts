import type { SxProps, Theme } from '@mui/material';

export const nextEpisodeCardStyles = {
  card: {
    position: 'relative',
    borderRadius: 'var(--border-radius-large)',
    overflow: 'hidden',
    backgroundColor: 'var(--color-background-elevated)',
    boxShadow: 'var(--shadow-medium)',
    border: '2px solid transparent',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-large)',
      border: '2px solid var(--color-primary)',
      '& .play-button': {
        opacity: 1,
        transform: 'scale(1.1)'
      },
      '& .episode-overlay': {
        opacity: 1
      },
      '& .anime-image': {
        transform: 'scale(1.05)'
      }
    }
  } as SxProps<Theme>,

  imageContainer: {
    position: 'relative',
    width: '100%',
    height: { xs: 200, sm: 240, md: 280 },
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
      zIndex: 1
    }
  } as SxProps<Theme>,

  animeImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    className: 'anime-image'
  } as SxProps<Theme>,

  episodeOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    zIndex: 2,
    className: 'episode-overlay'
  } as SxProps<Theme>,

  playButton: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    background: 'var(--gradient-magic)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-glow)',
    opacity: 0,
    transform: 'scale(0.8)',
    transition: 'all 0.3s ease-in-out',
    className: 'play-button',
    '&:hover': {
      transform: 'scale(1.2)',
      boxShadow: '0 0 24px rgba(233, 30, 99, 0.6)'
    }
  } as SxProps<Theme>,

  episodeBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    background: 'var(--gradient-sunset)',
    color: 'white',
    padding: '6px 12px',
    borderRadius: 'var(--border-radius-medium)',
    fontSize: '0.875rem',
    fontWeight: 600,
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    boxShadow: 'var(--shadow-small)',
    zIndex: 3
  } as SxProps<Theme>,

  content: {
    padding: { xs: 2, sm: 2.5 },
    position: 'relative'
  } as SxProps<Theme>,

  animeTitle: {
    fontSize: { xs: '1.1rem', sm: '1.25rem' },
    fontWeight: 600,
    color: 'var(--color-text-primary)',
    lineHeight: 1.3,
    mb: 1,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  } as SxProps<Theme>,

  episodeInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    mb: 1.5
  } as SxProps<Theme>,

  episodeNumber: {
    background: 'var(--gradient-ocean)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: 'var(--border-radius-small)',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: 'var(--shadow-small)'
  } as SxProps<Theme>,

  episodeDuration: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
    fontWeight: 500
  } as SxProps<Theme>,

  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: 'var(--color-border)',
    borderRadius: 'var(--border-radius-small)',
    overflow: 'hidden',
    mb: 1.5
  } as SxProps<Theme>,

  progressFill: {
    height: '100%',
    background: 'var(--gradient-magic)',
    borderRadius: 'var(--border-radius-small)',
    transition: 'width 0.3s ease-in-out',
    boxShadow: '0 0 8px rgba(233, 30, 99, 0.3)'
  } as SxProps<Theme>,

  progressText: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.75rem',
    fontWeight: 500,
    textAlign: 'center'
  } as SxProps<Theme>,

  actionButtons: {
    display: 'flex',
    gap: 1,
    mt: 1.5
  } as SxProps<Theme>,

  actionButton: {
    flex: 1,
    py: 1,
    px: 2,
    borderRadius: 'var(--border-radius-medium)',
    fontSize: '0.875rem',
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-1px)',
      boxShadow: 'var(--shadow-medium)'
    }
  } as SxProps<Theme>,

  primaryButton: {
    background: 'var(--gradient-magic)',
    color: 'white',
    boxShadow: 'var(--shadow-small)',
    '&:hover': {
      background: 'var(--gradient-sunset)',
      boxShadow: 'var(--shadow-glow)'
    }
  } as SxProps<Theme>,

  secondaryButton: {
    background: 'var(--color-background-paper)',
    color: 'var(--color-text-primary)',
    border: '2px solid var(--color-border)',
    '&:hover': {
      background: 'var(--color-primary)',
      color: 'white',
      border: '2px solid var(--color-primary)'
    }
  } as SxProps<Theme>,

  newEpisodeBadge: {
    position: 'absolute',
    top: 12,
    left: 12,
    background: 'var(--gradient-fire)',
    color: 'white',
    padding: '4px 8px',
    borderRadius: 'var(--border-radius-small)',
    fontSize: '0.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    boxShadow: 'var(--shadow-small)',
    animation: 'pulse 2s infinite',
    zIndex: 3
  } as SxProps<Theme>
};
