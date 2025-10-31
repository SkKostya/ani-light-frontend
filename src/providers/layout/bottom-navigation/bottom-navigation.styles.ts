import type { SxProps, Theme } from '@mui/material';

/**
 * Стили для компонента BottomNavigation
 */

export const bottomNavigationStyles: SxProps<Theme> = {
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: (theme) => theme.zIndex.appBar,
  backgroundColor: 'var(--color-background-paper)',
  borderTop: '1px solid var(--color-border)',
  boxShadow: 'var(--shadow-medium)',
  '& .MuiBottomNavigation-root': {
    backgroundColor: 'transparent',
    height: '64px',
    '& .MuiBottomNavigationAction-root': {
      color: 'text.secondary',
      minWidth: 'auto',
      paddingBottom: '8px',
      paddingInline: '8px',
      '&.Mui-selected': {
        color: 'primary.main',
        '& .MuiSvgIcon-root': {
          transform: 'scale(1.1)',
          transition: 'transform 0.3s ease-in-out'
        }
      },
      '& .MuiBottomNavigationAction-label': {
        fontSize: '0.75rem',
        fontWeight: 500,
        marginTop: '4px',
        '&.Mui-selected': {
          fontSize: '0.75rem',
          fontWeight: 600
        }
      }
    }
  }
};
