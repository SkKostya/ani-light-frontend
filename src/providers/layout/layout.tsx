import './layout.scss';

import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router';

import { ROUTES } from '@/shared/constants';
import { MainLoader } from '@/shared/ui';
import ErrorTemplate from '@/shared/widgets/errors/error-template/error-template';

const Layout: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="layout">
      <main className="layout__main">
        <ErrorBoundary
          onError={console.error}
          fallback={
            <div className="layout__error">
              <ErrorTemplate
                type="oops"
                redirect={{
                  text: t('404_redirect-text-2'),
                  href: ROUTES.autoCreditCreate
                }}
              />
            </div>
          }
        >
          <Suspense fallback={<MainLoader fullScreen={true} />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </div>
  );
};

export default Layout;
