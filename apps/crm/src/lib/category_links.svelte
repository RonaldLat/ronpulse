<script>
	import { category_links } from '$lib/store/products';
</script>

<ul
	class="bg-transparent w-full px-3 gap-3 overflow-x-scroll px-5 text-lg flex capitalize justify-around"
>
	{#each $category_links as category}
		<li class="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r  p-1 rounded text-gray-50" class:active={'bg-sky-400'}>
			<a class="line-clamp-1" href={category.link}>{category.title}</a>
		</li>
	{/each}
</ul>
