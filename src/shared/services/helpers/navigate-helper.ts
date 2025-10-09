import { type NavigateFunction } from 'react-router';

import { ROUTES } from '@/shared/constants';

let appNavigate: NavigateFunction;

export const setNavigate = (appNav: NavigateFunction) => {
  appNavigate = appNav;
};

export const getAppNavigate = () => appNavigate;

/**
 * Утилиты для работы с навигацией и определением активных маршрутов
 */

/**
 * Убирает префикс языка из пути
 * @param path - Путь с префиксом языка (например, "/ru/anime" или "/en/favorites")
 * @returns Путь без префикса языка (например, "/anime" или "/favorites")
 */
export const removeLanguagePrefix = (path: string): string => {
  return path.replace(/^\/[a-z]{2}/, '') || '/';
};

/**
 * Определяет активную вкладку навигации на основе текущего пути
 * @param pathname - Текущий путь из location.pathname
 * @returns Номер активной вкладки (0-4)
 */
export const getCurrentNavigationTab = (
  pathname: string
): number | undefined => {
  const pathWithoutLang = removeLanguagePrefix(pathname);

  if (
    pathWithoutLang === `/${ROUTES.profile}` ||
    pathWithoutLang.startsWith(`/${ROUTES.profile}/`)
  )
    return 5;
  if (
    pathWithoutLang === `/${ROUTES.watchList}` ||
    pathWithoutLang.startsWith(`/${ROUTES.watchList}/`)
  )
    return 1;
  if (
    pathWithoutLang === `/${ROUTES.wantList}` ||
    pathWithoutLang.startsWith(`/${ROUTES.wantList}/`)
  )
    return 2;
  if (
    pathWithoutLang === `/${ROUTES.favorites}` ||
    pathWithoutLang.startsWith(`/${ROUTES.favorites}/`)
  )
    return 3;
  if (
    pathWithoutLang === `/${ROUTES.history}` ||
    pathWithoutLang.startsWith(`/${ROUTES.history}/`)
  )
    return 4;
  if (
    pathWithoutLang === '/' ||
    pathWithoutLang === `/${ROUTES.catalog}` ||
    pathWithoutLang.startsWith(`/${ROUTES.catalog}/`)
  )
    return 0;
};

/**
 * Проверяет, является ли пункт меню активным
 * @param currentPath - Текущий путь
 * @param itemPath - Путь пункта меню (без префикса /)
 * @returns true, если пункт меню активен
 */
export const isNavigationItemActive = (
  currentPath: string,
  itemPath: string
): boolean => {
  const pathWithoutLang = removeLanguagePrefix(currentPath);

  // Нормализуем пути: убираем начальный слэш если есть
  const normalizedCurrentPath = pathWithoutLang.startsWith('/')
    ? pathWithoutLang.slice(1)
    : pathWithoutLang;
  const normalizedItemPath = itemPath.startsWith('/')
    ? itemPath.slice(1)
    : itemPath;

  if (normalizedItemPath === ROUTES.catalog) {
    return (
      normalizedCurrentPath === ROUTES.catalog || normalizedCurrentPath === ''
    );
  }

  return (
    normalizedCurrentPath === normalizedItemPath ||
    normalizedCurrentPath.startsWith(normalizedItemPath + '/')
  );
};

/**
 * Примеры использования и тестовые случаи:
 *
 * // Тестирование getCurrentNavigationTab:
 * console.log(getCurrentNavigationTab('/ru/anime')); // 0 (catalog)
 * console.log(getCurrentNavigationTab('/en/')); // 0 (catalog)
 * console.log(getCurrentNavigationTab('/ru/favorites')); // 1 (favorites)
 * console.log(getCurrentNavigationTab('/en/watchlist')); // 2 (watchlist)
 * console.log(getCurrentNavigationTab('/ru/history')); // 3 (history)
 * console.log(getCurrentNavigationTab('/en/profile')); // 4 (profile)
 *
 * // Тестирование isNavigationItemActive:
 * console.log(isNavigationItemActive('/ru/anime', 'anime')); // true
 * console.log(isNavigationItemActive('/en/', 'anime')); // true (catalog)
 * console.log(isNavigationItemActive('/ru/favorites', 'favorites')); // true
 * console.log(isNavigationItemActive('/en/anime', 'favorites')); // false
 *
 * // Тестирование removeLanguagePrefix:
 * console.log(removeLanguagePrefix('/ru/anime')); // '/anime'
 * console.log(removeLanguagePrefix('/en/favorites')); // '/favorites'
 * console.log(removeLanguagePrefix('/anime')); // '/anime' (без изменений)
 */
