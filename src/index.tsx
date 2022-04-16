import 'antd/dist/antd.css';

import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import { App, reportWebVitals } from 'app';
import { store } from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

reportWebVitals();
