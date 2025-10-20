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
    p: { xs: 1.5, sm: 1.5 },
    '&.Mui-expanded': {
      minHeight: 'auto',
      '& .MuiAccordionSummary-content': {
        margin: 0
      }
    },
    '& .MuiAccordionSummary-content': {
      margin: 0
    }
  } as SxProps<Theme>,

  accordionDetails: {
    p: { xs: 1.5, sm: 1.5 },
    pt: { xs: 0, sm: 0 }
  } as SxProps<Theme>,

  title: {
    color: 'var(--color-text-primary)',
    fontWeight: 600,
    fontSize: { xs: '1.1rem', sm: '1.2rem' }
  } as SxProps<Theme>,

  episodesGrid: {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'repeat(auto-fill, minmax(80px, 1fr))'
    },
    gap: { xs: 1.5, sm: 1.5 },
    alignItems: 'stretch',
    '& > *': {
      height: '100%'
    }
  } as SxProps<Theme>,

  noEpisodes: {
    color: 'var(--color-text-secondary)',
    fontSize: { xs: '1rem', sm: '1.125rem' }
  } as SxProps<Theme>
};
