import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Category } from './components/data/types/category';
import Header from './components/top-nav/header/Header';
import supabase from './supabaseClient';
import CarouselComponent from './components/main-page/carousel/CarouselComponent';

function App() {
  const [categories, setCategories] = useState<Array<Category>>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data, error } = await supabase.from<Category>('categories').select('id,name,created_at');
      if (!error) {
        setCategories(data);
      }
    };
    fetchCategories();
  }, []);

  return (
    <>
      <Header />
      <h1>These are our categories</h1>
      <main className="center">
        <CarouselComponent />
      </main>
    </>
  );
}

export default App;
