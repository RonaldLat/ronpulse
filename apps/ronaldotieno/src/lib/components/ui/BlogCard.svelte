<script>
  import { formatDate } from '$lib/utils.js';
  export let post;
</script>

<!-- component -->
<div
  class="h-full flex flex-col hover:bg-myColor-200 transition delay-150 duration-150 ease-in-out gap-3 justify-between rounded-md p-10 bg-myColor-50 dark:bg-gray-900 border border-gray-400"
>
  <h2 class="text-2xl font-bold font-[Caudex] text-gray-900">{post.title}</h2>
  <p class="text-md font-[Roboto] text-gray-950">{post.excerpt}</p>
  <h1 class="text-gray-900 text-sm font-[Play] pt-2 border-t border-gray-300">
    {formatDate(post.date)}
  </h1>
</div>
