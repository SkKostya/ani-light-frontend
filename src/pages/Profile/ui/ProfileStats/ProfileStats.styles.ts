import { SxProps, Theme } from '@mui/material';

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
    background: 'var(--gradient-magic)',
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

export const cardStyles: SxProps<Theme> = {
  p: 3,
  backgroundColor: 'var(--color-background-paper)',
  borderRadius: 'var(--border-radius-large)',
  boxShadow: 'var(--shadow-medium)',
  border: '1px solid var(--color-border)',
  transition: 'var(--transition-medium)',
  position: 'relative',
  overflow: 'hidden',
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
    boxShadow: 'var(--shadow-large)',
    '&::before': {
      background: 'var(--gradient-sunset)'
    }
  }
};

export const iconContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  borderRadius: '50%',
  mb: 2,
  fontSize: '1.5rem'
};

export const valueStyles: SxProps<Theme> = {
  fontSize: '2rem',
  fontWeight: 700,
  color: 'var(--color-text-primary)',
  mb: 0.5,
  lineHeight: 1
};

export const labelStyles: SxProps<Theme> = {
  fontSize: '0.9rem',
  color: 'var(--color-text-secondary)',
  mb: 1
};

export const descriptionStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  color: 'var(--color-text-hint)',
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
  borderRadius: 'var(--border-radius-small)',
  transition: 'width 0.5s ease-in-out'
};

export const progressTextStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  color: 'var(--color-text-hint)',
  textAlign: 'right'
};

// Стили для разных типов карточек
export const getCardIconStyles = (type: string): SxProps<Theme> => ({
  ...iconContainerStyles,
  background: (() => {
    switch (type) {
      case 'watched':
        return 'var(--gradient-ocean)';
      case 'watching':
        return 'var(--gradient-sunset)';
      case 'wantToWatch':
        return 'var(--gradient-forest)';
      case 'favorites':
        return 'var(--gradient-night)';
      case 'episodes':
        return 'var(--gradient-fire)';
      case 'hours':
        return 'var(--gradient-ice)';
      default:
        return 'var(--gradient-magic)';
    }
  })()
});

export const getProgressFillStyles = (type: string): SxProps<Theme> => ({
  ...progressFillStyles,
  background: (() => {
    switch (type) {
      case 'watched':
        return 'var(--gradient-ocean)';
      case 'watching':
        return 'var(--gradient-sunset)';
      case 'wantToWatch':
        return 'var(--gradient-forest)';
      case 'favorites':
        return 'var(--gradient-night)';
      case 'episodes':
        return 'var(--gradient-fire)';
      case 'hours':
        return 'var(--gradient-ice)';
      default:
        return 'var(--gradient-magic)';
    }
  })()
});
