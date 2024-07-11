import { createClient } from '@supabase/supabase-js';
import { Database } from './types/supabase';

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

console.log(supabaseUrl);
const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export default supabase;
