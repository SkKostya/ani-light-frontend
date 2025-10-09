import type { SxProps, Theme } from '@mui/material';

export const episodeCardStyles = {
  card: {
    height: '100%',
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-medium)',
    overflow: 'hidden',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: 'var(--shadow-large)',
      '& .play-button': {
        opacity: 1,
        transform: 'scale(1.1)'
      }
    }
  } as SxProps<Theme>,

  mediaContainer: {
    position: 'relative',
    height: { xs: 120, sm: 140, md: 160 },
    overflow: 'hidden'
  } as SxProps<Theme>,

  media: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  } as SxProps<Theme>,

  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    className: 'play-button'
  } as SxProps<Theme>,

  playButton: {
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    width: 48,
    height: 48,
    boxShadow: 'var(--shadow-glow)',
    '&:hover': {
      backgroundColor: 'var(--color-primary-dark)',
      transform: 'scale(1.1)'
    }
  } as SxProps<Theme>,

  durationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 'var(--border-radius-small)',
    px: 1,
    py: 0.5
  } as SxProps<Theme>,

  durationText: {
    color: 'white',
    fontSize: '0.75rem',
    fontWeight: 600
  } as SxProps<Theme>,

  statusBadge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: '50%',
    width: 32,
    height: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  } as SxProps<Theme>,

  statusIcon: {
    color: 'white',
    fontSize: '1rem'
  } as SxProps<Theme>,

  content: {
    p: 2,
    height: 'calc(100% - 160px)',
    display: 'flex',
    flexDirection: 'column'
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    mb: 1
  } as SxProps<Theme>,

  title: {
    color: 'var(--color-text-primary)',
    fontWeight: 600,
    fontSize: '0.875rem',
    lineHeight: 1.2
  } as SxProps<Theme>,

  statusChip: {
    fontSize: '0.625rem',
    height: 20,
    minWidth: 'auto',
    px: 1
  } as SxProps<Theme>,

  episodeTitle: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
    fontWeight: 500,
    mb: 1,
    lineHeight: 1.3,
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  } as SxProps<Theme>,

  airDate: {
    color: 'var(--color-text-tertiary)',
    fontSize: '0.75rem',
    mb: 1
  } as SxProps<Theme>,

  description: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.75rem',
    lineHeight: 1.4,
    mb: 1,
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    flex: 1
  } as SxProps<Theme>,

  progressContainer: {
    mt: 'auto',
    pt: 1
  } as SxProps<Theme>,

  progressBar: {
    height: 4,
    borderRadius: 'var(--border-radius-small)',
    backgroundColor: 'var(--color-background)',
    mb: 0.5,
    '& .MuiLinearProgress-bar': {
      background: 'var(--anime-gradient-sunset)',
      borderRadius: 'var(--border-radius-small)'
    }
  } as SxProps<Theme>,

  progressText: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.75rem',
    textAlign: 'right'
  } as SxProps<Theme>,

  watchedDate: {
    color: 'var(--color-text-tertiary)',
    fontSize: '0.75rem',
    fontStyle: 'italic'
  } as SxProps<Theme>
};
