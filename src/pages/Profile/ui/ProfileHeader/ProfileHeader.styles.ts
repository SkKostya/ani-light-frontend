import type { SxProps, Theme } from '@mui/material';

export const containerStyles: SxProps<Theme> = {
  position: 'relative',
  background: 'var(--gradient-magic)',
  borderRadius: 'var(--border-radius-large)',
  p: 3,
  mb: 3,
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 0, 0, 0.1)',
    zIndex: 1
  }
};

export const contentStyles: SxProps<Theme> = {
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  alignItems: { xs: 'center', sm: 'flex-start' },
  gap: 3
};

export const avatarContainerStyles: SxProps<Theme> = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1
};

export const avatarStyles: SxProps<Theme> = {
  width: { xs: 120, sm: 140 },
  height: { xs: 120, sm: 140 },
  border: '4px solid rgba(255, 255, 255, 0.3)',
  borderRadius: '50%',
  boxShadow: 'var(--shadow-large)',
  transition: 'var(--transition-medium)',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: 'var(--shadow-glow)'
  }
};

export const editButtonStyles: SxProps<Theme> = {
  position: 'absolute',
  bottom: 0,
  right: 0,
  minWidth: 'auto',
  width: 40,
  height: 40,
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: 'var(--color-primary)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transform: 'scale(1.1)'
  },
  transition: 'var(--transition-medium)'
};

export const infoContainerStyles: SxProps<Theme> = {
  flex: 1,
  color: 'white',
  textAlign: { xs: 'center', sm: 'left' }
};

export const usernameStyles: SxProps<Theme> = {
  fontSize: { xs: '1.5rem', sm: '2rem' },
  fontWeight: 700,
  mb: 1,
  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)'
};

export const bioStyles: SxProps<Theme> = {
  fontSize: { xs: '0.9rem', sm: '1rem' },
  opacity: 0.9,
  mb: 2,
  lineHeight: 1.5
};

export const statsRowStyles: SxProps<Theme> = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: { xs: 2, sm: 3 },
  justifyContent: { xs: 'center', sm: 'flex-start' }
};

export const statItemStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  minWidth: 80,
  p: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: 'var(--border-radius-medium)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'var(--transition-medium)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)'
  }
};

export const statValueStyles: SxProps<Theme> = {
  fontSize: '1.2rem',
  fontWeight: 700,
  color: 'white',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
};

export const statLabelStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  opacity: 0.8,
  textAlign: 'center',
  mt: 0.5
};

export const levelContainerStyles: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 1,
  mt: 2
};

export const levelStyles: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'white',
  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
};

export const progressBarStyles: SxProps<Theme> = {
  width: '100%',
  height: 8,
  backgroundColor: 'rgba(255, 255, 255, 0.2)',
  borderRadius: 'var(--border-radius-small)',
  overflow: 'hidden'
};

export const progressFillStyles: SxProps<Theme> = {
  height: '100%',
  background: 'linear-gradient(90deg, #ffeb3b 0%, #ff9800 100%)',
  borderRadius: 'var(--border-radius-small)',
  transition: 'width 0.5s ease-in-out'
};
