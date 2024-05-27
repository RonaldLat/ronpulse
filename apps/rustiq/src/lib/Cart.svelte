<script>
	import Icon from '@iconify/svelte';
	import { cart } from '$lib/store/products.js';
	import { goto } from '$app/navigation';
    console.log($cart)
</script>

<div
	aria-pressed="false"
	class="bg-sky-200 px-3 py-2 mx-auto  rounded  w-fit text-center text-gray-900 font-bold flex gap-1 hover:cursor-pointer"
	on:click={() => goto('/cart')}
>
	<Icon icon="mdi:cart-outline" class="inline-flex text-stone-900  text-2xl" />
	<p class="tex-center">{$cart.length}</p>
</div>
