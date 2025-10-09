import type { SxProps, Theme } from '@mui/material';

export const seasonSectionStyles = {
  accordion: {
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-medium)',
    mb: 2,
    '&:before': {
      display: 'none'
    },
    '&.Mui-expanded': {
      margin: '0 0 16px 0'
    }
  } as SxProps<Theme>,

  accordionSummary: {
    p: { xs: 2, sm: 3 },
    '&.Mui-expanded': {
      minHeight: 'auto'
    },
    '& .MuiAccordionSummary-content': {
      margin: 0,
      flexDirection: 'column',
      gap: 2
    }
  } as SxProps<Theme>,

  accordionDetails: {
    p: { xs: 2, sm: 3 },
    pt: 0
  } as SxProps<Theme>,

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    gap: 2
  } as SxProps<Theme>,

  titleContainer: {
    flex: 1
  } as SxProps<Theme>,

  title: {
    color: 'var(--color-text-primary)',
    fontWeight: 600,
    fontSize: { xs: '1.125rem', sm: '1.25rem' },
    mb: 0.5
  } as SxProps<Theme>,

  year: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem'
  } as SxProps<Theme>,

  statsContainer: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap'
  } as SxProps<Theme>,

  episodeChip: {
    backgroundColor: 'var(--color-primary-light)',
    color: 'var(--color-primary)',
    fontWeight: 500,
    fontSize: '0.75rem'
  } as SxProps<Theme>,

  statusChip: {
    fontWeight: 500,
    fontSize: '0.75rem'
  } as SxProps<Theme>,

  progressContainer: {
    width: '100%'
  } as SxProps<Theme>,

  progressHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    mb: 1
  } as SxProps<Theme>,

  progressText: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
    fontWeight: 500
  } as SxProps<Theme>,

  progressPercentage: {
    color: 'var(--color-primary)',
    fontSize: '0.875rem',
    fontWeight: 600
  } as SxProps<Theme>,

  progressBar: {
    height: 6,
    borderRadius: 'var(--border-radius-small)',
    backgroundColor: 'var(--color-background)',
    '& .MuiLinearProgress-bar': {
      background: 'var(--anime-gradient-sunset)',
      borderRadius: 'var(--border-radius-small)'
    }
  } as SxProps<Theme>,

  description: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
    lineHeight: 1.6,
    mb: 2,
    fontStyle: 'italic'
  } as SxProps<Theme>,

  episodesGrid: {
    mt: 1
  } as SxProps<Theme>
};
