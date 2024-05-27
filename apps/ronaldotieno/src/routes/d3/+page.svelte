<script>
  import FirstChart from '$lib/components/d3/FirstChart.svelte';
  import LineChart from '$lib/components/d3/LineChart.svelte';
  import Scatter from '$lib/components/d3/Scatter.svelte';
  import SecondChart from '$lib/components/d3/SecondChart.svelte';
</script>

<div class="min-h-screen w-full">
  <h1 class="text-2xl bold">D3 Playground</h1>
  <h2 class="text-2xl bold">EPL Tables</h2>
  <SecondChart />
  <LineChart />
</div>
