import type { SxProps, Theme } from '@mui/material';

export const filtersContainerStyles: SxProps<Theme> = {
  mb: 3
};

export const searchRowStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  gap: 2,
  mb: 3,
  alignItems: { xs: 'stretch', sm: 'center' }
};

export const searchFieldStyles: SxProps<Theme> = {
  flex: 1,
  maxWidth: { xs: '100%', sm: 400 },
  '& .MuiOutlinedInput-root': {
    borderRadius: 'var(--border-radius-large)',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-primary)',
      boxShadow: '0 0 0 2px rgba(233, 30, 99, 0.1)'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-primary)',
      boxShadow: '0 0 0 3px rgba(233, 30, 99, 0.1)'
    }
  }
};

export const filtersButtonStyles: SxProps<Theme> = () => ({
  borderColor: 'divider',
  color: 'text.secondary',
  borderRadius: 'var(--border-radius-medium)',
  '&:hover': {
    borderColor: 'primary.main',
    backgroundColor: 'primary.50',
    transform: 'translateY(-1px)'
  },
  '&.active': {
    borderColor: 'primary.main',
    color: 'primary.main',
    backgroundColor: 'primary.50'
  }
});

export const searchButtonStyles: SxProps<Theme> = {
  color: 'white',
  borderRadius: 'var(--border-radius-large)',
  px: 3,
  py: 1.5,
  minWidth: { xs: '100%', sm: 'auto' },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(233, 30, 99, 0.3)'
  }
};

export const filtersPanelStyles: SxProps<Theme> = {
  p: { xs: 2, sm: 3 },
  border: '1px solid',
  borderColor: 'divider',
  borderRadius: 'var(--border-radius-large)',
  backgroundColor: 'background.paper',
  boxShadow: 'var(--shadow-medium)',
  mt: 2
};

export const filtersGridStyles: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)'
  },
  gap: 2,
  mb: 3
};

export const formControlStyles: SxProps<Theme> = {
  minWidth: 120,
  '& .MuiOutlinedInput-root': {
    borderRadius: 'var(--border-radius-medium)',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-primary)'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-primary)',
      boxShadow: '0 0 0 2px rgba(233, 30, 99, 0.1)'
    }
  }
};

export const ratingInputStyles: SxProps<Theme> = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 'var(--border-radius-medium)',
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-primary)'
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--color-primary)',
      boxShadow: '0 0 0 2px rgba(233, 30, 99, 0.1)'
    }
  }
};

export const checkboxStyles: SxProps<Theme> = {
  '&.Mui-checked': {
    color: 'var(--color-primary)'
  },
  '&:hover': {
    backgroundColor: 'rgba(233, 30, 99, 0.04)'
  }
};

export const actionsRowStyles: SxProps<Theme> = {
  display: 'flex',
  gap: 2,
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'flex-end'
};

export const applyButtonStyles: SxProps<Theme> = {
  color: 'white',
  borderRadius: 'var(--border-radius-large)',
  px: 3,
  py: 1.5,
  minWidth: { xs: '100%', sm: 140 },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(255, 152, 0, 0.3)'
  }
};

export const resetButtonStyles: SxProps<Theme> = {
  borderRadius: 'var(--border-radius-large)',
  px: 3,
  py: 1.5,
  minWidth: { xs: '100%', sm: 140 },
  '&:hover': {
    backgroundColor: 'error.50',
    borderColor: 'error.main',
    color: 'error.main',
    transform: 'translateY(-1px)'
  }
};

export const filterChipStyles: SxProps<Theme> = {
  borderRadius: 'var(--border-radius-medium)',
  '&:hover': {
    backgroundColor: 'primary.50',
    transform: 'translateY(-1px)'
  }
};

export const sectionTitleStyles: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'text.primary',
  mb: 2,
  display: 'flex',
  alignItems: 'center',
  gap: 1
};
