<script>
  import { formatDate } from '$lib/utils.js';

  export let data;
  console.log(data);
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content="article" />
</svelte:head>

<div
  class="px-3 md:px-5 w-full bg-transparent pb-28 min-h-screen py-8 flex flex-col items-center justify-center relative overflow-hidden lg:py-12"
>
  <article
    class="prose text-gray-800 prose-h1:font-[Maven] prose-h2:font-[Caudex] w-full bg-transparent"
  >
    <hgroup>
      <h1 class="">{data.meta.title}</h1>
      <p>Published at {formatDate(data.meta.date)}</p>
    </hgroup>
    <!-- render the post -->
    <svelte:component this={data.content} />
    <div />
  </article>
</div>
