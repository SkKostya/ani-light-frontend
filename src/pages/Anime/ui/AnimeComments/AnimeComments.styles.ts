import type { SxProps, Theme } from '@mui/material';

export const animeCommentsStyles = {
  container: {
    mt: { xs: 4, sm: 5 },
    p: { xs: 2, sm: 3 },
    backgroundColor: 'var(--color-background-paper)',
    borderRadius: 'var(--border-radius-large)',
    border: '1px solid var(--color-border)',
    boxShadow: 'var(--shadow-small)'
  } as SxProps<Theme>,

  title: {
    color: 'var(--color-text-primary)',
    fontWeight: 600,
    mb: { xs: 3, sm: 4 },
    textAlign: 'center',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -8,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 60,
      height: 3,
      background: 'var(--gradient-magic)',
      borderRadius: 'var(--border-radius-small)'
    }
  } as SxProps<Theme>,

  commentForm: {
    mb: 3
  } as SxProps<Theme>,

  userAvatar: {
    width: 40,
    height: 40,
    backgroundColor: 'var(--color-primary)',
    color: 'white',
    fontWeight: 600
  } as SxProps<Theme>,

  formContent: {
    flex: 1
  } as SxProps<Theme>,

  textField: {
    '& .MuiOutlinedInput-root': {
      borderRadius: 'var(--border-radius-medium)',
      backgroundColor: 'var(--color-background)',
      '&:hover': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--color-primary)'
        }
      },
      '&.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--color-primary)',
          borderWidth: 2
        }
      }
    },
    '& .MuiInputBase-input': {
      color: 'var(--color-text-primary)',
      '&::placeholder': {
        color: 'var(--color-text-secondary)',
        opacity: 1
      }
    }
  } as SxProps<Theme>,

  formActions: {
    mt: 2,
    justifyContent: 'flex-end'
  } as SxProps<Theme>,

  submitButton: {
    background: 'var(--gradient-magic)',
    color: 'white',
    px: 3,
    py: 1,
    borderRadius: 'var(--border-radius-medium)',
    textTransform: 'none',
    fontWeight: 600,
    '&:hover': {
      background: 'var(--gradient-magic)',
      boxShadow: 'var(--shadow-glow)',
      transform: 'translateY(-1px)'
    },
    '&:disabled': {
      background: 'var(--color-text-disabled)',
      color: 'var(--color-text-secondary)'
    },
    transition: 'all 0.3s ease-in-out'
  } as SxProps<Theme>,

  divider: {
    my: 3,
    borderColor: 'var(--color-border)'
  } as SxProps<Theme>,

  commentsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  } as SxProps<Theme>,

  commentItem: {
    p: 2,
    borderRadius: 'var(--border-radius-medium)',
    backgroundColor: 'var(--color-background)',
    border: '1px solid var(--color-border)',
    transition: 'all 0.3s ease-in-out',
    '&:hover': {
      borderColor: 'var(--color-primary)',
      boxShadow: 'var(--shadow-small)'
    }
  } as SxProps<Theme>,

  commentAvatar: {
    width: 32,
    height: 32,
    backgroundColor: 'var(--color-secondary)',
    color: 'white',
    fontWeight: 600,
    fontSize: '0.8rem'
  } as SxProps<Theme>,

  commentContent: {
    flex: 1,
    minWidth: 0
  } as SxProps<Theme>,

  commentHeader: {
    mb: 1
  } as SxProps<Theme>,

  userName: {
    color: 'var(--color-primary)',
    fontWeight: 600,
    fontSize: '0.9rem'
  } as SxProps<Theme>,

  commentDate: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.75rem'
  } as SxProps<Theme>,

  commentText: {
    color: 'var(--color-text-primary)',
    lineHeight: 1.5,
    mb: 1.5,
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word'
  } as SxProps<Theme>,

  commentActions: {
    alignItems: 'center'
  } as SxProps<Theme>,

  actionButton: (isActive: boolean = false) =>
    ({
      color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
      '&:hover': {
        color: 'var(--color-primary)',
        backgroundColor: 'rgba(233, 30, 99, 0.04)'
      },
      transition: 'all 0.2s ease-in-out'
    }) as SxProps<Theme>,

  replyButton: {
    color: 'var(--color-text-secondary)',
    '&:hover': {
      color: 'var(--color-primary)',
      backgroundColor: 'rgba(233, 30, 99, 0.04)'
    },
    transition: 'all 0.2s ease-in-out'
  } as SxProps<Theme>,

  likeCount: {
    color: 'var(--color-text-secondary)',
    fontSize: '0.75rem',
    minWidth: 20,
    textAlign: 'center'
  } as SxProps<Theme>
};
