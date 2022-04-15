import React from 'react';

import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import { App, reportWebVitals } from 'app';
import { GlobalStyle, theme } from 'style';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle />
  </ThemeProvider>,
);

reportWebVitals();
