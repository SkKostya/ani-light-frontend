import { Language } from '@mui/icons-material';
import {
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Languages, SUPPORTED_LANGUAGES } from '@/shared/constants';
import { useAppNavigate } from '@/shared/hooks/useAppNavigate';

import {
  buttonStyles,
  getMenuItemStyles,
  menuStyles
} from './language-switcher.styles';

interface LanguageSwitcherProps {
  size?: 'small' | 'medium' | 'large';
  showTooltip?: boolean;
}

/**
 * Компонент переключения языка приложения
 * @param size - Размер кнопки
 * @param showTooltip - Показывать ли подсказку
 */
const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  size = 'medium',
  showTooltip = true
}) => {
  const { t } = useTranslation();
  const { changeLanguage, currentLang } = useAppNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: Languages) => {
    changeLanguage(language);
    handleClose();
  };

  const getLanguageName = (lang: Languages): string => {
    switch (lang) {
      case Languages.ru:
        return 'Русский';
      case Languages.en:
        return 'English';
      default:
        return lang;
    }
  };

  const button = (
    <IconButton
      onClick={handleClick}
      size={size}
      sx={buttonStyles}
      aria-label={t('layout.language_switch')}
    >
      <Language />
    </IconButton>
  );

  return (
    <>
      {showTooltip ? (
        <Tooltip title={t('layout.language_switch')} placement="bottom">
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
          vertical: isMobile ? 'top' : 'bottom',
          horizontal: isMobile ? 'center' : 'right'
        }}
        transformOrigin={{
          vertical: isMobile ? 'bottom' : 'top',
          horizontal: isMobile ? 'center' : 'right'
        }}
        sx={menuStyles}
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <MenuItem
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            selected={currentLang === lang}
            sx={getMenuItemStyles(currentLang === lang)}
          >
            {getLanguageName(lang)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
