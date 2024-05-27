<script>
/** @type {import('./$types').PageData} */
/** @type {import('./$types').ActionData} */

	import { Button } from "$lib/components/ui/button";
  import {enhance} from '$app/forms'
  export let form
  export let data

</script>
<form method="POST" action="?/add_new_group" use:enhance>
<label for="group_name">
<input type="text" name="new_group_name">
<Button type="submit">Add</Button>
</label>
{#if form?.success}
<p class="text-green-500">
Succesfully added {{data}} group.
</p>
<pre>{data}</pre>
{/if}
</form>
