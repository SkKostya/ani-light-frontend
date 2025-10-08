import { Close } from '@mui/icons-material';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { isNavigationItemActive } from '@/shared/services/helpers/navigation-helper';
import { ThemeToggle } from '@/shared/ui';

import LanguageSwitcher from '../language-switcher';
import {
  closeButtonStyles,
  controlsStyles,
  drawerContentStyles,
  drawerStyles,
  headerStyles,
  listItemButtonStyles,
  listItemIconStyles,
  listItemTextStyles,
  listStyles,
  logoStyles
} from './mobile-menu.styles';

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Компонент мобильного меню для навигации
 * @param open - Открыто ли меню
 * @param onClose - Обработчик закрытия меню
 */
const MobileMenu: React.FC<MobileMenuProps> = ({ open, onClose }) => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const location = useLocation();

  const menuItems = [
    {
      label: t('layout.nav_catalog'),
      path: ROUTES.catalog,
      icon: '🏠'
    },
    {
      label: t('layout.nav_favorites'),
      path: ROUTES.favorites,
      icon: '⭐'
    },
    {
      label: t('layout.nav_watchlist'),
      path: ROUTES.watchlist,
      icon: '📺'
    },
    {
      label: t('layout.nav_history'),
      path: ROUTES.history,
      icon: '📚'
    },
    {
      label: t('layout.nav_profile'),
      path: ROUTES.profile,
      icon: '👤'
    }
  ];

  // Определяем активный пункт меню на основе текущего пути
  const isActiveItem = (path: string): boolean => {
    return isNavigationItemActive(location.pathname, path);
  };

  const handleItemClick = (path: string) => {
    navigate(path);
    onClose();
  };

  const drawerContent = (
    <Box sx={drawerContentStyles}>
      {/* Заголовок */}
      <Box sx={headerStyles}>
        <Typography variant="h6" sx={logoStyles}>
          {t('layout.logo')}
        </Typography>
        <IconButton onClick={onClose} size="small" sx={closeButtonStyles}>
          <Close />
        </IconButton>
      </Box>

      {/* Навигация */}
      <List sx={listStyles}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              onClick={() => handleItemClick(item.path)}
              sx={{
                ...listItemButtonStyles,
                ...(isActiveItem(item.path) && {
                  backgroundColor: 'var(--color-background-elevated)',
                  borderLeft: '4px solid var(--color-primary)',
                  '&:hover': {
                    backgroundColor: 'var(--color-background-elevated)'
                  }
                })
              }}
            >
              <ListItemIcon sx={listItemIconStyles}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: {
                    ...listItemTextStyles,
                    ...(isActiveItem(item.path) && {
                      fontWeight: 600,
                      color: 'primary.main'
                    })
                  }
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Управление */}
      <Box sx={controlsStyles}>
        <ThemeToggle size="small" showTooltip={false} />
        <LanguageSwitcher size="small" showTooltip={false} />
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="left" open={open} onClose={onClose} sx={drawerStyles}>
      {drawerContent}
    </Drawer>
  );
};

export default MobileMenu;
