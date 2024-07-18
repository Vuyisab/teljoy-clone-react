import supabase from '../../../../supabaseClient.ts';

export const categoriesLoader = async () => {
  const { data, error } = await supabase.from('categories').select('*');

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
