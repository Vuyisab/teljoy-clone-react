import './BigProductcard.scss';

interface BigProductCardProps {
  imageUrl: string;
  name: string;
  brand: string;
  price: number;
  description: string;
}

export const BigProductCard = ({ imageUrl, name, brand, price, description }: BigProductCardProps) => {
  return (
    <div className="card mb-3 big-product-card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imageUrl} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h1 className="card-title">{name}</h1>
            <h1 className="card-title">R{price}</h1>
            <p className="card-text">{description}</p>
            <h3 className="card-text">
              <small className="text-body-secondary">{brand}</small>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
