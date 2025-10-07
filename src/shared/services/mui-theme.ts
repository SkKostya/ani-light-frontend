import {
  type PaletteMode,
  type ThemeOptions,
  createTheme
} from '@mui/material/styles';

import { animePalette } from '@/shared/constants/theme-palette';

/**
 * Создает тему Material-UI с аниме-стилизованной палитрой
 * @param mode - Режим темы (светлая или темная)
 * @returns Объект темы Material-UI
 */
export const createMuiTheme = (mode: PaletteMode = 'light') => {
  const isLight = mode === 'light';
  const palette = isLight ? animePalette.light : animePalette.dark;

  const themeOptions: ThemeOptions = {
    palette: {
      mode,
      primary: {
        light: animePalette.primary.light,
        main: animePalette.primary.main,
        dark: animePalette.primary.dark,
        contrastText: animePalette.primary.contrastText
      },
      secondary: {
        light: animePalette.secondary.light,
        main: animePalette.secondary.main,
        dark: animePalette.secondary.dark,
        contrastText: animePalette.secondary.contrastText
      },
      background: {
        default: palette.background.default,
        paper: palette.background.paper
      },
      text: {
        primary: palette.text.primary,
        secondary: palette.text.secondary,
        disabled: palette.text.disabled
      },
      divider: palette.divider
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.2
      },
      h2: {
        fontWeight: 600,
        fontSize: '2rem',
        lineHeight: 1.3
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.75rem',
        lineHeight: 1.4
      },
      h4: {
        fontWeight: 500,
        fontSize: '1.5rem',
        lineHeight: 1.4
      },
      h5: {
        fontWeight: 500,
        fontSize: '1.25rem',
        lineHeight: 1.5
      },
      h6: {
        fontWeight: 500,
        fontSize: '1rem',
        lineHeight: 1.6
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.6
      },
      body2: {
        fontSize: '0.875rem',
        lineHeight: 1.6
      }
    },
    shape: {
      borderRadius: 12 // Более округлые углы в стиле аниме
    },
    shadows: [
      'none',
      animePalette.shadows[isLight ? 'light' : 'dark'].small,
      animePalette.shadows[isLight ? 'light' : 'dark'].medium,
      animePalette.shadows[isLight ? 'light' : 'dark'].large,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow,
      animePalette.shadows[isLight ? 'light' : 'dark'].glow
    ] as const,
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
            boxShadow: 'none',
            '&:hover': {
              boxShadow: animePalette.shadows[isLight ? 'light' : 'dark'].small
            }
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            boxShadow: animePalette.shadows[isLight ? 'light' : 'dark'].small,
            '&:hover': {
              boxShadow: animePalette.shadows[isLight ? 'light' : 'dark'].medium
            }
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none'
          }
        }
      }
    }
  };

  return createTheme(themeOptions);
};
