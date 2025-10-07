import type React from 'react';
import { lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router';

import AppProvider from './providers/app.provider';
import Layout from './providers/layout';
import { ROUTES } from './shared/constants';
import NotFound from './shared/widgets/errors/404';

const Catalog = lazy(() => import('./pages/Catalog/Catalog'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppProvider />,
    children: [
      {
        path: '/:lang',
        children: [
          {
            element: <Layout />,
            children: [
              {
                path: ROUTES.catalog,
                element: <Catalog />
              },
              {
                path: '*',
                element: (
                  <div className="app-router-not-found">
                    <NotFound />
                  </div>
                )
              }
            ]
          }
        ]
      }
    ]
  }
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
