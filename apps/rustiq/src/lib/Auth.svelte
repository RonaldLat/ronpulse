<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient.js';
	import { currentUser } from '$lib/store/authState.js';
	import Avatar from './components/Avatar.svelte';


	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			//console.log('sign out error: ', error);
		}
	};
	const navigateTo = () => {
		goto('/login');
	};
	$: supabase.auth.onAuthStateChange((event, session) => {
		console.log('event: ', event, 'session: ', session);
		try {
			$currentUser = session.user;
		} catch {
			console.log('No session available');
			$currentUser = null;
		}
		///getCurrentUser();
	});
	const getCurrentUser = async () => {
		const {
			data: { user }
		} = await supabase.auth.getUser();
		if (user) {
			$currentUser = user;
		}
	};

</script>

{#if $currentUser}
	<button  class="bg-transparent">
    <Avatar />


	</button>
{:else}
	<button class="bg-sky-400 text-slate-800 px-3 py-2 rounded-sm" on:click={()=>goto('/login')}>Login</button>
{/if}
