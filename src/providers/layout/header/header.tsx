import { Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ROUTES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { ThemeToggle } from '@/shared/ui';

import {
  appBarStyles,
  controlsContainerStyles,
  logoContainerStyles,
  logoTextStyles,
  searchContainerStyles,
  searchFormStyles,
  searchIconStyles,
  searchInputContainerStyles,
  searchInputStyles,
  toolbarStyles
} from './header.styles';

/**
 * Компонент шапки приложения с логотипом, поиском и навигацией
 * @param onMenuToggle - Обработчик открытия мобильного меню
 */
const Header: React.FC = () => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/' + ROUTES.catalog);
  };

  return (
    <AppBar sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        {/* Логотип */}
        <Box onClick={handleLogoClick} sx={logoContainerStyles}>
          <Typography variant="h5" component="h1" sx={logoTextStyles}>
            {t('layout.logo')}
          </Typography>
        </Box>

        {/* Поиск */}
        <Box component="form" onSubmit={handleSearch} sx={searchFormStyles}>
          <Box sx={searchContainerStyles}>
            <Box sx={searchInputContainerStyles}>
              <Search sx={searchIconStyles} />
              <InputBase
                placeholder={t('layout.search_placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                sx={searchInputStyles}
              />
            </Box>
          </Box>
        </Box>

        {/* Правые элементы управления (только на десктопе) */}
        {!isMobile && (
          <Box sx={controlsContainerStyles}>
            <ThemeToggle size="medium" />

            {/* TODO английский не поддерживается на сервере */}
            {/* <LanguageSwitcher size="medium" /> */}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
