<script>
	import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider } from 'flowbite-svelte';
	import { currentUser } from '$lib/store/authState.js';
	import { supabase } from '$lib/supabaseClient.js';
	import { goto } from '$app/navigation';

	const logOut = async () => {
		const { error } = await supabase.auth.signOut();
		if (error) {
			//console.log('sign out error: ', error);
		}
	};
</script>

<div class="flex flex-col">
<Avatar
	id="user-drop"
	src="/avatar.png"
	class="cursor-pointer bg-transparent"
/>
<p class="text-sky-200 text-xs">{$currentUser.user_metadata.username}</p>
</div>
<Dropdown triggeredBy="#user-drop">
	<DropdownHeader>
		<span class="block font-bold text-sm">{$currentUser.user_metadata.username}</span>
		<span class="block truncate italic text-sm font-medium">{$currentUser.email}</span>
	</DropdownHeader>
	<DropdownItem on:click={()=>goto('/cart')}>Cart</DropdownItem>
	<DropdownItem>Settings</DropdownItem>
	<DropdownDivider class="text-stone-900"/>
	<DropdownDivider />
	<DropdownItem class="text-red-500" on:click={logOut}>Sign out</DropdownItem>
</Dropdown>
