import { type ReactNode, useEffect, useLayoutEffect } from 'react';

import { setTheme, toggleTheme } from '@/store/app.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';

type ThemeMode = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
}

// Синхронная инициализация темы для предотвращения мигания
const initializeTheme = (): ThemeMode => {
  const savedTheme = localStorage.getItem('theme') as ThemeMode;
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    // Применяем сохраненную тему сразу к DOM
    document.documentElement.setAttribute('data-theme', savedTheme);
    return savedTheme;
  }

  // Проверяем системную тему
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemTheme = prefersDark ? 'dark' : 'light';

  // Применяем системную тему сразу к DOM
  document.documentElement.setAttribute('data-theme', systemTheme);
  return systemTheme;
};

// Инициализируем тему сразу при загрузке модуля
const initialTheme = initializeTheme();

/**
 * Провайдер для управления темами приложения
 * Поддерживает светлую и темную тему с сохранением в localStorage
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.app.theme);

  // Синхронизируем Redux store с уже инициализированной темой
  useLayoutEffect(() => {
    dispatch(setTheme(initialTheme));
  }, [dispatch]);

  // Сохраняем тему в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('theme', mode);
    // Применяем тему к корневому элементу для CSS переменных
    document.documentElement.setAttribute('data-theme', mode);
  }, [mode]);

  // Слушаем изменения системной темы
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Применяем системную тему только если пользователь не выбрал тему вручную
      const hasUserTheme = localStorage.getItem('theme');
      if (!hasUserTheme) {
        const newTheme = e.matches ? 'dark' : 'light';
        dispatch(setTheme(newTheme));
        document.documentElement.setAttribute('data-theme', newTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [dispatch]);

  return <>{children}</>;
};

/**
 * Хук для использования темы
 * @returns Объект с функциями управления темой
 */
export const useTheme = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.app.theme);

  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  const handleSetTheme = (newMode: ThemeMode) => {
    dispatch(setTheme(newMode));
  };

  const resetToSystemTheme = () => {
    // Удаляем пользовательский выбор темы
    localStorage.removeItem('theme');

    // Применяем системную тему
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';

    dispatch(setTheme(systemTheme));
    document.documentElement.setAttribute('data-theme', systemTheme);
  };

  return {
    mode,
    toggleTheme: handleToggleTheme,
    setTheme: handleSetTheme,
    resetToSystemTheme
  };
};
