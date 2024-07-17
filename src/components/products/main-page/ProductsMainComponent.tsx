import './ProductsMainComponent.scss';
import { Product } from '../../data/types/product.ts';
import { ProductCard } from './product-card/ProductCard.tsx';

interface ProductsMainComponentProps {
  products: Array<Product>;
}

export const ProductsMainComponent = ({ products }: ProductsMainComponentProps) => {
  return (
    <div className="d-flex flex-wrap side-products m-5 ">
      {products.map((product: Product) => (
        <ProductCard imageUrl={product.imageurl ?? ' '} name={product.name} brand={product.Brand ?? ''} price={product.price} key={product.id} />
      ))}
    </div>
  );
};
