import ProductsSideNav from './side-nav/ProductsSideNav.tsx';
import './Products.scss';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../types/app-context.ts';
import { ApplicationContext } from '../../Provider.tsx';
import { useLoaderData, useParams } from 'react-router-dom';
import { Category } from '../data/types/category.ts';
import { ProductsMainComponent } from './main-page/ProductsMainComponent.tsx';
import { Filter } from '../data/types/filter.ts';
import { Product } from '../data/types/product.ts';

export const Products = () => {
  const { products } = useContext<AppContext>(ApplicationContext);
  const categories = useLoaderData() as Category[];
  const { categoryId } = useParams();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<Array<string>>([]);
  const [productfilter, setProductfilter] = useState<Filter>({ price: { start: 0, end: 100_000_000 } });

  const brands = () => {
    if (categoryId) {
      const selectedCategoryId = Number(categoryId);
      const selectedCategory = categories.find(categoryItem => categoryItem.id === selectedCategoryId);

      setSelectedCategory(selectedCategory?.name ?? '');

      if (selectedCategory) {
        const brands: string[] = products.filter(product => product.category_id === selectedCategoryId)?.map(product => product.Brand ?? '');
        brands && setSelectedBrands(brands);
      }
    }
  };

  const filterByBrand = (products: Array<Product>) =>
    productfilter.brand ? products.filter(product => product.Brand === productfilter.brand) : products;
  const filterByPrice = (products: Array<Product>) =>
    products.filter(product => product.price >= productfilter.price?.start && product.price <= productfilter?.price?.end);
  const selectedProducts = filterByPrice(filterByBrand(products));

  useEffect(() => {
    brands();
  }, [products.length > 0]);
  return (
    <div className="father d-flex">
      <div className="side">
        <ProductsSideNav brands={selectedBrands} category={selectedCategory} setFilter={setProductfilter} currentFilter={productfilter} />
      </div>
      <div className="right">
        <ProductsMainComponent products={selectedProducts} filter={productfilter} />
      </div>
    </div>
  );
};
