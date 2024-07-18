import './ProductCard.scss';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  id: number;
}

export const ProductCard = ({ imageUrl, name, brand, price, id }: ProductCardProps) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-details">
          <h2 className="product-name">{name}</h2>
          <p className="product-description">{brand}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};
