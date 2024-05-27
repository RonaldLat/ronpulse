<script>
	/** @type {import('./$types').PageData} */
	/** @type {import('./$types').ActionData} */

	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';

	export let form;
	$: console.log(form);

	$: if (form) {
		toast.success(form.supabase_success);
		toast.success(form.file_success);
	}

	$: console.log('form ', form);
</script>

<section class="px-2 bg-blue-100 h-32">
	<form method="POST" action="?/addfile" enctype="multipart/form-data" use:enhance>
		<label for="file">Enter content</label>
		<input type="file" name="file" class="bg-white" />
		<Button type="submit">Upload</Button>
	</form>
</section>

<form use:enhance action="?/upload" method="POST" enctype="multipart/form-data" class="p-1">
	<input type="file" name="file2" required />
	<button>Upload</button>

	{#if form}
		<p>uploaded {form.uploaded}</p>
	{/if}
</form>
