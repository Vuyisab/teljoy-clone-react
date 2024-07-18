import supabase from '../../../../supabaseClient';
import { LoaderFunctionArgs } from 'react-router-dom';

export const productsLoader = async () => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params as { id: string };
  const { data, error } = await supabase.from('products').select('*').eq('id', Number(id)).single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
