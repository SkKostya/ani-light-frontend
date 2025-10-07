import './error-template.scss';

import React, { useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import i18next from '@/i18n';
import { ROUTES } from '@/shared/constants';
import { LocalizedNavLink } from '@/shared/ui';

interface IProps {
  type: ErrorType;
  redirect?: {
    text: string;
    href: string;
  } | null;
}

const ErrorTemplate: React.FC<IProps> = ({
  type,
  redirect = {
    text: i18next.t('404_redirect-text-1', {
      defaultValue: 'Перейти на главную'
    }),
    href: ROUTES.autoCredit
  }
}) => {
  const { t } = useTranslation();
  const location = useLocation();
  const { resetBoundary } = useErrorBoundary();

  const ERRORS: Record<ErrorType, ErrorsInterface> = useMemo(
    () => ({
      '404': {
        title: t('404_title-1', { defaultValue: 'Страница не найдена' }),
        description: [
          t('404_description-1', {
            defaultValue: 'Такой страницы либо уже нет, либо еще нет.'
          }),
          t('404_description-2', {
            defaultValue: 'А может быть, вы перешли по неправильной ссылке.'
          })
        ]
      },
      oops: {
        title: t('404_title-2', { defaultValue: 'Что-то пошло не так' }),
        description: [
          t('404_description-3', {
            defaultValue: 'Просим перезагрузить страницу или'
          })
        ]
      }
    }),
    [t]
  );

  useEffect(() => {
    return () => {
      resetBoundary();
    };
  }, [resetBoundary, location]);

  return (
    <div className="error-template">
      <p className="error-template__title">{ERRORS[type].title}</p>
      <p className="error-template__description">
        {ERRORS[type].description.map((item) => (
          <React.Fragment key={item}>
            {item} <br />
          </React.Fragment>
        ))}
        {redirect && (
          <LocalizedNavLink className="error-template__link" to={redirect.href}>
            {redirect.text}
          </LocalizedNavLink>
        )}
      </p>
    </div>
  );
};

export default ErrorTemplate;

type ErrorType = '404' | 'oops';

interface ErrorsInterface {
  title: string;
  description: string[];
}
