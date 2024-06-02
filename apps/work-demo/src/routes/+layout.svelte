<script>
	import '../app.css';

	export let data;
</script>

<div class="app">
	<p>{data.post.title}</p>

	<main>
		<slot />
	</main>
</div>
