import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента ErrorTemplate в аниме-стиле
 */

export const containerStyles: SxProps<Theme> = {
  minHeight: '60vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  py: { xs: 4, md: 6 },
  px: { xs: 2, md: 3 }
};

export const iconStyles: SxProps<Theme> = {
  color: 'primary.main',
  mb: 3,
  opacity: 0.8,
  animation: 'pulse 2s ease-in-out infinite',
  '& svg': {
    width: '64px',
    height: '64px'
  },
  '@keyframes pulse': {
    '0%': {
      transform: 'scale(1)',
      opacity: 0.8
    },
    '50%': {
      transform: 'scale(1.05)',
      opacity: 1
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 0.8
    }
  }
};

export const titleStyles: SxProps<Theme> = {
  fontWeight: 700,
  fontSize: { xs: '2rem', md: '3rem' },
  lineHeight: 1.2,
  mb: 3,
  background: 'var(--gradient-magic)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textAlign: 'center'
};

export const descriptionStyles: SxProps<Theme> = {
  fontSize: { xs: '1rem', md: '1.125rem' },
  lineHeight: 1.6,
  color: 'text.secondary',
  maxWidth: '500px',
  mx: 'auto',
  mb: 2
};

export const linkStyles: SxProps<Theme> = {
  minWidth: { xs: '140px', md: '160px' },
  height: { xs: '44px', md: '48px' },
  borderRadius: 'var(--border-radius-large)',
  fontWeight: 600,
  fontSize: { xs: '0.875rem', md: '1rem' },
  textTransform: 'none',
  boxShadow: 'var(--shadow-small)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-medium)',
    '&.MuiButton-contained': {
      background: 'var(--gradient-sunset)',
      backgroundSize: '200% 200%',
      animation: 'gradientShift 3s ease infinite'
    },
    '&.MuiButton-outlined': {
      borderColor: 'primary.main',
      color: 'primary.main',
      backgroundColor: 'var(--color-background-elevated)'
    }
  },
  '&.MuiButton-contained': {
    background: 'var(--gradient-magic)',
    backgroundSize: '200% 200%',
    animation: 'gradientShift 3s ease infinite',
    '&:hover': {
      background: 'var(--gradient-sunset)'
    }
  },
  '&.MuiButton-outlined': {
    borderColor: 'primary.main',
    color: 'primary.main',
    borderWidth: '2px',
    '&:hover': {
      borderWidth: '2px'
    }
  },
  '@keyframes gradientShift': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  }
};
