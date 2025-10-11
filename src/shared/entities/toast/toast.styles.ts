import type { SxProps, Theme } from '@mui/material';

export const getToastStyles = (
  type: string,
  isHovered?: boolean
): SxProps<Theme> => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  gap: 1,
  p: 2,
  minWidth: 280,
  maxWidth: 360,
  overflow: 'hidden',
  borderRadius: 'var(--border-radius-large)',
  boxShadow: isHovered ? 'var(--shadow-large)' : 'var(--shadow-medium)',
  backdropFilter: 'blur(10px)',
  border: '1px solid',
  animation: 'slideIn 0.3s ease-out',
  transition: 'all 0.3s ease-in-out',
  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
  pointerEvents: 'auto', // Важно! Toast должен ловить события мыши
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    borderRadius: 'var(--border-radius-large) var(--border-radius-large) 0 0'
  },
  ...(type === 'success' && {
    backgroundColor: 'rgba(76, 175, 80, 0.3)',
    borderColor: 'var(--color-accent-green)',
    '&::before': {
      background: 'var(--gradient-forest)'
    }
  }),
  ...(type === 'error' && {
    backgroundColor: 'rgba(244, 67, 54, 0.3)',
    borderColor: 'var(--color-accent-red)',
    '&::before': {
      background: 'var(--gradient-fire)'
    }
  }),
  ...(type === 'warning' && {
    backgroundColor: 'rgba(255, 152, 0, 0.3)',
    borderColor: 'var(--color-accent-orange)',
    '&::before': {
      background: 'var(--gradient-sunset)'
    }
  }),
  ...(type === 'info' && {
    backgroundColor: 'rgba(33, 150, 243, 0.3)',
    borderColor: 'var(--color-accent-blue)',
    '&::before': {
      background: 'var(--gradient-ocean)'
    }
  }),
  ...(type === 'default' && {
    backgroundColor: 'var(--color-background-paper)',
    borderColor: 'var(--color-border)',
    '&::before': {
      background: 'var(--gradient-magic)'
    }
  })
});

export const toastContainerStyles: SxProps<Theme> = {
  position: 'fixed',
  zIndex: 2000,
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  pointerEvents: 'none',
  '&[data-position="top-left"]': {
    top: 16,
    left: 16
  },
  '&[data-position="top-right"]': {
    top: 16,
    right: 16
  },
  '&[data-position="bottom-left"]': {
    bottom: 16,
    left: 16
  },
  '&[data-position="bottom-right"]': {
    bottom: 16,
    right: 16
  },
  '&[data-position="top-center"]': {
    top: 16,
    left: '50%',
    transform: 'translateX(-50%)'
  },
  '&[data-position="bottom-center"]': {
    bottom: 16,
    left: '50%',
    transform: 'translateX(-50%)'
  }
};

export const toastContentStyles: SxProps<Theme> = {
  flex: 1,
  minWidth: 0
};

export const toastTitleStyles: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: 600,
  lineHeight: 1.4,
  mb: 0.5,
  color: 'var(--color-text-primary)'
};

export const toastMessageStyles: SxProps<Theme> = {
  fontSize: '0.875rem',
  lineHeight: 1.5,
  color: 'var(--color-text-secondary)'
};

export const toastCloseButtonStyles: SxProps<Theme> = {
  position: 'absolute',
  top: 8,
  right: 8,
  minWidth: 'auto',
  width: 32,
  height: 32,
  borderRadius: '50%',
  backgroundColor: 'transparent',
  color: 'var(--color-text-secondary)',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    color: 'var(--color-text-primary)'
  }
};

export const toastProgressStyles: (
  duration: number,
  isPaused?: boolean
) => SxProps<Theme> = (duration, isPaused = false) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: 3,
  backgroundColor: 'rgba(255, 255, 255, 0.3)',
  borderRadius: '0 0 var(--border-radius-large) var(--border-radius-large)',
  overflow: 'hidden',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    background: 'var(--gradient-magic)',
    animation: isPaused ? 'none' : `progress ${duration}ms linear forwards`,
    transform: isPaused ? 'translateX(-100%)' : 'none'
  }
});
