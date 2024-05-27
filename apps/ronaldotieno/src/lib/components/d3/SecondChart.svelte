<script>
  import * as d3 from 'd3';
  import { Minus, Plus } from 'lucide-svelte';
  import { onMount } from 'svelte';

  let xAxis;
  let yAxis;
  let yearPlus = 2024;
  let yearMinus = 2023;
  let width;
  $: console.log(width);
  let height = 400;
  // let screenSize;
  let margin = {
    top: 20,
    bottom: 30,
    left: 20,
    right: 70
  };

  let data = [];
  onMount(async function () {
    data = await d3.json(`/api/epl`);
  });
  $: console.log('data', data);
  $: xScale = d3
    .scaleBand()
    .domain(data.map((d) => d.team.slice(0, 3)))
    .range([margin.left, width - margin.right]);

  $: yScale = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.points)])
    .range([height - margin.bottom, margin.top]);

  $: {
    d3.select(xAxis).call(d3.axisBottom(xScale));
    d3.select(yAxis).call(d3.axisLeft(yScale));
  }
  const colorScale = d3.interpolateSpectral();
  $: console.log('sc', colorScale);
</script>

<svelte:window bind:innerWidth={width} />
<div class="h-full w-full max-w-3xl mx-4 overflow-auto">
  <h2>First Chart</h2>
  <svg {height} {width} class="w-full bg-emerald-300 px-5 mx-auto">
    {#each data as d}
      <rect
        class="fill-stone-400"
        x={xScale(d.team.slice(0, 3))}
        y={yScale(d.points)}
        width={xScale.bandwidth()}
        height={yScale(0) - yScale(d.points)}
        stroke="black"
      />
    {/each}
    <g transform="translate(0, {height - margin.bottom})" bind:this={xAxis} />
    <g transform="translate( {margin.left}, 0)" bind:this={yAxis} />
  </svg>

  <div class="inline-flex rounded-md shadow-sm" role="group">
    <button
      on:click={() => {
        yearMinus = -1;
      }}
      type="button"
      class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      <Minus />
    </button>
    <button
      type="button"
      class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      Season
    </button>
    <button
      on:click={() => {
        yearPlus = +1;
      }}
      type="button"
      class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
    >
      <Plus />
    </button>
  </div>
</div>
