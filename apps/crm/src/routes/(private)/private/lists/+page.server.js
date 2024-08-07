export async function load({ fetch, locals: { supabase } }) {
	const req = await fetch('/api/leads');
	const data = await req.json();

	// let { data: prospects, error } = await supabase.schema('latcrm').from('prospects').select('*').range(0, 9);
	let { data: prospects, error } = await supabase.schema('latcrm').from('prospects').select('*').neq('phone','');
	console.log('Prospects', data);

	return {
		leads2: prospects,
		leads: data
	};
}
