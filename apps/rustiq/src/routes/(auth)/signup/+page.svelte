<script>
	import { supabase } from '$lib/supabaseClient.js';
	import { currentUser } from '$lib/store/authState.js';
	import { goto } from '$app/navigation';

	$: credentials = {
		username: '',
		email: '',
		password: ''
	};
	async function signUp() {
		const { data, error } = await supabase.auth.signUp({
			email: credentials.email,
			password: credentials.password,
			options: {
				data: {
					username: credentials.username
				}
			}
		});
        credentials.password=''
        credentials.email=''
        credentials.username=''
        if($currentUser){goto('/')}
		console.log('signup data: ', data);
		if (error) {
			console.log(error);
		}
	}

	let users = '';
	async function fetchSupabase() {
		const { data, error } = await supabase.from('users').select();
		users = data;
		console.log(data);
		console.log(error);
	}
	const navigateTo = () => {
		goto('/login');
	};
</script>

<form on:submit|preventDefault={signUp} class="relative space-y-3 rounded-md p-6 lg:p-10 m-10">
	<h1 class="text-xl font-semibold lg:text-2xl">Sign Up</h1>
	<p class="pb-4 text-gray-500">Sign up to create an account</p>

	<div>
		<label class=""> Username </label>
		<input
			bind:value={credentials.username}
			type="text"
			placeholder="Username"
			class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"
		/>
	</div>
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
			class="mt-5 w-full rounded-md bg-blue-600 p-2 text-center font-semibold text-white outline-none focus:ring"
			>Sign Up</button
		>
	</div>

	<div>
		<button
			on:click|preventDefault={navigateTo}
			type="submit"
			class="mt-5 w-full rounded-md border-2 border-sky-500 p-2 text-center font-semibold text-sky-600 outline-none focus:ring"
			>Login</button
		>
	</div>
</form>
