<script>
	import Icon from '@iconify/svelte';
	import CategDropdown from './CategDropdown.svelte';
	import { business } from '$lib/store/details';

	export let toggleSideNav;
</script>

<div
	class="grid grid-cols-2 justify-items-start w-full items-center px-2 bg-black py-1 max-w-5xl mx-auto"
>
	<div class="h-full flex flex-row items-center text-myColor-1000">
		<button
			class="hover:text-myColor-700 pr-2 text-2xl transition duration-100 delay-75"
			on:click={toggleSideNav}>=</button
		>
		<p class="text-2xl text-center font-bold">{$business.abbrev}</p>
		<span class="font-blackops uppercase text-gray-100 h-full flex flex-col justify-center pl-1">
			<p class="whitespace-nowrap text-xs">{$business.name_part1}</p>
			<p class="text-xs">{$business.name_part2}</p>
		</span>
	</div>

	<div class="flex gap-3 justify-self-end h-5/6 items-center">
		<CategDropdown />
	</div>
</div>
