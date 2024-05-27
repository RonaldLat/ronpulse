<script>
	import { onMount } from 'svelte';

	let items = [];

	onMount(async () => {
		const res = await fetch(`/bedroom.json`);
		let data = await res.json();
		items = data;
	});
</script>

<section class="text-gray-600">
	<h1 class="text-2xl text-2xl text-center">bedroom section</h1>
	<ul class="grid grid-cols-1 md:grid-cols-3 gap-4">
		{#each items as item}
			<li class="bg-slate-50 shadow-sm p-2 flex-col justify-center text-center  items-center ">
				<img
					class=""
					src="bedroom/{item.name.toLowerCase().replace(/ /g, '_')}.jpg"
					alt={item.name}
				/>
				<a href="details/{item.name.toLowerCase().replace(/ /g, '-')}" class="text-center font-bold"
					>{item.name}</a
				>
				<div class="text-sm">
					<span>{item.special_price}</span>
					<span class="line-through">{item.old_price}</span>
				</div>
			</li>
		{/each}
	</ul>
</section>
