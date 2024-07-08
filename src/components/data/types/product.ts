import { Category } from './category';

export type Product = {
  name: string;
  description: string;
  price: number;
  category: Category;
  imageurl: string;
  subcategory: string;
  brand: string;
};
