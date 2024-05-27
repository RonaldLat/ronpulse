/** @type {import('./$types').PageLoad} */
import { supabase } from '$lib/supabaseClient';
export async function load({ params }) {

  let { data: product, error } = await supabase
    .from(params.categoryName)
    .select()
    .eq('id', params.id)


  return {
    product,
    error,
    son: 'Hami'
  };
}
