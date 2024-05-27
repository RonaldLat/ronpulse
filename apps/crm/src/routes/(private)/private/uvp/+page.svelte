<script>
	import { enhance } from '$app/forms';
	import Label from '$lib/components/ui/label/label.svelte';

	export let form;
	export let data;
	console.log(data);
	$: {
		console.log(form, data);
	}
</script>

<h1 class="font-semibold text-2xl text-center mb-5">Enter New Lead's Details</h1>
<form
	method="POST"
	action="?/uvp"
	enctype="multipart/form-data"
	class="max-w-md mx-auto flex flex-col gap-2"
	use:enhance
>
	<Label for="name">Business Name</Label>
	<input type="text" name="name" class="dark:bg-gray-200" />
	<Label for="initials">Initials</Label>
	<input type="text" name="initials" class="dark:bg-gray-200" />
	<Label for="logo_url">Logo</Label>
	<input type="file" name="logo_url" class="dark:bg-gray-200" />
	<Label for="phone_number">Phone Number</Label>
	<input type="text" name="phone_number" class="dark:bg-gray-200" />
	<Label for="slogan">Slogan</Label>
	<input type="text" name="slogan" class="dark:bg-gray-200" />
	<button type="submit">Save</button>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	input {
		margin-bottom: 1rem;
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
	}

	button {
		background-color: #007bff;
		color: #fff;
		padding: 0.5rem 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
</style>
