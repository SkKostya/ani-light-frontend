import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента LanguageSwitcher
 */

export const buttonStyles: SxProps<Theme> = {
  color: 'text.primary',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.1)',
    color: 'primary.main'
  }
};

export const menuStyles: SxProps<Theme> = {
  '& .MuiPaper-root': {
    background: 'var(--color-background-paper)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-medium)',
    minWidth: 120
  }
};

export const menuItemStyles: SxProps<Theme> = {
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)'
  }
};

export const getMenuItemStyles = (isSelected: boolean): SxProps<Theme> => ({
  color: isSelected ? 'primary.main' : 'text.primary',
  fontWeight: isSelected ? 600 : 400,
  '&:hover': {
    backgroundColor: 'var(--color-background-elevated)'
  }
});
