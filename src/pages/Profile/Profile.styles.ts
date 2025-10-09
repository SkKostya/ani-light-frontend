import type { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  minHeight: '100vh',
  backgroundColor: 'var(--color-background)',
  py: { xs: 2, sm: 3, md: 4 }
};

export const contentStyles: SxProps<Theme> = {
  maxWidth: 1200,
  mx: 'auto',
  px: { xs: 2, sm: 3, md: 4 }
};

export const tabsContainerStyles: SxProps<Theme> = {
  mb: 3,
  backgroundColor: 'var(--color-background-paper)',
  borderRadius: 'var(--border-radius-large)',
  boxShadow: 'var(--shadow-medium)',
  border: '1px solid var(--color-border)',
  overflow: 'hidden',
  '& .MuiTabs-scrollButtons': {
    color: 'var(--color-primary)',
    '&.Mui-disabled': {
      opacity: 0.3
    }
  },
  '& .MuiTabs-indicator': {
    display: 'none' // Скрываем стандартный индикатор, так как у нас есть градиентный фон
  }
};

export const tabStyles: SxProps<Theme> = {
  textTransform: 'none',
  fontWeight: 600,
  fontSize: { xs: '0.75rem', sm: '0.85rem', md: '0.9rem' },
  px: { xs: 1, sm: 1.5, md: 2 },
  py: { xs: 1.2, sm: 1.5, md: 2 },
  minHeight: 'auto',
  minWidth: { xs: 'auto', sm: '120px' },
  transition: 'var(--transition-medium)',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  borderRadius: {
    xs: 'var(--border-radius-small)',
    sm: 'var(--border-radius-medium)'
  },
  mx: { xs: 0.5, sm: 0 },
  '&.Mui-selected': {
    background: 'var(--gradient-magic)',
    color: 'white',
    boxShadow: 'var(--shadow-small)',
    '&:hover': {
      background: 'var(--gradient-sunset)',
      transform: 'translateY(-1px)'
    }
  },
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)',
    transform: 'translateY(-1px)'
  }
};

export const tabPanelStyles: SxProps<Theme> = {
  p: 0
};

export const loadingStyles: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 400,
  flexDirection: 'column',
  gap: 2
};

export const errorStyles: SxProps<Theme> = {
  textAlign: 'center',
  py: 4,
  color: 'var(--color-text-secondary)'
};
