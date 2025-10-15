import type { SxProps, Theme } from '@mui/material';

export const videoControlsStyles = {
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.8))',
    padding: '16px',
    zIndex: 1000,
    opacity: 0,
    transition: 'opacity 0.3s ease-in-out',
    '&:hover': {
      opacity: 1
    }
  } as SxProps<Theme>,

  progressContainer: {
    width: '100%',
    mb: 2
  } as SxProps<Theme>,

  progressBar: {
    position: 'relative',
    width: '100%',
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 3,
    cursor: 'pointer',
    '&:hover': {
      height: 8
    }
  } as SxProps<Theme>,

  progressFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    background: 'var(--gradient-magic)',
    borderRadius: 3,
    transition: 'width 0.1s ease-in-out'
  } as SxProps<Theme>,

  progressThumb: {
    position: 'absolute',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: 16,
    height: 16,
    backgroundColor: 'var(--color-primary)',
    borderRadius: '50%',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    opacity: 0,
    transition: 'opacity 0.2s ease-in-out',
    '&:hover': {
      opacity: 1
    }
  } as SxProps<Theme>,

  mainControls: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  } as SxProps<Theme>,

  controlsGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: 1
  } as SxProps<Theme>,

  controlButton: {
    color: 'white',
    padding: 1,
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      transform: 'scale(1.1)'
    },
    '&:active': {
      transform: 'scale(0.95)'
    }
  } as SxProps<Theme>,

  activeButton: {
    backgroundColor: 'var(--color-primary)',
    '&:hover': {
      backgroundColor: 'var(--color-primary)',
      opacity: 0.8
    }
  } as SxProps<Theme>,

  timeText: {
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: 500,
    minWidth: '80px',
    textAlign: 'center'
  } as SxProps<Theme>,

  volumeContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    minWidth: '120px'
  } as SxProps<Theme>,

  volumeSlider: {
    color: 'var(--color-primary)',
    '& .MuiSlider-track': {
      backgroundColor: 'var(--color-primary)'
    },
    '& .MuiSlider-thumb': {
      backgroundColor: 'var(--color-primary)',
      '&:hover': {
        boxShadow: '0 0 0 8px rgba(233, 30, 99, 0.16)'
      }
    },
    '& .MuiSlider-rail': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
    }
  } as SxProps<Theme>,

  settingsContainer: {
    position: 'relative'
  } as SxProps<Theme>
};
