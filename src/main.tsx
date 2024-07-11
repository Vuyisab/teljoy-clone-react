import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './ErrorComponent.tsx';
import { productsLoader } from './components/data/services/products/products.ts';
import CarouselComponent from './components/main-page/carousel/CarouselComponent.tsx';
import HowToComponent from './components/main-page/how-to-cards/HowToComponent.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorComponent />,

    children: [
      {
        path: '',
        element: (
          <>
            <main className="center">
              <CarouselComponent />
            </main>
            <section>
              <h1>How it works</h1>
              <HowToComponent />
            </section>
          </>
        ),
        loader: productsLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
