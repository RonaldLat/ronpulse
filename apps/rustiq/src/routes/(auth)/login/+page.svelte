<script>
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient.js';
	import { sineIn } from 'svelte/easing';
	import { currentUser } from '$lib/store/authState.js';

	let credentials = {
		email: '',
		password: ''
	};
    let loginError =false
	async function signIn() {
		const { data, error } = await supabase.auth.signInWithPassword(credentials);
        console.log('sign in data: ', data)
        credentials.email =''
        credentials.password =''
        if($currentUser){goto('/')}
        if(error){
            console.log('sign in error: ', error)
            loginError =true
            }

	}
    const navigateTo=()=>{
            goto('/signup')
        }

</script>

<form on:submit|preventDefault={signIn} class="relative space-y-3 rounded-md p-6 lg:p-10 m-10">
	<h1 class="text-xl font-semibold lg:text-2xl">Login</h1>
	<p class="pb-4 text-gray-500">Login to access your account</p>
    {#if loginError}
	<p class=" text-rose-500">Invalid credentials</p>
    {/if}

	<div class="">
		<label class=""> Email Address </label>
		<input
			bind:value={credentials.email}
			type="email"
			placeholder="Info@example.com"
			class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
		/>
	</div>
	<div>
		<label class=""> Password </label>
		<input
			bind:value={credentials.password}
			type="password"
			placeholder="******"
			class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
		/>
	</div>

	<div>
		<button
			type="submit"
			class="mt-5 w-full rounded-md bg-sky-600 p-2 text-center font-semibold text-white outline-none focus:ring"
			>Login</button
		>
	</div>

    <div>
		<button
            on:click|preventDefault={navigateTo}
			type="submit"
			class="mt-5 w-full rounded-md border-2  border-sky-500 p-2 text-center font-semibold text-sky-600 outline-none focus:ring"
			>Register</button
		>
	</div>
</form>
