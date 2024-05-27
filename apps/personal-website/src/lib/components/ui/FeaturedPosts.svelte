<script>
  import BlogCard from './BlogCard.svelte';
  import { onMount } from 'svelte';
  let latestPosts = [];
  onMount(async () => {
    const response = await fetch(`/api/posts?limit=4`);
    latestPosts = await response.json();
  });
  console.log(latestPosts);
</script>

<section>
  <p
    class="inline-block font-[Play] w-full px-3 pl-0 mb-4 text-lg font-semibold tracking-wider text-left text-myColor-500 uppercase rounded-full"
  >
    Latest Articles
  </p>

  <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mx-auto text-center">
    {#each latestPosts as post}
      <li class="h-full rounded-none bg-gray-200">
        <a href={`blog/${post.slug}`}>
          <BlogCard {post} />
        </a>
      </li>
    {/each}
  </ul>

  <a
    href="/blog"
    class="inline-block font-[Play] w-full mt-5 px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-center text-myColor-500 hover:text-myColor-400 transition duration-150 delay-75 uppercase rounded-full"
    >All Articles</a
  >
</section>
