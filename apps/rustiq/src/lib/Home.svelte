<script>
	import { category_links } from '$lib/store/products';
</script>

<section class="grid place-items-center w-full space-y-6">
	<div class="py-4 pb-10 space-y-6">
		<h1 class="text-4xl text-stone-800 font-caudex text-center w-full leading-snug">WELCOME TO RUSTIQ HOME FURNITURE</h1>
		<p class="text-center text-stone-700 italic">The Smarter way to buy furniture</p>
	</div>
	<div
		class="text-[#4E5471] bg-no-repeat rounded bg-cover w-full p-4 bg-center max-w-md flex flex-col gap-4 bg-[url('$lib/ui/sofa_grey.png')]"
	>
		<p>High quality sofa <br /> started</p>
		<p>
			<span class="text-2xl font-bold">70%</span> <span>off</span>
		</p>
	</div>

<div>
<span class="group text-stone-600 font-extrabold text-2xl font-caudex transition duration-300">
SHOP BY ROOM
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-600"></span>
</span>
</div>
	<div class="grid md:grid-cols-3 gap-4 w-full">
		{#each $category_links as category}
			<a class="w-full relative" href={category.link} data-sveltekit-preload-data="hover">
				<img
					src={'ui/' + category.img}
					class="w-full rounded-md h-full brightness-50 object-fit hover:brightness-75 ease-in duration-300"
					alt={category.title}
				/>
				<div class="absolute text-gray-100 top-5 left-4">
					<p class="uppercase text-xl mb-2">{category.title}</p>
					<span class="border font-ubuntu p-1 rounded-sm uppercase text-xs border-gray-100"
						>explore now</span
					>
				</div>
			</a>
		{/each}
	</div>
</section>
