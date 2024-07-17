import ProductsSideNav from './side-nav/ProductsSideNav.tsx';
import './Products.scss';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../types/app-context.ts';
import { ApplicationContext } from '../../Provider.tsx';
import { useLoaderData, useParams } from 'react-router-dom';
import { Category } from '../data/types/category.ts';
import { ProductsMainComponent } from './main-page/ProductsMainComponent.tsx';

export const Products = () => {
  const { products } = useContext<AppContext>(ApplicationContext);
  const categories = useLoaderData() as Category[];
  const { categoryId } = useParams();

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<Array<string>>([]);

  const brands = () => {
    if (categoryId) {
      const selectedCategoryId = Number(categoryId);
      const selectedCategory = categories.find(categoryItem => categoryItem.id === selectedCategoryId);
      console.log(selectedCategory);

      setSelectedCategory(selectedCategory?.name ?? '');

      if (selectedCategory) {
        const brands: string[] = products.filter(product => product.category_id === selectedCategoryId)?.map(product => product.Brand ?? '');
        brands && setSelectedBrands(brands);
      }
    }
  };

  useEffect(() => {
    brands();
  }, []);
  return (
    <div className="father d-flex">
      <div className="side">
        <ProductsSideNav brands={selectedBrands} category={selectedCategory} />
      </div>
      <div className="right">
        <ProductsMainComponent products={products} />
      </div>
    </div>
  );
};
