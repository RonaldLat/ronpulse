import { c as create_ssr_component, b as each, e as escape } from "./ssr.js";
import * as d3 from "d3";
const QuickSort = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let numbers;
  let arrayLength = d3.randomInt(2, 10);
  function getRandomIntArray(length, minValue, maxValue) {
    const rangeArray = d3.range(minValue, maxValue + 1);
    const shuffledArray = d3.shuffle(rangeArray);
    const randomArray = shuffledArray.slice(0, length);
    return randomArray;
  }
  numbers = getRandomIntArray(arrayLength(), 2, 88);
  return `<h2 data-svelte-h="svelte-198wrn">Quick Sort</h2> <div class="grid grid-cols-1 place-items-center grid-rows-2 max-h-full mt-36 py-9 px-2 rounded-md bg-stone-200"><div class="flex gap-1">${each(numbers, (number) => {
    return `<div class="bg-myColor-400 w-10 h-10 rounded-md flex items-center justify-center text-black font-[Play] text-xl">${escape(number)} </div>`;
  })}</div> <button class="px-2 py-3 bg-emerald-300 rounded-md border-gray-700 mt-3 border" data-svelte-h="svelte-y1izxg">Quick Sort</button> <button class="px-2 py-3 bg-pink-300 rounded-md border-gray-700 mt-3 border" data-svelte-h="svelte-1sap1y7">Generate Array</button></div>`;
});
export {
  QuickSort as Q
};
