import './styles/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';

import App from './App';
import './i18n';
import { store } from './store/store';

const rootEl = document.getElementById('root');
if (rootEl) {
  const helmetContext = {};

  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HelmetProvider context={helmetContext}>
          <Helmet titleTemplate="AniLight | %s" defaultTitle="AniLight" />
          <App />
        </HelmetProvider>
      </Provider>
    </React.StrictMode>
  );
}
