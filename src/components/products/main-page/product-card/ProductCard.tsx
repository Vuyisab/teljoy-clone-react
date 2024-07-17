import './ProductCard.scss';

interface ProductCardProps {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
}

export const ProductCard = ({ imageUrl, name, brand, price }: ProductCardProps) => {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={name} className="product-image" />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{brand}</p>
        <p className="product-price">${price}</p>
      </div>
    </div>
  );
};
