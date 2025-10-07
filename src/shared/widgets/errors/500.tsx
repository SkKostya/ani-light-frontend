import type { ComponentProps } from 'react';
import { Helmet } from 'react-helmet-async';

import ErrorTemplate from './error-template';

type IProps = Omit<ComponentProps<typeof ErrorTemplate>, 'type'>;

/**
 * Компонент страницы 500 (внутренняя ошибка сервера) в аниме-стиле
 */
const ServerError: React.FC<IProps> = ({ ...props }) => {
  return (
    <>
      <Helmet title="500 - Ошибка сервера" />
      <ErrorTemplate type="oops" {...props} />
    </>
  );
};

export default ServerError;
