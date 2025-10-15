import type { SxProps, Theme } from '@mui/material';

export const settingsPanelStyles = {
  panel: {
    position: 'absolute',
    bottom: '100%',
    right: 0,
    width: 280,
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    borderRadius: 'var(--border-radius-medium)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: 'var(--shadow-large)',
    zIndex: 1001,
    mb: 1
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 16px',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
  } as SxProps<Theme>,

  title: {
    color: 'white',
    fontSize: '1rem',
    fontWeight: 600
  } as SxProps<Theme>,

  closeButton: {
    color: 'rgba(255, 255, 255, 0.7)',
    padding: 0.5,
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'white'
    }
  } as SxProps<Theme>,

  content: {
    padding: '16px'
  } as SxProps<Theme>,

  settingItem: {
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    mb: 2,
    '&:last-child': {
      mb: 0
    }
  } as SxProps<Theme>,

  settingLabel: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '0.875rem',
    fontWeight: 500
  } as SxProps<Theme>,

  select: {
    minWidth: '100%',
    '& .MuiOutlinedInput-root': {
      color: 'white',
      '& fieldset': {
        borderColor: 'rgba(255, 255, 255, 0.3)'
      },
      '&:hover fieldset': {
        borderColor: 'var(--color-primary)'
      },
      '&.Mui-focused fieldset': {
        borderColor: 'var(--color-primary)'
      }
    },
    '& .MuiInputLabel-root': {
      color: 'rgba(255, 255, 255, 0.7)',
      '&.Mui-focused': {
        color: 'var(--color-primary)'
      }
    },
    '& .MuiSelect-icon': {
      color: 'rgba(255, 255, 255, 0.7)'
    }
  } as SxProps<Theme>
};
