import { Carousel } from 'react-bootstrap';
import './Carausel.scss';
import { useLoaderData } from 'react-router-dom';
import { Product } from '../../data/types/product';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../../types/app-context.ts';
import { ApplicationContext } from '../../../Provider.tsx';

const CarouselComponent = () => {
  const products = useLoaderData() as Product[];
  const { setProducts } = useContext<AppContext>(ApplicationContext);

  useEffect(() => {
    setProducts && setProducts(products);
  }, []);
  return (
    <Carousel className="carousel">
      {products.map(product => (
        <Carousel.Item key={product.id}>
          <img className="w-100 carousel-image" src={product.imageurl ?? ''} alt={product.name} />
          <div className="carousel-overlay"></div>
          <Carousel.Caption>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
