import './layout.scss';

import { Box, useMediaQuery, useTheme } from '@mui/material';
import { Suspense, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { MainLoader } from '@/shared/ui';
import ErrorTemplate from '@/shared/widgets/errors/error-template/error-template';

import BottomNavigation from './bottom-navigation';
import Header from './header';
import { mainContentStyles } from './layout.styles';
import MobileMenu from './mobile-menu';
import Navigation from './navigation';

const Layout: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="layout">
      {/* Шапка */}
      <Header />

      {/* Навигация (только на десктопе) */}
      {!isMobile && <Navigation />}

      {/* Мобильное меню */}
      <MobileMenu open={mobileMenuOpen} onClose={handleMobileMenuClose} />

      {/* Нижняя навигация (только на мобильных) */}
      <BottomNavigation onMenuToggle={handleMobileMenuToggle} />

      {/* Основной контент */}
      <main className="layout__main">
        <ErrorBoundary
          onError={console.error}
          fallback={
            <div className="layout__error">
              <ErrorTemplate
                type="oops"
                redirect={{
                  text: t('404_redirect-text-2'),
                  href: ROUTES.catalog
                }}
              />
            </div>
          }
        >
          <Suspense fallback={<MainLoader fullScreen={true} />}>
            <Box sx={mainContentStyles}>
              <Outlet />
            </Box>
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
