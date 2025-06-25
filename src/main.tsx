
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';

// Renderiza la aplicación principal dentro del contexto del carrito y el enrutador de React
// El CarritoProvider envuelve la aplicación para proporcionar el contexto del carrito de compras
// El BrowserRouter permite la navegación entre diferentes rutas de la aplicación
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <CarritoProvider>
      <App />
      </CarritoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
