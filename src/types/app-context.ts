import { Product } from '../components/data/types/product.ts';

export type AppContext = {
  products: Array<Product>;
  setProducts?: (products: Array<Product>) => void;
};
