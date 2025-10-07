import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента Header
 */

export const appBarStyles: SxProps<Theme> = {
  position: 'sticky',
  elevation: 0,
  backgroundColor: 'var(--color-background-paper)',
  borderBottom: '1px solid var(--color-border)',
  boxShadow: 'var(--shadow-small)',
  zIndex: (theme) => theme.zIndex.appBar
};

export const toolbarStyles: SxProps<Theme> = {
  minHeight: { xs: 56, md: 64 },
  px: { xs: 2, md: 3 },
  gap: 2
};

export const mobileMenuButtonStyles: SxProps<Theme> = {
  color: 'text.primary',
  mr: 1
};

export const logoContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)'
  }
};

export const logoTextStyles: SxProps<Theme> = {
  fontWeight: 700,
  background: 'var(--gradient-magic)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontSize: { xs: '1.5rem', md: '1.75rem' }
};

export const searchFormStyles: SxProps<Theme> = {
  flexGrow: 1,
  maxWidth: { xs: '100%', md: 400 },
  mx: { xs: 0, md: 2 }
};

export const searchContainerStyles: SxProps<Theme> = {
  position: 'relative',
  backgroundColor: 'var(--color-background-elevated)',
  borderRadius: 'var(--border-radius-large)',
  border: '1px solid var(--color-border)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    borderColor: 'primary.main',
    boxShadow: 'var(--shadow-small)'
  },
  '&:focus-within': {
    borderColor: 'primary.main',
    boxShadow: 'var(--shadow-glow)'
  }
};

export const searchInputContainerStyles: SxProps<Theme> = {
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  height: 40
};

export const searchIconStyles: SxProps<Theme> = {
  color: 'text.secondary',
  mr: 1,
  fontSize: '1.25rem'
};

export const searchInputStyles: SxProps<Theme> = {
  flex: 1,
  color: 'text.primary',
  '& input': {
    padding: 0,
    fontSize: '0.875rem',
    '&::placeholder': {
      color: 'text.hint',
      opacity: 1
    }
  }
};

export const controlsContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: { xs: 0.5, md: 1 }
};
