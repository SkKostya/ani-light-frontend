/**
 * Аниме-стилизованная палитра цветов
 * Вдохновлена популярными аниме и манга стилями
 */

export const animePalette = {
  // Основные цвета (Primary) - вдохновлены неоновыми цветами аниме
  primary: {
    light: '#ff6b9d', // Яркий розовый (как в Sailor Moon)
    main: '#e91e63', // Магический розовый
    dark: '#c2185b', // Темный розовый
    contrastText: '#fff'
  },

  // Вторичные цвета (Secondary) - электрический синий
  secondary: {
    light: '#40c4ff', // Светло-голубой (как в Akira)
    main: '#00bcd4', // Циан
    dark: '#0097a7', // Темно-циан
    contrastText: '#fff'
  },

  // Акцентные цвета - неоновые оттенки
  accent: {
    purple: '#9c27b0', // Фиолетовый (как в Evangelion)
    orange: '#ff9800', // Оранжевый (как в Dragon Ball)
    green: '#4caf50', // Зеленый (как в Studio Ghibli)
    yellow: '#ffeb3b', // Желтый (как в Pokemon)
    red: '#f44336', // Красный (как в Attack on Titan)
    blue: '#2196f3' // Синий (как в One Piece)
  },

  // Светлая тема
  light: {
    background: {
      default: '#fafafa', // Очень светлый серый
      paper: '#fff', // Белый
      elevated: '#f5f5f5' // Светло-серый для карточек
    },
    text: {
      primary: '#212121', // Почти черный
      secondary: '#757575', // Серый
      disabled: '#bdbdbd', // Светло-серый
      hint: '#9e9e9e' // Очень светло-серый
    },
    divider: '#e0e0e0', // Светло-серый разделитель
    border: '#e0e0e0' // Светло-серая граница
  },

  // Темная тема
  dark: {
    background: {
      default: '#0a0a0a', // Очень темный (почти черный)
      paper: '#1a1a1a', // Темно-серый
      elevated: '#2a2a2a' // Серый для карточек
    },
    text: {
      primary: '#fff', // Белый
      secondary: '#b0b0b0', // Светло-серый
      disabled: '#666', // Серый
      hint: '#888' // Средне-серый
    },
    divider: '#333', // Темно-серый разделитель
    border: '#333' // Темно-серая граница
  },

  // Градиенты в стиле аниме
  gradients: {
    sunset: 'linear-gradient(135deg, #ff6b9d 0%, #ff8a65 100%)', // Закат
    ocean: 'linear-gradient(135deg, #00bcd4 0%, #2196f3 100%)', // Океан
    forest: 'linear-gradient(135deg, #4caf50 0%, #8bc34a 100%)', // Лес
    night: 'linear-gradient(135deg, #9c27b0 0%, #673ab7 100%)', // Ночь
    fire: 'linear-gradient(135deg, #ff5722 0%, #ff9800 100%)', // Огонь
    ice: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)', // Лед
    magic: 'linear-gradient(135deg, #e91e63 0%, #9c27b0 50%, #00bcd4 100%)' // Магия
  },

  // Тени в стиле аниме (более мягкие и цветные)
  shadows: {
    light: {
      small: '0 2px 8px rgba(233, 30, 99, 0.1)',
      medium: '0 4px 16px rgba(233, 30, 99, 0.15)',
      large: '0 8px 32px rgba(233, 30, 99, 0.2)',
      glow: '0 0 20px rgba(233, 30, 99, 0.3)'
    },
    dark: {
      small: '0 2px 8px rgba(0, 0, 0, 0.3)',
      medium: '0 4px 16px rgba(0, 0, 0, 0.4)',
      large: '0 8px 32px rgba(0, 0, 0, 0.5)',
      glow: '0 0 20px rgba(233, 30, 99, 0.4)'
    }
  }
} as const;

export type AnimePalette = typeof animePalette;
export type ThemeMode = 'light' | 'dark';
