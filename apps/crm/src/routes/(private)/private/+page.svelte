<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import { Progress } from '$lib/components/ui/progress/index.js';
	import DollarSign from 'lucide-svelte/icons/dollar-sign';
	import Users from 'lucide-svelte/icons/users';
	import { Progress as Progress2 } from 'bits-ui';
	import Echart from '$lib/components/Echart.svelte';

	export let data;
</script>

<section class="grid grid-cols gap-5">
	<Card.Root class="max-w-md bg-slate-300">
		<Card.Header class="pb-2">
			<Card.Description>To Call</Card.Description>
			<Card.Title class="text-4xl">{data.count}</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="text-xs text-muted-foreground">+25% from last week</div>
		</Card.Content>
		<Card.Footer>
			<Progress
				class="relative h-[15px] w-[65%] overflow-hidden rounded-full bg-gray-800 shadow-mini-inset"
				value={45}
				max={100}
				aria-label="25% increase"
			/>
		</Card.Footer>
	</Card.Root>

	<Card.Root class="max-w-md">
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Total Revenue</Card.Title>
			<DollarSign class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">$45,231.89</div>
			<p class="text-xs text-muted-foreground">+20.1% from last month</p>
		</Card.Content>
	</Card.Root>

	<Card.Root class="max-w-md">
		<Card.Header class="flex flex-row items-center justify-between space-y-0 pb-2">
			<Card.Title class="text-sm font-medium">Clients</Card.Title>
			<Users class="h-4 w-4 text-muted-foreground" />
		</Card.Header>
		<Card.Content>
			<div class="text-2xl font-bold">+2350</div>
			<p class="text-xs text-muted-foreground">+180.1% from last month</p>
		</Card.Content>
	</Card.Root>
</section>

<Echart />
