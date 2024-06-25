<script>
	import { BrowserMockup, VerticalTimeline, GradientHeading } from '@repo/ui';
	import { enhance } from '$app/forms';
	import { Button } from '$lib/components/ui/button/index.js';

	export let data;
	export let form;
	console.log(data);
</script>

<h1>The Admin</h1>
<GradientHeading>
	<p slot="line1">Welcome Ronald,</p>
	<p slot="line2">What are your plans for today</p>
</GradientHeading>
<hr />

<BrowserMockup>
	<div class="flex flex-col gap-1">
		{#each data.demos as demo}
			<Button class=" w-fit bg-accent-200 btn-outline" href="/">{demo.name} ({demo.niche})</Button>
		{/each}
	</div>
</BrowserMockup>

<VerticalTimeline />
<input type="range" min="0" max="100" value="49" class="range" />
<div class="overflow-x-auto"></div>
