import { useTranslation } from 'react-i18next';
import {
  type NavigateFunction,
  type NavigateOptions,
  type To,
  useLocation,
  useNavigate
} from 'react-router';

import { Languages } from '@/shared/constants';

export const useAppNavigate = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const appNavigate: NavigateFunction = (
    to: To | number,
    options?: NavigateOptions
  ) => {
    if (typeof to === 'number') {
      navigate(to);
      return;
    }

    const startLength = `/${currentLang}/`;

    if (typeof to === 'object' && to.pathname) {
      const pathWithoutLang = to.pathname.startsWith(startLength)
        ? to.pathname.slice(startLength.length)
        : to.pathname;
      const localizedPath = `/${currentLang}/${pathWithoutLang}`.replace(
        /\/+/g,
        '/'
      );
      navigate(
        {
          ...to,
          pathname: localizedPath
        },
        options
      );
      return;
    }

    // Убираем начальный слэш и возможный префикс языка
    const pathWithoutLang =
      typeof to === 'string' && to.startsWith(startLength)
        ? to.slice(startLength.length)
        : to;

    const localizedPath = `/${currentLang}/${pathWithoutLang}`.replace(
      /\/+/g,
      '/'
    );
    navigate(localizedPath, options);
  };

  const changeLanguage = (newLang: Languages) => {
    if (i18n.language !== newLang) {
      i18n.changeLanguage(newLang);
      const currentPath = location.pathname + location.search;
      const newPath = currentPath.replace(`/${currentLang}/`, `/${newLang}/`);
      navigate(newPath, { replace: true });
    }
  };

  return {
    navigate: appNavigate,
    changeLanguage,
    currentLang
  };
};
