<script>
  let xTicks = [5, 10, 15, 20, 25, 30, 35];

  export let height;
  export let xScale;
  export let margin;

  console.log(xScale(xTicks[1]));
</script>

<g>
  {#each xTicks as tick}
    <text
      class="fill-black text-black"
      x={xScale(tick)}
      y={height - margin.bottom}
      dy="-8"
    >
      {tick}</text
    >
  {/each}
</g>
