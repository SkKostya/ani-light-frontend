import type { ComponentProps } from 'react';
import { Helmet } from 'react-helmet-async';

import ErrorTemplate from './error-template';

type IProps = Omit<ComponentProps<typeof ErrorTemplate>, 'type'>;

/**
 * Компонент страницы 404 в аниме-стиле
 */
const NotFound: React.FC<IProps> = ({ ...props }) => {
  return (
    <>
      <Helmet title="404 - Страница не найдена" />
      <ErrorTemplate type="404" {...props} />
    </>
  );
};

export default NotFound;
