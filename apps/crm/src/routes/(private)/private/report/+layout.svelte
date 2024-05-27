<script>

import { fly } from 'svelte/transition';
export let data;
</script>
{#key data.pathname}
<h1>reports layout</h1>
<div in:fly={{ x: -30, duration: 200, delay: 150 }} out:fly={{ x: -30, duration: 150 }} class="pt-10">
<slot />
</div>
{/key}
