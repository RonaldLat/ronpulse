<script lang="ts">
	import DataTable from './data-table.svelte';

	export let data;
	let { leads, leads2 } = data;
</script>

<div class="  mx-auto py-10">
	<p>{data.count}</p>
	<DataTable leads={leads2} count={data.count} />
</div>
