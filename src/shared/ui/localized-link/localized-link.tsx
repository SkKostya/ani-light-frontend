import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, type LinkProps, NavLink, type NavLinkProps } from 'react-router';

const addLanguagePrefix = (
  to: LinkProps['to'],
  lang: string
): LinkProps['to'] => {
  if (typeof to === 'string') {
    const cleanPath = to.startsWith('/') ? to.slice(1) : to;
    const pathWithoutLang = cleanPath.startsWith(`${lang}/`)
      ? cleanPath.slice(lang.length + 1)
      : cleanPath;
    return `/${lang}/${pathWithoutLang}`.replace(/\/+/g, '/');
  }

  if (typeof to === 'object' && to !== null && 'pathname' in to) {
    const cleanPath = to.pathname?.startsWith('/')
      ? to.pathname.slice(1)
      : to.pathname || '';
    const pathWithoutLang = cleanPath.startsWith(`${lang}/`)
      ? cleanPath.slice(lang.length + 1)
      : cleanPath;
    return {
      ...to,
      pathname: `/${lang}/${pathWithoutLang}`.replace(/\/+/g, '/')
    };
  }

  return to;
};

export const LocalizedLink: React.FC<
  LinkProps & { ref?: React.Ref<HTMLAnchorElement> }
> = ({ to, ref, ...props }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const localizedTo = addLanguagePrefix(to, currentLang);

  return <Link ref={ref} to={localizedTo} {...props} />;
};

export const LocalizedNavLink: React.FC<NavLinkProps> = ({ to, ...props }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const localizedTo = addLanguagePrefix(to, currentLang);

  return <NavLink to={localizedTo} {...props} />;
};
