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
    background: 'var(--gradient-forest)',
    borderRadius: 'var(--border-radius-small)'
  }
};

export const cardStyles: SxProps<Theme> = {
  p: 3,
  backgroundColor: 'var(--color-background-paper)',
  borderRadius: 'var(--border-radius-large)',
  boxShadow: 'var(--shadow-medium)',
  border: '1px solid var(--color-border)',
  transition: 'var(--transition-medium)',
  '&:hover': {
    boxShadow: 'var(--shadow-large)'
  }
};

export const sectionStyles: SxProps<Theme> = {
  mb: 3,
  '&:last-child': {
    mb: 0
  }
};

export const sectionTitleStyles: SxProps<Theme> = {
  fontSize: '1.1rem',
  fontWeight: 600,
  color: 'var(--color-text-primary)',
  mb: 2,
  display: 'flex',
  alignItems: 'center',
  gap: 1
};

export const settingItemStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  p: 2,
  backgroundColor: 'var(--color-background-secondary)',
  borderRadius: 'var(--border-radius-medium)',
  mb: 1,
  transition: 'var(--transition-medium)',
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)',
    transform: 'translateX(4px)'
  }
};

export const settingInfoStyles: SxProps<Theme> = {
  flex: 1
};

export const settingTitleStyles: SxProps<Theme> = {
  fontSize: '1rem',
  fontWeight: 500,
  color: 'var(--color-text-primary)',
  mb: 0.5
};

export const settingDescriptionStyles: SxProps<Theme> = {
  fontSize: '0.8rem',
  color: 'var(--color-text-secondary)',
  lineHeight: 1.4
};

export const buttonStyles: SxProps<Theme> = {
  background: 'var(--gradient-magic)',
  color: 'white',
  fontWeight: 600,
  px: 3,
  py: 1,
  borderRadius: 'var(--border-radius-medium)',
  textTransform: 'none',
  transition: 'var(--transition-medium)',
  '&:hover': {
    background: 'var(--gradient-sunset)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-glow)'
  }
};

export const dangerButtonStyles: SxProps<Theme> = {
  background: 'var(--gradient-fire)',
  color: 'white',
  fontWeight: 600,
  px: 3,
  py: 1,
  borderRadius: 'var(--border-radius-medium)',
  textTransform: 'none',
  transition: 'var(--transition-medium)',
  '&:hover': {
    background: 'linear-gradient(135deg, #d32f2f 0%, #ff5722 100%)',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 16px rgba(244, 67, 54, 0.3)'
  }
};

export const iconStyles: SxProps<Theme> = {
  fontSize: '1.2rem',
  mr: 1,
  color: 'var(--color-primary)'
};

export const switchStyles: SxProps<Theme> = {
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'var(--color-primary)',
    '& + .MuiSwitch-track': {
      backgroundColor: 'var(--color-primary)'
    }
  }
};
