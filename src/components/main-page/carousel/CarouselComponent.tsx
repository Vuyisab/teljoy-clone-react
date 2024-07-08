import { Carousel } from 'react-bootstrap';
import './Carausel.less';
import { useGetProducts } from '../../data/services/products/products';

const CarouselComponent = () => {
  const products = useGetProducts();
  return (
    <Carousel className="carousel">
      {products.map(product => (
        <Carousel.Item>
          <img className="w-100 carousel-image" src={product.imageurl} alt={product.name} />
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
