<script>
	import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	$: activeUrl = $page.url.pathname;
	let activeClass = 'text-sky-700 dark:text-sky-300 hover:text-sky-900 dark:hover:text-sky-500';
</script>

<Button>Menu
	<Icon icon="mdi:chevron-down" class="w-3 h-3 ml-2 text-white dark:text-white" />
</Button>
<Dropdown {activeUrl} {activeClass}>
	<DropdownItem href="/">Home</DropdownItem>
	<DropdownItem class="flex items-center justify-between">
		Categories<Icon
			icon="mdi:chevron-right"
			class="w-3 h-3 ml-2 text-stone-900 dark:text-white"
		/>
	</DropdownItem>
	<Dropdown placement="left-start">
		<DropdownItem href="/living">Living</DropdownItem>
		<DropdownItem href="/bedroom">Bedroom</DropdownItem>
		<DropdownItem href="/dining">Dining</DropdownItem>
		<DropdownItem href="/office">Office</DropdownItem>
		<DropdownItem href="/home-decor">Home Decor</DropdownItem>
		<DropdownItem href="/outdoor">Outdoor</DropdownItem>
	</Dropdown>
	<DropdownItem>Cart</DropdownItem>
	<DropdownItem class="text-red-500" slot="footer">Sign out</DropdownItem>
</Dropdown>
