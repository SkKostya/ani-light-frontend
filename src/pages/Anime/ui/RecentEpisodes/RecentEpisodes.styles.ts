import type { SxProps, Theme } from '@mui/material';

export const recentEpisodesStyles = {
  container: {
    width: '100%'
  } as SxProps<Theme>,

  chipContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
    gap: 1.5
  } as SxProps<Theme>,

  chip: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    height: 'auto',
    borderRadius: 'var(--border-radius-large)',
    border: '1px solid var(--color-primary)',
    backgroundColor: 'transparent',
    color: 'var(--color-text-primary)',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: 'var(--shadow-medium)',
      borderColor: 'var(--color-primary)',
      backgroundColor: 'rgba(233, 30, 99, 0.04)',
      color: 'var(--color-text-primary)'
    },
    '&:focus-within': {
      outline: '2px solid var(--color-primary)',
      outlineOffset: '2px'
    }
  } as SxProps<Theme>,

  chipContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 0,
    minWidth: 0,
    flex: 1
  } as SxProps<Theme>,

  episodeTitle: {
    fontWeight: 600,
    fontSize: '0.75rem',
    lineHeight: 1.2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '100%',
    color: 'inherit'
  } as SxProps<Theme>,

  episodeNumber: {
    fontWeight: 500,
    fontSize: '0.7rem',
    opacity: 0.8,
    color: 'inherit'
  } as SxProps<Theme>
};
