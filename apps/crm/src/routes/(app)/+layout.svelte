<script>
	import { fly } from 'svelte/transition';
	// import '../app.css';
	import '../../app.css';
	import Categories from '$lib/category_links.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { onNavigate, goto, invalidate, invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Toaster } from '$lib/components/ui/sonner';

	export let data;
	const route = $page.route;

	//Auth
	$: ({ session, supabase } = data);

	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (!newSession) {
				/**
				 * Queue this as a task so the navigation won't prevent the
				 * triggering function from completing
				 */

				setTimeout(() => {
					goto('/', { invalidateAll: true });
				});
			}
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});

		return () => data.subscription.unsubscribe();
	});

	onNavigate(() => {
		showSideNav = false;
	});
	let showSideNav = false;

	const toggleSideNav = () => (showSideNav = !showSideNav);
</script>

<div
	class="fixed z-20 top-0 left-0 h-full w-1/2 md:w-1/2 bg-myColor-700 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300"
	class:translate-x-0={showSideNav}
	class:-translate-x-full={!showSideNav}
>
	<!-- Your side navigation content goes here -->
	<button class="p-2 text-3xl text-white fixed bottom-1 right-1" on:click={toggleSideNav}>
		close
	</button>
	<!-- Add other side navigation content -->
	<Sidebar {route} />
	<!-- Toggle button within the side navigation menu -->
</div>
<main
	class=" container mx-auto text-gray-900 py-4 max-w-5xl font-poppipns px-2 md:px-0 min-h-screen relative bg-gray-100"
>
	<header class="w-full z-50 fixed top-0 left-0 gap-x-2">
		<div class="bg-transparent">
			<Navbar {toggleSideNav} />
		</div>
	</header>

	<form action="/auth/logout" method="POST" class="hidden">
		<button type="submit" class="bg-orange-500 text-black p-2 mt-10"> LogOut</button>
	</form>

	{#key data.pathname}
		<div
			in:fly={{ x: -30, duration: 200, delay: 150 }}
			out:fly={{ x: -30, duration: 150 }}
			class="pt-10"
		>
			<Toaster />
			<slot />
		</div>
	{/key}
</main>
<Footer class="bg-black text-sky-200" />
