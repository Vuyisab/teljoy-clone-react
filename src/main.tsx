import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './ErrorComponent.tsx';
import { productsLoader } from './components/data/services/products/products.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,
    loader: productsLoader,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
