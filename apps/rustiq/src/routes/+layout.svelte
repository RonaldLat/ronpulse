<script>
	import { fly } from 'svelte/transition';
	import '../app.css';
	import Categories from '$lib/category_links.svelte';
	import Cart from '$lib/Cart.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	export let data;
</script>

<main

	class="md:px-6 container mx-auto py-4 max-w-5xl font-poppipns px-2 md:px-4 min-h-screen relative bg-gray-100"
>
	<header class="w-full z-50 fixed top-0 left-0 gap-x-2">
		<div class="bg-transparent">

			<Navbar />
		</div>
	</header>
	{#key data.pathname}
		<div in:fly={{ x: -30, duration: 200, delay: 150 }} out:fly={{ x: -30, duration: 150 }} class="pt-10">
			<slot />
		</div>
	{/key}
</main>
<Footer class="bg-stone-900 text-sky-200"/>
