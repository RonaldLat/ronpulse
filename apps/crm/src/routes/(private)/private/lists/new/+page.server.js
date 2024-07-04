import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';

export const actions = {
	addfile: async ({ request, locals: { supabase } }) => {
		const data = await request.formData();
		const niche = Object.fromEntries(data).niche;
		const file = data.get('file');
		console.log(niche);

		try {
			//Convert the file to string
			const fileContent = Buffer.from(await file.arrayBuffer()).toString('utf-8');
			//parse the JSON data
			const jsonData = JSON.parse(fileContent);

			const records = jsonData.map((item) => {
				return {
					cid: item.cid,
					title: item.title || '',
					phone: item.phone || '',
					address: item.address || '',
					city: item.city || '',
					street: item.street || '',
					url: item.url || '',
					niche,
					description: item.description || '',
					category_name: item.categoryName || '',
					categories: item.categories || [],
					image_urls: item.imageUrls || [],
					images_count: item.imagesCount || 0,
					location: item.location || {},
					located_in: item.locatedIn || '',
					rank: item.rank || 0,
					total_score: item.totalScore || '',
					place_id: item.placeId || '',
					scraped_at: item.scrapedAt || '',
					reviews_count: item.reviewsCount || 0,
					reviews: item.reviews|| [],
					website: item.website || '',
					call_date: item.call_date || '',
					call_outcome: item.call_outcome || '',
					next_action: item.next_action || '',
					next_action_date: item.next_action_date || '',
					conclusion: item.conclusion || '',
					is_lead: item.is_lead || false,
					tags: item.tags || [],
					demo_website_details: item.demo_website_details || {}
				};
			});
			const myCalls = {
				title: 'call two',
				note: 'note two'
			};

			const { data: sb_data, error: err } = await supabase
				.schema('latcrm')
				.from('prospects')
				//.upsert(jsonData, { onConflict: 'handle' })
				.upsert(records, { onConflict: 'cid' })
				.select();
			if (data) {
				console.log('Supabase has successfully received your data');
			}
			if (err) {
				console.log('Supabase Error:', err);
			}

			return {
				status: 200,
				file_success: 'File uploaded succesfully',
				supabase_success: 'Supabase updated',
				jsonData,
				err,
				records
			};
		} catch (error) {
			console.log('Error saving file', error);
			return {
				status: 400,
				error: 'Error reading JSON file'
			};
		}
	},

	upload: async ({ request }) => {
		const form = await request.formData();
		const file = form.get('file2');

		if (!file) {
			throw error(400, { message: 'No file to upload.' });
		}

		const { url } = await put(file.name, file, { access: 'public' });
		return { uploaded: url };
	}
};
