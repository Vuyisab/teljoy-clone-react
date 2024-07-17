import { createContext, ReactNode, useState } from 'react';
import { AppContext } from './types/app-context.ts';
import { Product } from './components/data/types/product.ts';

interface ApplicationProviderProps {
  children: ReactNode;
}

export const ApplicationContext = createContext<AppContext>({
  products: [],
});

export const AppProvider: React.FC<ApplicationProviderProps> = ({ children }: ApplicationProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  return <ApplicationContext.Provider value={{ products, setProducts }}>{children}</ApplicationContext.Provider>;
};
