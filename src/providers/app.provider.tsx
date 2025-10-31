import { useEffect } from 'react';
import { Outlet } from 'react-router';

import { ToastProvider } from '@/shared/entities';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { setNavigate } from '@/shared/services/helpers/navigate-helper';
import { useAppDispatch } from '@/store/store';
import { getUser } from '@/store/user.slice';

import { LanguageGuard } from './language.guard';
import MuiProvider from './mui.provider';
import { ThemeProvider } from './theme.provider';

const AppProvider: React.FC = () => {
  const dispatch = useAppDispatch();
  const { navigate } = useAppNavigate();
  setNavigate(navigate);

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <ThemeProvider>
      <MuiProvider>
        <ToastProvider>
          <LanguageGuard>
            <Outlet />
          </LanguageGuard>
        </ToastProvider>
      </MuiProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
