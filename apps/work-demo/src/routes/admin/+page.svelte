<script>
	import { BrowserMockup, VerticalTimeline, GradientHeading } from '@repo/ui';
	import { enhance } from '$app/forms';

	export let data;
	export let form;
	const records = data.records;
	$:console.log('form', form);
</script>

<h1>The Admin</h1>
<GradientHeading>
	<p slot="line1">Welcome Ronald,</p>
	<p slot="line2">What are your plans for today</p>
</GradientHeading>
<div class="bg-rose-500 text-gray-100 mx-auto p-2 rounded-sm text-center max-w-md">
	{#each records as record}
		<div>
      <p>{record.name}</p>
    </div>
		<div>{record.title}</div>
		<div>{record.sub_title}</div>
    <form action="?/delRecord" method="POST" >
      <input name="collectionId" value={record.id} class="hidden bg-gray-600"/>
      <button type="submit" class="btn btn-outline"> Del</button>
    </form>
		<hr />
	{/each}
</div>
<BrowserMockup />
<VerticalTimeline />
<input type="range" min="0" max="100" value="49" class="range" />
<div class="overflow-x-auto"></div>

<form use:enhance action="?/addRecords" method="POST" class="flex flex-col gap-2 mx-auto max-w-md">
	<input type="text" name="name" placeholder="name" class="input input-primary" />
	<input type="text" name="title" placeholder="title" class="input input-primary"/>
	<input type="text" name="sub_title" placeholder="subtitle" class="input input-primary"   />
	<button type="submit" title class="btn btn-accent">Add</button>
</form>
