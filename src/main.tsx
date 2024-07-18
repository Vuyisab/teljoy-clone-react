import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorComponent from './ErrorComponent.tsx';
import { productLoader, productsLoader } from './components/data/services/products/products.ts';
import CarouselComponent from './components/main-page/carousel/CarouselComponent.tsx';
import HowToComponent from './components/main-page/how-to-cards/HowToComponent.tsx';
import { Products } from './components/products/Products.tsx';
import { AppProvider } from './Provider.tsx';
import { categoriesLoader } from './components/data/services/categories/categories.ts';
import { ProductComponent } from './components/product/Product.tsx';

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
        path: 'product/:id',
        element: <ProductComponent />,
        loader: productLoader,
      },
      {
        path: 'products/:categoryId',
        element: <Products />,
        loader: categoriesLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  </React.StrictMode>
);
