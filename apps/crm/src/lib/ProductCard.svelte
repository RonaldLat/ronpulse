<script>
	import { page } from '$app/stores';
	export let item;
	import { cart } from '$lib/store/products';


	let disabled = false;
	function addToCart(item) {
		if ($cart.includes(item)) {
			console.log('item is in cart');
		} else {
			cart.update((data) => {
				disabled = true;
				return [...data, item];
			});
		}
	}
	const pathname = $page.data.pathname;
</script>


<div
	class="relative m-x-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-2xl"
>
	<a
		class="relative mx-3 mt-3 flex w-full overflow-hidden rounded-xl"
		href="{pathname}/details/{item.id}"
	>
		<img class="object-cover h-full" src={item.main_image} alt="product image" />
		<span
			class="absolute hidden top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white"
			>39% OFF</span
		>
	</a>
	<div class="mt-4 px-5 pb-5">
		<a href="{pathname}/details/{item.id}">
			<h5 class="text-lg tracking-tight text-slate-900">{item.name}</h5>
		</a>
		<div class="mt-2 mb-5 flex items-center justify-between">
			<p>
				<span class="text-lg font-bold whitespace-nowrap text-slate-900"
					>KES. {new Intl.NumberFormat().format(item.special_price)}</span
				>
				<span class="text-sm text-slate-900 line-through hidden">{item.old_price}</span>
			</p>
		</div>
		<button
			on:click={() => {
				addToCart(item);
			}}
			{disabled}
			class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="mr-2 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
				/>
			</svg>
			Add to cart</button
		>
	</div>
</div>
