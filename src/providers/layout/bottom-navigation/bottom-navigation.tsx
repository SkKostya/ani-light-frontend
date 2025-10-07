import { Bookmark, Home, Menu, PlaylistPlay } from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

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
  const getCurrentValue = (): number => {
    const path = location.pathname;
    if (path.includes('/favorites')) return 1;
    if (path.includes('/watchlist')) return 2;
    return 0; // catalog по умолчанию
  };

  const [value, setValue] = useState(getCurrentValue());

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    if (newValue === -1) return;
    setValue(newValue);

    // Навигация по разделам
    switch (newValue) {
      case 0:
        navigate('/anime');
        break;
      case 1:
        navigate('/favorites');
        break;
      case 2:
        navigate('/watchlist');
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
          label={t('layout.nav_favorites')}
          icon={<Bookmark />}
          value={1}
        />
        <BottomNavigationAction
          label={t('layout.nav_watchlist')}
          icon={<PlaylistPlay />}
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
