<script>
	import { BrowserMockup, VerticalTimeline, GradientHeading } from '@repo/ui';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
</script>

<h1>The Admin</h1>
<GradientHeading>
	<p slot="line1">Welcome Ronald,</p>
	<p slot="line2">What are your plans for today</p>
</GradientHeading>
<BrowserMockup />
<VerticalTimeline />
<input type="range" min="0" max="100" value="49" class="range" />
<div class="overflow-x-auto"></div>

