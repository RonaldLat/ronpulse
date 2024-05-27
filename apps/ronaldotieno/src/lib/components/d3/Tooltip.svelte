<script>
  import { fly } from 'svelte/transition';

  export let data;
  export let xScale;
  export let yScale;
  $: console.log(xScale(data.points));
</script>

<div
  transition:fly
  class="abosolute transition duration-150 ease-in-out delay-150 text-myColor-600 bg-myColor-50 z-20"
  style="position: absolute; left:{xScale(data.draw)}px; top: {yScale(
    data.points
  )}px"
>
  <p class="">{data.position}. {data.team}</p>
  <p>{data.points}</p>
</div>
