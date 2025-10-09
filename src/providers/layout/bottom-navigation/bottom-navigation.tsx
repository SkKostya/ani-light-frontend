import { Home, Menu, PlaylistAdd, PlaylistPlay } from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';

import { bottomNavigationStyles } from './bottom-navigation.styles';

interface BottomNavigationProps {
  onMenuToggle?: () => void;
}

/**
 * Компонент нижней навигации для мобильных устройств
 * @param onMenuToggle - Обработчик открытия общего меню
 */
const BottomNavigationComponent: React.FC<BottomNavigationProps> = ({
  onMenuToggle
}) => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Определяем активную вкладку на основе текущего пути
  const getCurrentValue = (): number | undefined => {
    const path = location.pathname;
    if (path.includes(ROUTES.watchList)) return 1;
    if (path.includes(ROUTES.wantList)) return 2;
    if (path.includes(ROUTES.favorites)) return 3;
    if (path.includes(ROUTES.catalog)) return 0;
  };

  const [value, setValue] = useState(getCurrentValue());

  // Синхронизируем состояние с URL при изменении маршрута
  useEffect(() => {
    setValue(getCurrentValue());
  }, [location.pathname]);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (newValue === -1) return;
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
    }
  };

  // Показываем только на мобильных устройствах
  if (!isMobile) {
    return null;
  }

  return (
    <Box sx={bottomNavigationStyles}>
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label={t('layout.nav_catalog')}
          icon={<Home />}
          value={0}
        />
        <BottomNavigationAction
          label={t('layout.nav_watchlist')}
          icon={<PlaylistPlay />}
          value={1}
        />
        <BottomNavigationAction
          label={t('layout.nav_wantlist_short')}
          icon={<PlaylistAdd />}
          value={2}
        />
        <BottomNavigationAction
          label={t('layout.menu_toggle')}
          onClick={onMenuToggle}
          icon={<Menu />}
          value={-1} // Специальное значение для кнопки меню
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomNavigationComponent;
