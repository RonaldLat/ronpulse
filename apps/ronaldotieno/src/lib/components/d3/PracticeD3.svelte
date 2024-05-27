<script>
  import * as d3 from 'd3';
  import epl from '$lib/data/epl.js';

  let year = 10;
  let eplData = epl[year].table;
  const eplSeason = epl[year].season;
  console.table(eplData);

  const width = 800;
  const height = 600;
  const margin = { top: 20, right: 20, bottom: 20, left: 180 };
  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;

  $: xDomain = eplData.map((d) => d.team);
  $: yDomain = eplData.map((d) => +d.points);

  // const yAccessor = d => eplData.map((d)=>d.points)

  $: yScale = d3
    .scaleBand()
    .domain(xDomain)
    .range([0, innerHeight])
    .padding(0.1);
  $: xScale = d3
    .scaleLinear()
    .domain([0, Math.max.apply(null, yDomain)])
    .range([0, innerWidth]);
</script>

<h2 class="text-3xl text-emerald-600 text-bold text-center">
  {eplSeason} Season
</h2>

<div>
  <svg {width} {height} class="border-pink-300 border p-3">
    <g transform={`translate(${margin.left},${margin.top})`}>
      {#each xScale.ticks() as tickValue}
        <g transform={`translate(${xScale(tickValue)},0)`}>
          <line y2={innerHeight} stroke="black" />
          <text text-anchor="middle" dy=".71em" y={innerHeight + 3}>
            {tickValue}
          </text>
        </g>
      {/each}
      {#each eplData as d}
        <text
          text-anchor="end"
          x="-8"
          dy=".32em"
          y={yScale(d.team) + yScale.bandwidth() / 2}
          fill="black"
        >
          {d.team}
        </text>
        <rect
          class="fill-stone-600"
          x="0"
          y={yScale(d.team)}
          width={xScale(d.points)}
          height={yScale.bandwidth()}
        />
      {/each}
    </g>
  </svg>
</div>
