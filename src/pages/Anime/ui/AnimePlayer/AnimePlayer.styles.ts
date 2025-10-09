import type { SxProps, Theme } from '@mui/material';

export const animePlayerStyles = {
  container: {
    position: 'relative',
    width: '100%',
    aspectRatio: '16/9',
    borderRadius: 'var(--border-radius-large)',
    overflow: 'hidden'
  } as SxProps<Theme>,

  playerPlaceholder: {
    position: 'relative',
    width: '100%',
    height: '100%',
    background:
      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  } as SxProps<Theme>,

  placeholderContent: {
    textAlign: 'center',
    zIndex: 2,
    position: 'relative'
  } as SxProps<Theme>,

  placeholderTitle: {
    color: 'white',
    fontWeight: 700,
    mb: 2,
    textShadow: '0 0 20px rgba(0, 0, 0, 0.5)',
    fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }
  } as SxProps<Theme>,

  placeholderSubtitle: {
    color: 'rgba(255, 255, 255, 0.9)',
    mb: 4,
    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
    textShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
  } as SxProps<Theme>,

  playButton: {
    background: 'var(--gradient-magic)',
    color: 'white',
    px: 4,
    py: 1.5,
    fontSize: '1.1rem',
    fontWeight: 600,
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-glow)',
    textTransform: 'none',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 8px 25px rgba(233, 30, 99, 0.4)',
      background: 'var(--gradient-magic)'
    },
    '&:active': {
      transform: 'translateY(0)'
    },
    transition: 'all 0.3s ease-in-out'
  } as SxProps<Theme>,

  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none'
  } as SxProps<Theme>,

  glowCircle1: {
    position: 'absolute',
    top: '10%',
    left: '10%',
    width: 100,
    height: 100,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
    animation: 'anime-float 6s ease-in-out infinite'
  } as SxProps<Theme>,

  glowCircle2: {
    position: 'absolute',
    top: '60%',
    right: '15%',
    width: 60,
    height: 60,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
    animation: 'anime-float 8s ease-in-out infinite reverse'
  } as SxProps<Theme>,

  glowCircle3: {
    position: 'absolute',
    bottom: '20%',
    left: '20%',
    width: 80,
    height: 80,
    borderRadius: '50%',
    background:
      'radial-gradient(circle, rgba(255, 255, 255, 0.06) 0%, transparent 70%)',
    animation: 'anime-float 10s ease-in-out infinite'
  } as SxProps<Theme>
};
