<script>
  import { gFromDown, example } from '$lib/gsapAnimations/tweenMe';
  const tools = [
    {
      name: 'javascript',
      img: 'js.svg'
    },
    {
      name: 'python',
      img: 'python.svg'
    },
    {
      name: 'vue',
      img: 'vue.svg'
    },
    {
      name: 'linux',
      img: 'ubuntu-4.svg'
    },
    {
      name: 'd3',
      img: 'd3.svg'
    },
    {
      name: 'firebase',
      img: 'firebase-logo.svg'
    },
    {
      name: 'git',
      img: 'git-black.svg'
    },
    {
      name: 'nodejs',
      img: 'nodejs2.png'
    }
  ];
</script>

<div
  use:gFromDown
  class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
>
  <div class="grid gap-10 lg:grid-cols-2">
    <div class="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
      <div class="max-w-xl mb-6">
        <div>
          <p
            class="inline-block font-[Play] w-full px-3 py-px pl-0 mb-4 text-xs font-semibold tracking-wider text-left text-gray-700 uppercase rounded-full"
          >
            tools
          </p>
        </div>
        <h2
          class="max-w-lg font-[Play] mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
        >
          A programmer is<br class="hidden md:block" />
          as good as the
          <span class="inline-block text-myColor-500">tools</span> he uses
        </h2>
        <p class="text-base text-gray-700 md:text-lg">
          To be efficient and productive in what I do, I have carefully picked
          the tools that will help me accomplish my tasks fast.
        </p>
      </div>
    </div>
    <div class="p-5 sm:p-8">
      <div
        class="columns-3 gap-5 sm:columns-2 sm:gap-8 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8 justify-items-center place-items-center"
      >
        {#each tools as tool}
          <img
            class="drop-shadow-md max-w-[100px] h-auto"
            src={tool.img}
            alt={tool.name}
          />
        {/each}
      </div>
    </div>
  </div>
</div>
