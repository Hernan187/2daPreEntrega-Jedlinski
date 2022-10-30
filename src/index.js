import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { CarritoProvider } from './context/carritoContext';
import App from './App';
// import "./functions/z.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CarritoProvider>
    <App />
  </CarritoProvider>
  // </React.StrictMode>
);

