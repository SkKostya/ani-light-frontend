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

import { useAppNavigate } from '@/shared/hooks/useAppNavigate';
import { ThemeToggle } from '@/shared/ui';

import LanguageSwitcher from '../language-switcher';
import UserMenu from '../user-menu';
import {
  closeButtonStyles,
  controlsLeftStyles,
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

  const menuItems = [
    {
      label: t('layout.nav_catalog'),
      path: '/anime',
      icon: '🏠'
    },
    {
      label: t('layout.nav_favorites'),
      path: '/favorites',
      icon: '⭐'
    },
    {
      label: t('layout.nav_watchlist'),
      path: '/watchlist',
      icon: '📺'
    },
    {
      label: t('layout.nav_history'),
      path: '/history',
      icon: '📚'
    },
    {
      label: t('layout.nav_profile'),
      path: '/profile',
      icon: '👤'
    },
    {
      label: t('layout.nav_settings'),
      path: '/settings',
      icon: '⚙️'
    }
  ];

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
              sx={listItemButtonStyles}
            >
              <ListItemIcon sx={listItemIconStyles}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  sx: listItemTextStyles
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      {/* Управление */}
      <Box sx={controlsStyles}>
        <Box sx={controlsLeftStyles}>
          <ThemeToggle size="small" showTooltip={false} />
          <LanguageSwitcher size="small" showTooltip={false} />
        </Box>
        <UserMenu size="small" showTooltip={false} />
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
