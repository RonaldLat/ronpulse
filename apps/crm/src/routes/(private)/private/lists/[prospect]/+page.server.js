export async function load({ params, locals: { supabase } }) {
	// const prospect_id = Number(params.prospect)
	const prospect_id = 13723345841352611641

	let { data: prospect_data, error } = await supabase
		.schema('latcrm')
		.from('prospects')
		.select('*')
		.eq('cid', prospect_id)
		.single();
	console.log('prospectz;', prospect_data);

	return {
		prospect_id,
		prospect_data
	};
}
