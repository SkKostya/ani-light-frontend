export const episodeCardStyles = {
  card: {
    px: 1,
    minWidth: 80,
    height: 80,
    backgroundColor: 'var(--color-background-elevated)',
    borderRadius: 'var(--border-radius-large)',
    boxShadow: 'var(--shadow-small)',
    border: '2px solid transparent',
    transition: 'all 0.3s ease-in-out',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    '&:hover': {
      transform: 'translateY(-2px) scale(1.05)',
      boxShadow: 'var(--shadow-medium)',
      backgroundColor: 'var(--color-primary)',
      '& .episode-number': {
        color: 'white',
        transform: 'scale(1.1)'
      },
      '& .episode-label': {
        color: 'rgba(255, 255, 255, 0.9)'
      }
    }
  },

  watchedCard: {
    backgroundColor: 'rgba(233, 30, 99, 0.05)',
    border: '2px solid rgba(233, 30, 99, 0.2)',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 6,
      background: 'var(--gradient-magic)',
      borderRadius: '0 0 var(--border-radius-large) var(--border-radius-large)',
      boxShadow: '0 0 12px rgba(233, 30, 99, 0.4)',
      zIndex: 1
    },
    '&:hover::after': {
      boxShadow: '0 0 16px rgba(233, 30, 99, 0.6)',
      height: 8
    }
  },

  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },

  episodeNumber: {
    color: 'var(--color-text-primary)',
    fontWeight: 700,
    fontSize: { xs: '1.5rem', sm: '2rem' },
    lineHeight: 1,
    mb: 0.5,
    transition: 'all 0.3s ease-in-out',
    className: 'episode-number',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  },

  episodeLabel: {
    color: 'var(--color-text-secondary)',
    fontSize: { xs: '0.625rem', sm: '0.75rem' },
    fontWeight: 500,
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    lineHeight: 1
  }
};
