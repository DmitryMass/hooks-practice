import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import Application from './components/Application';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.createRoot(document.querySelector('.root')).render(
    <React.StrictMode>
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    </React.StrictMode>
  );
});
