import { supabase } from "$lib/supabaseClient";

export async function load({params}) {

  let cat = params.categoryName
  let { data:categoryData , error } = await supabase
    .from(params.categoryName)
    .select('*')
    .range(0,9)

  return {
    categoryData, error, cat
  };
}
