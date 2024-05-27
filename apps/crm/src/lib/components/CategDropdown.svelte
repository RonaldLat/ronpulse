<script lang="ts">
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';

  import { Button } from "$lib/components/ui/button/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  //Auth features
	import { goto } from '$app/navigation';


	const logOut = async () => {
    goto('/')
			//console.log('sign out error: ', error);
	};
	const navigateTo = () => {
		goto('/login');
	};



</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[builder]} >
    <Icon icon="line-md:close-to-menu-alt-transition" class=" text-2xl text-white"/>
    </Button>
  </DropdownMenu.Trigger>
  <DropdownMenu.Content class="w-fit bg-gray-200">
    <DropdownMenu.Label>Menu</DropdownMenu.Label>
    <DropdownMenu.Separator />
      <DropdownMenu.Item>
      </DropdownMenu.Item>
    <DropdownMenu.Separator />
    <DropdownMenu.Group>
      <DropdownMenu.Item>
        <Icon icon="mdi:home" class="mr-2 h-4 w-4" />
        <span>Home</span>
      </DropdownMenu.Item>
      <DropdownMenu.Sub>
      <DropdownMenu.Item>
        <Icon icon="mdi:about-variant" class="mr-2 h-4 w-4" />
        <span><a href="/about">About</a></span>
      </DropdownMenu.Item>
        <DropdownMenu.SubTrigger>
          <Icon icon="carbon:expand-categories" class="mr-2 h-4 w-4" />
          <span>Categories</span>
        </DropdownMenu.SubTrigger>
        <DropdownMenu.SubContent class="bg-gray-300">
          <DropdownMenu.Item>
            <Icon icon="tdesign:audio" class="mr-2 h-4 w-4 ext-myColor-500" />
            <span><a href="/audio">Audio</a></span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon icon="solar:power-line-duotone" class="mr-2 h-4 w-4" />
            <span><a href="/power">Power</a></span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon icon="arcticons:apple" class="mr-2 h-4 w-4 text-black" />
            <span><a href="/lifestyle">Lifestyle</a></span>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Icon icon="icon-park-outline:shaver" class="mr-2 h-4 w-4 text-black" />
            <span><a href="/grooming">Grooming</a></span>
          </DropdownMenu.Item>
        </DropdownMenu.SubContent>
      </DropdownMenu.Sub>
    </DropdownMenu.Group>
    <DropdownMenu.Separator />
    <DropdownMenu.Separator />
    <DropdownMenu.Item>
      <Icon icon="mynaui:logout" class="mr-2 h-4 w-4" />
{#if true}
<p  class="bg-transparent">
<button class="text-red-500" on:click={logOut}>LogOut</button>
</p>
{:else}

<button class="bg-gray-200 text-slate-800 px-3 py-2 rounded-sm" on:click={()=>goto('/login')}>
Login
</button>

{/if}
    </DropdownMenu.Item>
  </DropdownMenu.Content>
</DropdownMenu.Root>
