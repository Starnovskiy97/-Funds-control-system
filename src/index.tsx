import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.scss';
import { ProvideBaseStores } from './providers/StoresProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ProvideBaseStores>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProvideBaseStores>
  </React.StrictMode>
);
