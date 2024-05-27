<script>
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { currentUser } from '$lib/store/authState.js';

	beforeNavigate((navigation) => {
		console.log(navigation);
		if ($currentUser) {
			console.log('login first');
		}
	});
	afterNavigate((navigation) => {
		if (!$currentUser) {
			//goto('/login');
			console.log('after', navigation);
			return;
		}
	});
</script>

<div class="mt-20">
	<h1>My Account</h1>
	{#if $currentUser}
		<slot />
	{:else}
		<a href="/login" class="text-lg text-sky-700 border-2 rounded-md border-sky-600">Login</a>
	{/if}
</div>
