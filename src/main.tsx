import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './App.css';

const container = document.querySelector('#root');

const root = createRoot(container as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
