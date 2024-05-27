  <script>

	import { fly } from 'svelte/transition';
    import {page} from '$app/stores'
	import Button from '$lib/components/ui/button/button.svelte';
    const userId = $page.params.userId
  export let data;
  </script>
	{#key data.pathname}
<h1>Groups </h1>
<ul class="flex">
<li>
<Button class="bg-sky-300">
<a href="/group/a"> Group A</a>
</Button>
</li>
<li>
<Button class="bg-sky-3">
<a href="/group/b"> Group B</a>
</Button>
</li>
<li>
<a href="/group/new">
<Button class="text-green-400">New Group</Button>
</a>
</li>
</ul>
<hr>
		<div in:fly={{ x: -30, duration: 200, delay: 150 }} out:fly={{ x: -30, duration: 150 }} class="pt-10">
			<slot />
		</div>
	{/key}

