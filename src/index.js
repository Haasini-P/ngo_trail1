// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // This should contain your @tailwind directives
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);