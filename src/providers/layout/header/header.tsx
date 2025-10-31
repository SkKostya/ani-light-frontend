import { Login, Logout, Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
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
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setUser } from '@/store/user.slice';

import {
  appBarStyles,
  authButtonStyles,
  authIconButtonStyles,
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
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.user);
  const isLoggedIn = !!user;

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleLogoClick = () => {
    navigate('/' + ROUTES.catalog);
  };

  const handleLogin = () => {
    navigate(ROUTES.login);
  };

  const handleLogout = () => {
    dispatch(setUser(undefined));
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
            {isLoggedIn ? (
              <IconButton
                onClick={handleLogout}
                sx={authIconButtonStyles}
                title={t('layout.layout_button_logout')}
              >
                <Logout />
              </IconButton>
            ) : (
              <Button
                startIcon={<Login />}
                onClick={handleLogin}
                variant="contained"
                sx={authButtonStyles}
              >
                {t('layout.layout_button_login')}
              </Button>
            )}

            {/* TODO английский не поддерживается на сервере */}
            {/* <LanguageSwitcher size="medium" /> */}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
