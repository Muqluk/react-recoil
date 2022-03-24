import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { HelmetProvider } from 'react-helmet-async';

import AppRoot from 'src/app'


const container = document.getElementById('app');
const app = createRoot(container);

app.render(
  <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <HelmetProvider>
          <AppRoot />
        </HelmetProvider>
      </RecoilRoot>
    </BrowserRouter>
  </React.StrictMode>
);
