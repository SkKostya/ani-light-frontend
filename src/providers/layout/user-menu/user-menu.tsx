import { AccountCircle, ExitToApp, Settings } from '@mui/icons-material';
import {
  Avatar,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAppNavigate } from '@/shared/hooks/useAppNavigate';

import {
  buttonStyles,
  getAvatarStyles,
  logoutIconStyles,
  logoutTextStyles,
  menuItemStyles,
  menuStyles,
  profileIconStyles,
  settingsIconStyles
} from './user-menu.styles';

interface UserMenuProps {
  size?: 'small' | 'medium' | 'large';
  showTooltip?: boolean;
}

/**
 * Компонент меню пользователя с переходом в профиль
 * @param size - Размер кнопки
 * @param showTooltip - Показывать ли подсказку
 */
const UserMenu: React.FC<UserMenuProps> = ({
  size = 'medium',
  showTooltip = true
}) => {
  const { t } = useTranslation();
  const { navigate } = useAppNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/profile');
    handleClose();
  };

  const handleSettingsClick = () => {
    navigate('/settings');
    handleClose();
  };

  const handleLogoutClick = () => {
    // TODO: Implement logout logic
    handleClose();
  };

  const button = (
    <IconButton
      onClick={handleClick}
      size={size}
      sx={buttonStyles}
      aria-label="Меню пользователя"
    >
      <Avatar sx={getAvatarStyles(size)}>
        <AccountCircle />
      </Avatar>
    </IconButton>
  );

  return (
    <>
      {showTooltip ? (
        <Tooltip title="Меню пользователя" placement="bottom">
          {button}
        </Tooltip>
      ) : (
        button
      )}

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={menuStyles}
      >
        <MenuItem onClick={handleProfileClick} sx={menuItemStyles}>
          <AccountCircle sx={profileIconStyles} />
          <Typography variant="body2">
            {t('layout.user_menu_profile')}
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleSettingsClick} sx={menuItemStyles}>
          <Settings sx={settingsIconStyles} />
          <Typography variant="body2">
            {t('layout.user_menu_settings')}
          </Typography>
        </MenuItem>

        <MenuItem onClick={handleLogoutClick} sx={menuItemStyles}>
          <ExitToApp sx={logoutIconStyles} />
          <Typography variant="body2" sx={logoutTextStyles}>
            {t('layout.user_menu_logout')}
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
};

export default UserMenu;
