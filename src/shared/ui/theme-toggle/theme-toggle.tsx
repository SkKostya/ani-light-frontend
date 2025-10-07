import { DarkMode, LightMode } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';

import { useTheme } from '@/providers/theme.provider';

interface ThemeToggleProps {
  size?: 'small' | 'medium' | 'large';
  showTooltip?: boolean;
}

/**
 * Компонент переключения между светлой и темной темой
 * @param size - Размер кнопки
 * @param showTooltip - Показывать ли подсказку
 */
const ThemeToggle: React.FC<ThemeToggleProps> = ({
  size = 'medium',
  showTooltip = true
}) => {
  const { mode, toggleTheme } = useTheme();
  const isDark = mode === 'dark';

  const button = (
    <IconButton
      onClick={toggleTheme}
      size={size}
      sx={{
        color: 'text.primary',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.1)',
          color: 'primary.main'
        }
      }}
      aria-label={
        isDark ? 'Переключить на светлую тему' : 'Переключить на темную тему'
      }
    >
      {isDark ? <LightMode /> : <DarkMode />}
    </IconButton>
  );

  if (showTooltip) {
    return (
      <Tooltip
        title={isDark ? 'Светлая тема' : 'Темная тема'}
        placement="bottom"
      >
        {button}
      </Tooltip>
    );
  }

  return button;
};

export default ThemeToggle;
