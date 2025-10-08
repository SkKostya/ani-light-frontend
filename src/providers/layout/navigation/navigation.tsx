import {
  Bookmark,
  History,
  Home,
  PlaylistAdd,
  PlaylistPlay,
  Settings
} from '@mui/icons-material';
import { Box, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { getCurrentNavigationTab } from '@/shared/services/helpers/navigate-helper';

import {
  desktopTabIconStyles,
  desktopTabsStyles,
  mobileTabsStyles,
  navigationContainerStyles,
  tabIconStyles
} from './navigation.styles';

interface NavigationProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'fullWidth' | 'scrollable' | 'standard';
}

/**
 * Компонент навигации по основным разделам приложения
 * @param orientation - Ориентация навигации
 * @param variant - Вариант отображения
 */
const Navigation: React.FC<NavigationProps> = ({
  orientation = 'horizontal',
  variant = 'standard'
}) => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Определяем активную вкладку на основе текущего пути
  const getCurrentTab = (): number => {
    return getCurrentNavigationTab(location.pathname);
  };

  const [value, setValue] = useState(getCurrentTab());

  // Синхронизируем состояние с URL при изменении маршрута
  useEffect(() => {
    setValue(getCurrentTab());
  }, [location.pathname]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);

    // Навигация по разделам
    switch (newValue) {
      case 0:
        navigate('/' + ROUTES.catalog);
        break;
      case 1:
        navigate('/' + ROUTES.watchList);
        break;
      case 2:
        navigate('/' + ROUTES.wantList);
        break;
      case 3:
        navigate('/' + ROUTES.favorites);
        break;
      case 4:
        navigate('/' + ROUTES.history);
        break;
      case 5:
        navigate('/' + ROUTES.profile);
        break;
    }
  };

  const navigationItems = [
    {
      label: t('layout.nav_catalog'),
      icon: <Home />,
      value: 0
    },
    {
      label: t('layout.nav_watchlist'),
      icon: <PlaylistPlay />,
      value: 1
    },
    {
      label: t('layout.nav_wantlist'),
      icon: <PlaylistAdd />,
      value: 2
    },
    {
      label: t('layout.nav_favorites'),
      icon: <Bookmark />,
      value: 3
    },
    {
      label: t('layout.nav_history'),
      icon: <History />,
      value: 4
    },
    {
      label: t('layout.nav_profile'),
      icon: <Settings />,
      value: 5
    }
  ];

  // На мобильных устройствах показываем только иконки
  if (isMobile) {
    return (
      <Box sx={navigationContainerStyles}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          orientation={orientation}
          sx={mobileTabsStyles}
        >
          {navigationItems.map((item) => (
            <Tab
              key={item.value}
              icon={item.icon}
              aria-label={item.label}
              sx={tabIconStyles}
            />
          ))}
        </Tabs>
      </Box>
    );
  }

  return (
    <Box sx={navigationContainerStyles}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant={variant}
        orientation={orientation}
        sx={desktopTabsStyles}
      >
        {navigationItems.map((item) => (
          <Tab
            key={item.value}
            icon={item.icon}
            label={item.label}
            iconPosition="start"
            sx={desktopTabIconStyles}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default Navigation;
