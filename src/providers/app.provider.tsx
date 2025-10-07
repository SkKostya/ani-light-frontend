import { Outlet } from 'react-router';

import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { setNavigate } from '@/shared/services/helpers/navigate-helper';

import { LanguageGuard } from './language.guard';
import MuiProvider from './mui.provider';
import { ThemeProvider } from './theme.provider';

const AppProvider: React.FC = () => {
  const { navigate } = useAppNavigate();
  setNavigate(navigate);

  return (
    <ThemeProvider>
      <MuiProvider>
        <LanguageGuard>
          <Outlet />
        </LanguageGuard>
      </MuiProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
