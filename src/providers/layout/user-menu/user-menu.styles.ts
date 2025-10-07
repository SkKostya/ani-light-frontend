import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента UserMenu
 */

export const buttonStyles: SxProps<Theme> = {
  color: 'text.primary',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: 'primary.main'
  }
};

export const getAvatarStyles = (
  size: 'small' | 'medium' | 'large'
): SxProps<Theme> => ({
  width: size === 'small' ? 24 : size === 'large' ? 40 : 32,
  height: size === 'small' ? 24 : size === 'large' ? 40 : 32,
  background: 'var(--gradient-magic)',
  fontSize: size === 'small' ? '0.75rem' : size === 'large' ? '1.25rem' : '1rem'
});

export const menuStyles: SxProps<Theme> = {
  '& .MuiPaper-root': {
    background: 'var(--color-background-paper)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-medium)',
    minWidth: 160,
    mt: 1
  }
};

export const menuItemStyles: SxProps<Theme> = {
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)'
  }
};

export const profileIconStyles: SxProps<Theme> = {
  mr: 2,
  color: 'primary.main'
};

export const settingsIconStyles: SxProps<Theme> = {
  mr: 2,
  color: 'text.secondary'
};

export const logoutIconStyles: SxProps<Theme> = {
  mr: 2,
  color: 'error.main'
};

export const logoutTextStyles: SxProps<Theme> = {
  color: 'error.main'
};
