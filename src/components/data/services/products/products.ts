import supabase from '../../../../supabaseClient';

export const productsLoader = async () => {
  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
