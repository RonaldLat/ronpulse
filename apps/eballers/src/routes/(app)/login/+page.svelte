<script>
	import { LoginForm } from '@repo/ui';

	export let form;
	$: console.log(form);
</script>

<section>
	<h1 class="text-4xl text-center font-bold mb-5">Login</h1>
	<LoginForm />
</section>
