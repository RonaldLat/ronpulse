<script>
  import { fade, blur, fly, slide, scale } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import { ChevronDown } from 'lucide-svelte';
  import { flip } from 'svelte/animate';
  import { quickSort } from '$lib/algorithms/quickSort';
  import * as d3 from 'd3';

  let arrayLength = d3.randomInt(2, 10);
  $: numbers = getRandomIntArray(arrayLength(), 2, 88);

  const sort = () => {
    numbers = quickSort(numbers);
  };

  function getRandomIntArray(length, minValue, maxValue) {
    const rangeArray = d3.range(minValue, maxValue + 1);
    const shuffledArray = d3.shuffle(rangeArray);
    const randomArray = shuffledArray.slice(0, length);

    return randomArray;
  }
</script>

<h2>Quick Sort</h2>

<div
  class="grid grid-cols-1 place-items-center grid-rows-2 max-h-full mt-36 py-9 px-2 rounded-md bg-stone-200"
>
  <div class="flex gap-1">
    {#each numbers as number (number)}
      <div
        class="bg-myColor-400 w-10 h-10 rounded-md flex items-center justify-center text-black font-[Play] text-xl"
        animate:flip
      >
        {number}
      </div>
    {/each}
  </div>

  <button
    class="px-2 py-3 bg-emerald-300 rounded-md border-gray-700 mt-3 border"
    on:click={sort}>Quick Sort</button
  >
  <button
    class="px-2 py-3 bg-pink-300 rounded-md border-gray-700 mt-3 border"
    on:click={() => (numbers = getRandomIntArray(9, 1, 99))}
    >Generate Array</button
  >
</div>
