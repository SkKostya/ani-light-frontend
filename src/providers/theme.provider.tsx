import { type ReactNode, useEffect } from 'react';

import { setTheme, toggleTheme } from '@/store/app.slice';
import { useAppDispatch, useAppSelector } from '@/store/store';

type ThemeMode = 'light' | 'dark';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Провайдер для управления темами приложения
 * Поддерживает светлую и темную тему с сохранением в localStorage
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.app.theme);

  // Инициализация темы при первом запуске
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      dispatch(setTheme(savedTheme));
      return;
    }

    // Проверяем системную тему
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      dispatch(setTheme('dark'));
    } else {
      dispatch(setTheme('light'));
    }
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
      if (!localStorage.getItem('theme')) {
        dispatch(setTheme(e.matches ? 'dark' : 'light'));
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

  return {
    mode,
    toggleTheme: handleToggleTheme,
    setTheme: handleSetTheme
  };
};
