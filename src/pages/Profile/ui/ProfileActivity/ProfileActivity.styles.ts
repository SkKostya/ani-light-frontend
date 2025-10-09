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
    background: 'var(--gradient-ocean)',
    borderRadius: 'var(--border-radius-small)'
  }
};

export const activityItemStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 2,
  p: 2,
  backgroundColor: 'var(--color-background-paper)',
  borderRadius: 'var(--border-radius-medium)',
  mb: 1,
  border: '1px solid var(--color-border)',
  transition: 'var(--transition-medium)',
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)',
    transform: 'translateX(4px)',
    boxShadow: 'var(--shadow-small)'
  }
};

export const iconContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '50%',
  flexShrink: 0
};

export const getIconStyles = (type: string): SxProps<Theme> => ({
  ...iconContainerStyles,
  background: (() => {
    switch (type) {
      case 'watched':
        return 'var(--gradient-ocean)';
      case 'added_to':
        return 'var(--gradient-forest)';
      case 'rated':
        return 'var(--gradient-sunset)';
      case 'reviewed':
        return 'var(--gradient-night)';
      default:
        return 'var(--gradient-magic)';
    }
  })()
});

export const contentStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0
};

export const activityTextStyles: SxProps<Theme> = {
  fontSize: '0.9rem',
  color: 'var(--color-text-primary)',
  mb: 0.5,
  lineHeight: 1.4
};

export const animeTitleStyles: SxProps<Theme> = {
  fontWeight: 600,
  color: 'var(--color-primary)',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline'
  }
};

export const detailsStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  color: 'var(--color-text-secondary)',
  mb: 0.5
};

export const timestampStyles: SxProps<Theme> = {
  fontSize: '0.7rem',
  color: 'var(--color-text-hint)'
};

export const emptyStateStyles: SxProps<Theme> = {
  textAlign: 'center',
  py: 4,
  color: 'var(--color-text-secondary)'
};

export const emptyIconStyles: SxProps<Theme> = {
  fontSize: '3rem',
  mb: 2,
  opacity: 0.5
};

export const emptyTitleStyles: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 600,
  mb: 1,
  color: 'var(--color-text-primary)'
};

export const emptyDescriptionStyles: SxProps<Theme> = {
  fontSize: '0.9rem',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.4
};
