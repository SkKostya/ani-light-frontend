import type { SxProps, Theme } from '@mui/material';

export const filtersContainerStyles: SxProps<Theme> = {
  mb: 3
};

export const searchRowStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 2,
  mb: 2,
  alignItems: { xs: 'stretch', sm: 'center' }
};

export const searchFieldStyles: SxProps<Theme> = {
  flex: 1,
  maxWidth: { xs: '100%', sm: 400 }
};

export const filtersButtonStyles: SxProps<Theme> = () => ({
  borderColor: 'divider',
  color: 'text.secondary',
  '&:hover': {
    borderColor: 'primary.main',
    backgroundColor: 'primary.50'
  },
  '&.active': {
    borderColor: 'primary.main',
    color: 'primary.main',
    backgroundColor: 'primary.50'
  }
});

export const searchButtonStyles: SxProps<Theme> = {
  color: 'white',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)'
  }
};

export const filtersPanelStyles: SxProps<Theme> = {
  p: 3,
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 2,
  backgroundColor: 'background.paper',
  boxShadow: 'var(--shadow-small)'
};

export const filtersRowStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 2,
  mb: 2,
  flexWrap: 'wrap'
};

export const formControlStyles: SxProps<Theme> = {
  minWidth: 120,
  flex: { xs: '1 1 100%', sm: '0 1 auto' }
};

export const actionsRowStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  flexDirection: { xs: 'column', sm: 'row' }
};

export const applyButtonStyles: SxProps<Theme> = {
  color: 'white',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)'
  }
};

export const resetButtonStyles: SxProps<Theme> = {
  '&:hover': {
    backgroundColor: 'error.50',
    borderColor: 'error.main',
    color: 'error.main'
  }
};
