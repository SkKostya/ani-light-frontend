import { Menu, Search } from '@mui/icons-material';
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { ThemeToggle } from '@/shared/ui';

import LanguageSwitcher from '../language-switcher';
import UserMenu from '../user-menu';
import {
  appBarStyles,
  controlsContainerStyles,
  logoContainerStyles,
  logoTextStyles,
  mobileMenuButtonStyles,
  searchContainerStyles,
  searchFormStyles,
  searchIconStyles,
  searchInputContainerStyles,
  searchInputStyles,
  toolbarStyles
} from './header.styles';

interface HeaderProps {
  onMenuToggle?: () => void;
}

/**
 * Компонент шапки приложения с логотипом, поиском и навигацией
 * @param onMenuToggle - Обработчик открытия мобильного меню
 */
const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
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
    navigate('/');
  };

  return (
    <AppBar sx={appBarStyles}>
      <Toolbar sx={toolbarStyles}>
        {/* Мобильное меню */}
        {isMobile && (
          <IconButton
            edge="start"
            color="inherit"
            onClick={onMenuToggle}
            sx={mobileMenuButtonStyles}
            aria-label={t('layout.menu_toggle')}
          >
            <Menu />
          </IconButton>
        )}

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

        {/* Правые элементы управления */}
        <Box sx={controlsContainerStyles}>
          <ThemeToggle size={isMobile ? 'small' : 'medium'} />
          <LanguageSwitcher size={isMobile ? 'small' : 'medium'} />
          <UserMenu size={isMobile ? 'small' : 'medium'} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
