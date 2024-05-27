import { s as supabase } from "../../../../../chunks/supabaseClient.js";
async function load({ params }) {
  let { data: product, error } = await supabase.from(params.categoryName).select().eq("id", params.id);
  return {
    product,
    error,
    son: "Hami"
  };
}
export {
  load
};
