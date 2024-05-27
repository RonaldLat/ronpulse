<script>
  let yTicks = [
    0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    95, 100
  ];

  export let yScale;
  export let height;
  export let width;
  export let margin;

  console.log(yScale(yTicks[1]));
  console.log(height);
</script>

<g transform="translate({margin.left} {margin.top})">
  {#each yTicks as tick}
    <text class="fill-black text-black" x={0} y={yScale(tick)} dy="6">
      {tick} {tick == 100 ? 'Points' : ''}</text
    >
    <line
      x1="0"
      y1={yScale(tick)}
      x2={width}
      y2={yScale(tick)}
      stroke="#cecece"
    />
  {/each}
</g>
