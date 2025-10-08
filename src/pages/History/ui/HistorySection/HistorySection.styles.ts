import { SxProps, Theme } from '@mui/material';

export const historySectionStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    px: { xs: 1, sm: 1.5 },
    py: { xs: 0.75, sm: 1 },
    backgroundColor: 'var(--color-background-secondary)',
    borderRadius: 'var(--border-radius-medium)',
    border: '1px solid var(--color-border)',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    backdropFilter: 'blur(10px)'
  } as SxProps<Theme>,

  title: {
    fontSize: { xs: '1rem', sm: '1.1rem' },
    fontWeight: 600,
    color: 'var(--color-text-primary)',
    background:
      'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  } as SxProps<Theme>,

  count: {
    fontSize: { xs: '0.8rem', sm: '0.875rem' },
    fontWeight: 500,
    color: 'var(--color-text-secondary)',
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    px: { xs: 1, sm: 1.5 },
    py: { xs: 0.25, sm: 0.5 },
    borderRadius: 'var(--border-radius-small)',
    minWidth: 'fit-content'
  } as SxProps<Theme>,

  cardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 1, sm: 1.5 }
  } as SxProps<Theme>
};
