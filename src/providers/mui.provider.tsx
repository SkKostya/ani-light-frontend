import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import type { ReactNode } from 'react';

import { createMuiTheme } from '@/shared/services/mui-theme';

import { useTheme } from './theme.provider';

interface MuiProviderProps {
  children: ReactNode;
}

/**
 * Провайдер для Material-UI с аниме-стилизованной темой
 */
const MuiProvider: React.FC<MuiProviderProps> = ({ children }) => {
  const { mode } = useTheme();
  const theme = createMuiTheme(mode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default MuiProvider;
