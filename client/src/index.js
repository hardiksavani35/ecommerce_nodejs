import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { RouterProvider } from 'react-router-dom';
import App from './App';
import router from './router/index';
import reportWebVitals from './reportWebVitals';
import {CartProvider} from './store/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={router} />
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
