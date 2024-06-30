import { useEffect, useState } from 'react';
import './App.css';
import { Category } from './components/data/types/category';
import Header from './components/top-nav/header/Header';
import supabase from './supabaseClient';

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
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
