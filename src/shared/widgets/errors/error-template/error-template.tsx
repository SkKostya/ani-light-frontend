import {
  ErrorOutline,
  Home,
  Refresh,
  SentimentDissatisfied
} from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useMemo } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import i18next from '@/i18n';
import { ROUTES } from '@/shared/constants';
import { LocalizedNavLink } from '@/shared/ui';

import {
  containerStyles,
  descriptionStyles,
  iconStyles,
  linkStyles,
  titleStyles
} from './error-template.styles';

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
      defaultValue: 'Перейти на главную'
    }),
    href: ROUTES.catalog
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
        ],
        icon: <SentimentDissatisfied />
      },
      oops: {
        title: t('404_title-2', { defaultValue: 'Что-то пошло не так' }),
        description: [
          t('404_description-3', {
            defaultValue:
              'Произошла неожиданная ошибка. Попробуйте перезагрузить страницу или вернуться на главную.'
          })
        ],
        icon: <ErrorOutline />
      }
    }),
    [t]
  );

  useEffect(() => {
    return () => {
      resetBoundary();
    };
  }, [resetBoundary, location]);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <Container sx={containerStyles}>
      <Box sx={{ textAlign: 'center' }}>
        {/* Иконка ошибки */}
        <Box sx={iconStyles}>{ERRORS[type].icon}</Box>

        {/* Заголовок */}
        <Typography variant="h3" component="h1" sx={titleStyles}>
          {ERRORS[type].title}
        </Typography>

        {/* Описание */}
        <Typography variant="body1" sx={descriptionStyles}>
          {ERRORS[type].description.map((item, index) => (
            <React.Fragment key={index}>
              {item}
              {index < ERRORS[type].description.length - 1 && <br />}
            </React.Fragment>
          ))}
        </Typography>

        {/* Кнопки действий */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            gap: 2,
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {redirect && (
            <Button
              component={LocalizedNavLink}
              to={redirect.href}
              variant="contained"
              startIcon={<Home />}
              sx={linkStyles}
            >
              {redirect.text}
            </Button>
          )}

          {type === 'oops' && (
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={handleRefresh}
              sx={linkStyles}
            >
              {t('error_refresh', { defaultValue: 'Перезагрузить' })}
            </Button>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default ErrorTemplate;

type ErrorType = '404' | 'oops';

interface ErrorsInterface {
  title: string;
  description: string[];
  icon: React.ReactNode;
}
