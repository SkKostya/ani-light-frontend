import { useTheme } from '@mui/material/styles';

/**
 * Хук для работы с темой Material-UI
 * @returns Объект темы Material-UI
 */
export const useMuiTheme = () => {
  const theme = useTheme();
  return theme;
};
