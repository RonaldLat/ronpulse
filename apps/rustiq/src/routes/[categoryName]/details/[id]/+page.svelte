<script>
	import { page } from '$app/stores';
	export let data;

	const product = data.product[0];
	import { cart } from '$lib/store/products';

	let disabled = false;
	function addToCart(item) {
		if ($cart.includes(item)) {
			console.log('item is in cart');
			disabled = true;
		} else {
			cart.update((data) => {
				return [...data, item];
			});
			disabled = true;
		}
	}

	console.log('product', product);
</script>

<!-- component -->
<section class="mx-auto text-gray-700 body-font overflow-hidden min-h-screen">
	<div class="container px-5 py-24 mx-auto">
		<div class="lg:w-4/5 mx-auto flex flex-wrap">
			<img
				alt="ecommerce"
				class="lg:w-1/2 w-full md:object-contain object-center rounded border border-gray-200"
				src={product.main_image}
			/>
			<div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
				<h2 class="text-sm title-font text-gray-500 tracking-widest">NAME</h2>
				<h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
				<h2 class="pt-4 text-sm title-font text-gray-500 tracking-widest">DESCRIPTION</h2>
				<p class="leading-relaxed my-2">{product.description}</p>
				<h2 class="pt-4 text-sm title-font text-gray-500 tracking-widest">FEATURES</h2>
				<p class="leading-relaxed my-2 text-sm">{product.features}</p>
				<img
					alt="ecommerce"
					class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
					src={product.detail_image}
				/>
				<div class="flex mt-4">
					<span class="title-font font-medium text-2xl text-gray-900">
						<span class="text-xl font-bold whitespace-nowrap text-slate-900"
							>KES. {new Intl.NumberFormat().format(product.special_price)}
						</span>
						<button
							on:click={() => {
								addToCart(product);
							}}
							{disabled}
							class="flex ml-auto text-white bg-blue-500 border-0 my-3 py-2 px-6 focus:outline-none hover:bg-sky-600 transition ease-in-out delay-150 rounded"
							>Add to Cart</button
						>
					</span>
				</div>
			</div>
		</div>
	</div>
</section>
