import type { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  mb: 3
};

export const titleStyles: SxProps<Theme> = {
  fontSize: '1.5rem',
  fontWeight: 600,
  mb: 2,
  color: 'var(--color-text-primary)',
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  '&::before': {
    content: '""',
    width: 4,
    height: 24,
    background: 'var(--gradient-sunset)',
    borderRadius: 'var(--border-radius-small)'
  }
};

export const gridStyles: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)'
  },
  gap: 2
};

export const achievementCardStyles: SxProps<Theme> = {
  p: 3,
  backgroundColor: 'var(--color-background-paper)',
  borderRadius: 'var(--border-radius-large)',
  boxShadow: 'var(--shadow-medium)',
  border: '1px solid var(--color-border)',
  transition: 'var(--transition-medium)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-large)'
  }
};

export const unlockedCardStyles: SxProps<Theme> = {
  ...achievementCardStyles,
  background:
    'linear-gradient(135deg, rgba(233, 30, 99, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
  border: '2px solid var(--color-primary)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: 'var(--gradient-magic)'
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: 'var(--shadow-glow)',
    '&::before': {
      background: 'var(--gradient-sunset)'
    }
  }
};

export const lockedCardStyles: SxProps<Theme> = {
  ...achievementCardStyles,
  opacity: 0.6,
  filter: 'grayscale(0.3)',
  '&:hover': {
    transform: 'none',
    boxShadow: 'var(--shadow-medium)'
  }
};

export const iconContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 64,
  height: 64,
  borderRadius: '50%',
  mb: 2,
  fontSize: '2rem',
  position: 'relative'
};

export const unlockedIconStyles: SxProps<Theme> = {
  ...iconContainerStyles,
  background: 'var(--gradient-magic)',
  boxShadow: 'var(--shadow-glow)',
  animation: 'anime-pulse 2s ease-in-out infinite'
};

export const lockedIconStyles: SxProps<Theme> = {
  ...iconContainerStyles,
  background: 'var(--color-background-secondary)',
  color: 'var(--color-text-disabled)'
};

export const titleTextStyles: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  mb: 1
};

export const descriptionStyles: SxProps<Theme> = {
  fontSize: '0.9rem',
  color: 'var(--color-text-secondary)',
  mb: 2,
  lineHeight: 1.4
};

export const progressContainerStyles: SxProps<Theme> = {
  mt: 2
};

export const progressBarStyles: SxProps<Theme> = {
  width: '100%',
  height: 6,
  backgroundColor: 'var(--color-background-secondary)',
  borderRadius: 'var(--border-radius-small)',
  overflow: 'hidden',
  mb: 1
};

export const progressFillStyles: SxProps<Theme> = {
  height: '100%',
  background: 'var(--gradient-sunset)',
  borderRadius: 'var(--border-radius-small)',
  transition: 'width 0.5s ease-in-out'
};

export const progressTextStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  color: 'var(--color-text-hint)',
  textAlign: 'right'
};

export const unlockedDateStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  color: 'var(--color-primary)',
  fontWeight: 500,
  mt: 1
};

export const lockIconStyles: SxProps<Theme> = {
  position: 'absolute',
  top: 8,
  right: 8,
  color: 'var(--color-text-disabled)',
  fontSize: '1.2rem'
};

export const checkIconStyles: SxProps<Theme> = {
  position: 'absolute',
  top: 8,
  right: 8,
  color: 'var(--color-primary)',
  fontSize: '1.2rem',
  animation: 'anime-glow 2s ease-in-out infinite'
};
