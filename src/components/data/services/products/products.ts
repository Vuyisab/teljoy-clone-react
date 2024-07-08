import { useEffect, useState } from 'react';
import { Product } from '../../types/product';
import supabase from '../../../../supabaseClient';

export const useGetProducts = (): Array<Product> => {
  const [products, setproducts] = useState<Array<Product>>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase.from<Product>('products').select('*');

      if (error) {
        console.log(error);
      } else {
        setproducts(data);
      }
    };

    fetchProducts();
  }, []);

  return products;
};
