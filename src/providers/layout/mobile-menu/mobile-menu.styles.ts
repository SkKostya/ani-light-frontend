import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента MobileMenu
 */

export const drawerStyles: SxProps<Theme> = {
  '& .MuiDrawer-paper': {
    border: 'none',
    boxShadow: 'var(--shadow-large)'
  }
};

export const drawerContentStyles: SxProps<Theme> = {
  width: 280,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'var(--color-background-paper)'
};

export const headerStyles: SxProps<Theme> = {
  p: 2,
  borderBottom: '1px solid var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between'
};

export const logoStyles: SxProps<Theme> = {
  fontWeight: 700,
  background: 'var(--gradient-magic)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
};

export const closeButtonStyles: SxProps<Theme> = {
  color: 'text.primary'
};

export const listStyles: SxProps<Theme> = {
  flex: 1,
  py: 1
};

export const listItemButtonStyles: SxProps<Theme> = {
  mx: 1,
  borderRadius: 'var(--border-radius-medium)',
  mb: 0.5,
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)',
    transform: 'translateX(4px)'
  }
};

export const listItemIconStyles: SxProps<Theme> = {
  minWidth: 40,
  fontSize: '1.25rem'
};

export const listItemTextStyles: SxProps<Theme> = {
  fontSize: '0.875rem',
  fontWeight: 500
};

export const controlsStyles: SxProps<Theme> = {
  p: 2,
  borderTop: '1px solid var(--color-border)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 2
};
