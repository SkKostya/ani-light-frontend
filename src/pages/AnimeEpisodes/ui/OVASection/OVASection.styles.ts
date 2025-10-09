import type { SxProps, Theme } from '@mui/material';

export const ovaSectionStyles = {
  container: {
    mt: 2
  } as SxProps<Theme>,

  description: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    mb: 3,
    textAlign: 'center',
    fontStyle: 'italic'
  } as SxProps<Theme>,

  grid: {
    mt: 1
  } as SxProps<Theme>
};
