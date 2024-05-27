<!-- ProductForm.svelte -->

<script>
	let imgUrl = '';
	import { supabase } from '$lib/supabaseClient';
	let name = 'aaaa';
	let specialPrice = 333222;
	let descreption = 'ffsdea';
	let features = 'lslkdjflad';
	let file;
	let uploading = false;

	function formatFileName(fileName) {
		return fileName
			.replace(/[^a-zA-Z0-9\s.-]/g, '')
			.replace(/\s+/g, '-')
			.replace(/\.[^.]+$/, '');
	}

	async function handleSubmit(event) {
		event.preventDefault();

		const product = {
			main_image: imgUrl,
			name,
			special_price: specialPrice,
			descreption: descreption,
			features
		};

		const { error: text } = await supabase.from('living').insert(product);
		console.log(text);

		// Read the selected file using FileReader API

		// Send the product data to Supabase using your preferred method (e.g., fetch or axios).
		// Replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_API_KEY' with your actual Supabase URL and API key.
	}

	const uploadAvatar = async () => {
		const file = event.target.files[0];
		const fileExt = file.name.split('.').pop();
		const filePath = `living`;
		const fileName = formatFileName(file.name);

		const { data, error } = await supabase.storage
			.from('furnitureImages')
			.upload(`${filePath}/${fileName}.${fileExt}`, file, {
				cacheControl: '3600',
				upsert: false
			});
		console.log(data);
		console.log('error', error);
	};
</script>

<div>
	<form on:submit={handleSubmit} class="grid grid-cols-1 gap-y-2.5">
		<label>
			Main Image:
			<input type="file" on:change={uploadAvatar} />
		</label>

		<label>
			Name:
			<input type="text" bind:value={name} />
		</label>

		<label>
			Special Price:
			<input type="text" bind:value={specialPrice} />
		</label>

		<label>
			Description:
			<textarea bind:value={descreption} />
		</label>

		<label>
			Features:
			<input type="text" bind:value={features} />
		</label>

		<button type="submit">Submit</button>
	</form>
</div>
