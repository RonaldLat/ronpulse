<script>
	import Auth from '$lib/Auth.svelte';
	import Home from '$lib/Home.svelte';
	import ProductForm from '$lib/ProductForm.svelte';
	import { MyCounterButton } from '@repo/ui';
</script>

<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300">
	<MyCounterButton />
	<Home />
</main>
