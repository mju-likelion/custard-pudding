import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';
import ReactGA from 'react-ga4';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  release: 'release version',
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
});

if (process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
