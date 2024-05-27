<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/ui/button/button.svelte';
	import { toast } from 'svelte-sonner';

	export let data;
	export let form;

	$: if (form) {
		toast.success('Speech is ready!');
	}

	$: console.log('data:', data);
</script>

<main class="text-gray-900">
	<p>hello tts</p>

	<form
		method="POST"
		action="?/tts"
		class="w-2/3 space-y-6 flex flex-col border p-2 rounded-md border-slate-300 gap-2 mx-auto"
		use:enhance
	>
		<textarea
			placeholder="What is on your mind"
			class="resize-none h-40 rounded-md p-2 bg-sky-50"
			name="text"
		/>
		<Button type="submit" class="bg-sky-400 w-fit mx-auto">Get Speech</Button>
	</form>

	{#if form}
		<Button class="mt-10 bg-green-400 mx-auto block">
			<a href={form}>Download </a>
		</Button>
	{/if}

	<ul></ul>
</main>
