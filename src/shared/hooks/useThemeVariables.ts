import { useTheme } from '@/providers/theme.provider';
import { animePalette } from '@/shared/constants/theme-palette';

/**
 * Хук для работы с CSS переменными темы
 * @returns Объект с функциями для работы с темой
 */
export const useThemeVariables = () => {
  const { mode } = useTheme();
  const isLight = mode === 'light';

  /**
   * Получает CSS переменную по имени
   * @param variableName - Имя CSS переменной (без --)
   * @returns Значение CSS переменной
   */
  const getCSSVariable = (variableName: string): string => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue(`--${variableName}`)
      .trim();
  };

  /**
   * Устанавливает CSS переменную
   * @param variableName - Имя CSS переменной (без --)
   * @param value - Значение переменной
   */
  const setCSSVariable = (variableName: string, value: string): void => {
    document.documentElement.style.setProperty(`--${variableName}`, value);
  };

  /**
   * Получает цвет из палитры
   * @param colorPath - Путь к цвету в палитре (например: 'primary.main')
   * @returns Цвет из палитры
   */
  const getPaletteColor = (colorPath: string): string => {
    const keys = colorPath.split('.');
    let value: unknown = animePalette;

    for (const key of keys) {
      value = (value as Record<string, unknown>)[key];
      if (value === undefined) {
        console.warn(`Color path "${colorPath}" not found in palette`);
        return '#000000';
      }
    }

    return value as string;
  };

  /**
   * Получает градиент из палитры
   * @param gradientName - Имя градиента
   * @returns CSS градиент
   */
  const getGradient = (
    gradientName: keyof typeof animePalette.gradients
  ): string => {
    return animePalette.gradients[gradientName];
  };

  /**
   * Получает тень из палитры
   * @param shadowType - Тип тени (small, medium, large, glow)
   * @returns CSS тень
   */
  const getShadow = (
    shadowType: 'small' | 'medium' | 'large' | 'glow'
  ): string => {
    return animePalette.shadows[isLight ? 'light' : 'dark'][shadowType];
  };

  return {
    mode,
    isLight,
    getCSSVariable,
    setCSSVariable,
    getPaletteColor,
    getGradient,
    getShadow,
    palette: animePalette
  };
};
