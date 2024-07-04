<script>
	/** @type {import('./$types').PageData} */
	/** @type {import('./$types').ActionData} */

	import { Button } from '$lib/components/ui/button';
	import { toast } from 'svelte-sonner';
	import { enhance } from '$app/forms';
   import * as Select from "$lib/components/ui/select";
 
  const niches = [
    { value: "cleaner", label: "Cleaner" },
    { value: "fitness", label: "Gym & Fitness" },
    { value: "land_scapers", label: "Land Scapers" },
    { value: "baking", label: " Baking" },
  ];

	export let form;
	export let data;
	$: console.log(form);

	$: if (form) {
		toast.success(form.supabase_success);
		toast.success(form.file_success);
	}

	$: console.log('form ', form);
	$: console.log('data ', data);
</script>

<section class="px-2 bg-blue-100 py-3">
	<form method="POST" action="?/addfile" enctype="multipart/form-data" use:enhance
  class="flex flex-col gap-2 max-w-sm mx-auto">
		<label for="file">Enter content</label>
		<input type="file" name="file" class="bg-white" />
    <Select.Root portal={null}>
      <Select.Trigger class="w-[180px]">
        <Select.Value placeholder="Select a niche" />
      </Select.Trigger>
      <Select.Content>
        <Select.Group>
          <Select.Label>Niches</Select.Label>
          {#each niches as niche}
            <Select.Item value={niche.value} label={niche.label}
              >{niche.label}</Select.Item
            >
          {/each}
        </Select.Group>
      </Select.Content>
      <Select.Input required name="niche" />
    </Select.Root>
		<Button type="submit">Upload</Button>
	</form>
</section>


<form use:enhance action="?/upload" method="POST" enctype="multipart/form-data" class="p-1">
	<input type="file" name="file2" required />
	<button>Upload</button>

	{#if form}
		<p>uploaded {form.uploaded}</p>
	{/if}
</form>
