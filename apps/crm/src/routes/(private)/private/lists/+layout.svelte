<script>
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
	import Button from '$lib/components/ui/button/button.svelte';
	const userId = $page.params.userId;
	export let data;
	// console.log('categories', data)
</script>

<h1>Groups</h1>
<h1>{data.count} chances.</h1>
{#key data.pathname}
	<ul class="flex">
		<li>
			<Button class="bg-sky-300">
				<a href="/private/lists">List</a>
			</Button>
		</li>
		<li>
			<Button class="bg-sky-3">
				<a href="/tracker"> Tracker</a>
			</Button>
		</li>
		<li>
			<a href="/private/lists/new">
				<Button class="text-green-400">New Group</Button>
			</a>
		</li>
	</ul>
	<hr />
	<div
		in:fly={{ x: -30, duration: 200, delay: 150 }}
		out:fly={{ x: -30, duration: 150 }}
		class="pt-10"
	>
		<slot />
	</div>
{/key}
