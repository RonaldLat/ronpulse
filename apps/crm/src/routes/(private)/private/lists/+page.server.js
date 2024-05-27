export async function load({ fetch, locals: { supabase } }) {

  const req = await fetch('/api/leads')
  const data = await req.json()

  let { data: latcrm96, error } = await supabase
    .from('latcrm96')
    .select('*')
    .range(0, 9)



  return {
    leads2: latcrm96,
    leads: data,
  };
}


