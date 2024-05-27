<script lang="ts">
	import { fly } from 'svelte/transition';
	import Triangle from 'lucide-svelte/icons/triangle';
	import Bot from 'lucide-svelte/icons/bot';
	import SquareTerminal from 'lucide-svelte/icons/square-terminal';
	import CodeXML from 'lucide-svelte/icons/code-xml';
	import Settings2 from 'lucide-svelte/icons/settings-2';
	import LifeBuoy from 'lucide-svelte/icons/life-buoy';
	import Book from 'lucide-svelte/icons/book';
	import SquareUser from 'lucide-svelte/icons/square-user';
	import '../../../app.css';

	import { Button } from '$lib/components/ui/button/index.js';
	import { Toaster } from '$lib/components/ui/sonner';
	import * as Tooltip from '$lib/components/ui/tooltip/index.js';

	export let data;
</script>

<aside
	class="inset-y fixed left-0 z-20 flex h-full flex-col border-r bg-black font-ubuntu text-sky-400 w-12 md:w-20"
>
	<div class="border-b p-2">
		<a href="/private" class="flex items-center flex-col justify-center">
			<Button variant="outline" size="icon" aria-label="Home">
				<Triangle class="size-4 fill-foreground" />
			</Button>
			<p class="text-xs text-center pt-0.5 font-semibold">Home</p>
		</a>
	</div>
	<nav class="grid gap-1 p-2 justify-center">
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a href="/private/tts">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg bg-muted"
						aria-label="Playground"
						builders={[builder]}
					>
						<SquareTerminal class="size-5" />
					</Button>
					<p class="text-xs text-center">TTS</p>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5}>Playground</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a href="/private/lists">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="Models"
						builders={[builder]}
					>
						<Bot class="size-5" />
					</Button>
					<p class="text-xs text-center">Leads</p>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5}>Models</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a href="/private/uvp">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="Models"
						builders={[builder]}
					>
						<Bot class="size-5" />
					</Button>
					<p class="text-xs text-center">UVP</p>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5}>API</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					variant="ghost"
					size="icon"
					class="rounded-lg"
					aria-label="Documentation"
					builders={[builder]}
				>
					<Book class="size-5" />
				</Button>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5}>Documentation</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<a href="/private/lists/new">
					<Button
						variant="ghost"
						size="icon"
						class="rounded-lg"
						aria-label="Settings"
						builders={[builder]}
					>
						<Settings2 class="size-5" />
					</Button>
					<p class="text-xs text-center">New</p>
				</a>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5}>Settings</Tooltip.Content>
		</Tooltip.Root>
	</nav>
	<nav class="mt-auto grid gap-1 p-2 justify-center">
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<Button
					variant="ghost"
					size="icon"
					class="mt-auto rounded-lg"
					aria-label="Help"
					builders={[builder]}
				>
					<LifeBuoy class="size-5" />
				</Button>
				<p class="text-xs text-center truncate">Account</p>
				<Tooltip.Content side="right" sideOffset={5}>Account</Tooltip.Content>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5}>Help</Tooltip.Content>
		</Tooltip.Root>
		<Tooltip.Root>
			<Tooltip.Trigger asChild let:builder>
				<form action="/auth/logout" method="POST" class="inline">
					<Button
						variant="ghost"
						size="icon"
						class="mt-auto rounded-lg"
						aria-label="Account"
						builders={[builder]}
						type="submit"
					>
						<SquareUser class="size-5" />
					</Button>
					<button type="submit" class="truncate text-xs text-red-500"> Logout</button>
				</form>
			</Tooltip.Trigger>
			<Tooltip.Content side="right" sideOffset={5} class="text-myColor-700">Logout</Tooltip.Content>
		</Tooltip.Root>
	</nav>
</aside>

{#key data.pathname}
	<div
		in:fly={{ x: -30, duration: 200, delay: 150 }}
		out:fly={{ x: -30, duration: 150 }}
		class="pt-10"
	>
		<main class="text-gray-900 ml-16 pt-4 h-[200vh] w-full pl-2 md:4 ml-14 mx-auto">
			<slot />
			<Toaster />
		</main>
	</div>
{/key}
