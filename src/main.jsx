import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalCart from './components/GlobalCart';
import './index.css';
import Modal from 'react-modal';

// Definir el elemento raíz de la aplicación para react-modal
Modal.setAppElement('#root');

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <GlobalCart />
  </React.StrictMode>
);
