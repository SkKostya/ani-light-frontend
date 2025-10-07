import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента Navigation
 */

export const navigationContainerStyles: SxProps<Theme> = {
  width: '100%',
  borderBottom: 1,
  borderColor: 'divider',
  backgroundColor: 'var(--color-background-paper)',
  boxShadow: 'var(--shadow-small)'
};

export const mobileTabsStyles: SxProps<Theme> = {
  '& .MuiTab-root': {
    minWidth: 'auto',
    px: 2,
    py: 1.5,
    color: 'text.secondary',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: 'primary.main',
      transform: 'translateY(-2px)'
    },
    '&.Mui-selected': {
      color: 'primary.main',
      fontWeight: 600
    }
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'primary.main',
    height: 3,
    borderRadius: '2px 2px 0 0'
  }
};

export const desktopTabsStyles: SxProps<Theme> = {
  '& .MuiTab-root': {
    minHeight: 48,
    px: 3,
    py: 1.5,
    color: 'text.secondary',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      color: 'primary.main',
      transform: 'translateY(-2px)',
      backgroundColor: 'var(--color-background-elevated)'
    },
    '&.Mui-selected': {
      color: 'primary.main',
      fontWeight: 600,
      backgroundColor: 'var(--color-background-elevated)'
    }
  },
  '& .MuiTabs-indicator': {
    backgroundColor: 'primary.main',
    height: 3,
    borderRadius: '2px 2px 0 0'
  }
};

export const tabIconStyles: SxProps<Theme> = {
  '& .MuiTab-iconWrapper': {
    fontSize: '1.25rem'
  }
};

export const desktopTabIconStyles: SxProps<Theme> = {
  '& .MuiTab-iconWrapper': {
    fontSize: '1.25rem',
    mr: 1
  }
};
