import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './ErrorComponent.tsx';
import { productsLoader } from './components/data/services/products/products.ts';
import CarouselComponent from './components/main-page/carousel/CarouselComponent.tsx';
import HowToComponent from './components/main-page/how-to-cards/HowToComponent.tsx';
import { Products } from './components/products/Products.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,

    children: [
      {
        index: true,
        element: (
          <>
            <article className="center">
              <CarouselComponent />
            </article>
            <section>
              <h1>How it works</h1>
              <HowToComponent />
            </section>
          </>
        ),
        loader: productsLoader,
      },
      {
        path: 'products/:category',
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
