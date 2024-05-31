import { createClient } from '@supabase/supabase-js';
// Create a single supabase client for interacting with your database
const supabase = createClient(
	'https://meglulbkwhtuzjstgwau.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1lZ2x1bGJrd2h0dXpqc3Rnd2F1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ3NDg3MjUsImV4cCI6MjAwMDMyNDcyNX0.nPinHAPKykUMzFqwLzFLQ7KsmtMgoJXD0HcCQtggIJI'
);

export async function load({ params }) {
	console.log(supabase);
	let { data: uvp, error } = await supabase.from('uvp').select().eq('id', params.id);
	if (error) {
		console.log(error);
	}
	console.log(uvp);
	return {
		details: {
			title: `Welcome to ${params.id} Entreprises`,
			name: 'Jumia',
			content: `Content for ${params.id} goes here`,
			id: params.id,
			uvp
		}
	};
}
