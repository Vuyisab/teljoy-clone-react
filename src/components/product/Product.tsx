import { useLoaderData } from 'react-router-dom';
import { Product } from '../data/types/product.ts';
import { BigProductCard } from './product-card/BigProductCard.tsx';
import './Product.scss';
import { useState } from 'react';

export const ProductComponent = () => {
  const product = useLoaderData() as Product;
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => {
        const newQuantity = prevQuantity - 1;
        setQuantity(newQuantity);
        return newQuantity;
      });
    }
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => {
      const newQuantity = prevQuantity + 1;
      setQuantity(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="product">
      <div className="row">
        <div className="col-8">
          <BigProductCard
            imageUrl={product.imageurl ?? ''}
            name={product.name}
            brand={product.Brand ?? ''}
            price={product.price}
            description={product.description ?? ''}
          />
        </div>
        <div className="col-4 side-piece d-flex flex-column justify-content-center align-items-center">
          <div className="quantity d-flex gap-1 justify-content-between align-items-baseline">
            <p>Quantity: </p>
            <div className="quantity-control">
              <button onClick={handleDecrement} disabled={quantity <= 1}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
          </div>

          <div className="d-grid gap-3 col-6 mx-auto">
            <button className="btn btn-success" type="button">
              ADD TO CART
            </button>
            <button className="btn btn btn-secondary" type="button">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
      <h1>Yebo yes</h1>
    </div>
  );
};
