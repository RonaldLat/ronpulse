<script>
 // import { ChevronRight, Code, ExternalLink } from 'lucide-svelte';
  import { scroll, animate, ScrollOffset} from 'motion'
  import { onMount } from 'svelte';

  const projects = [
    {
      name: 'Furniture Place Clone',
      url: 'https://frosty-hopper-d52530.netlify.app/',
      img: 'furniture-palace-clone-pc.webp',
      alt: 'screenshot of Furniture Palace clone Website',
      git: '',
      description: ''
    },

    {
      name: 'Ideal Sofas Website',
      url: 'https://happy-liskov-d56336.netlify.app/',
      img: 'ideal-sofas-pc.webp',
      alt: 'screenshot of Ideal Sofas Website',
      git: '',
      description: ''
    },

    {
      name: 'Dudi Resort website',
      url: '',
      img: 'dr-portofolio.webp',
      alt: 'screenshot of Dudi Resort Website',
      git: ''
    },

  ];

    let sectionPin ;
    let slidingContent;

onMount(() => {
  });
</script>

<div class="body mt-14 hidden">
<div class="container">
  <section data-bgcolor="#bcb8ad" data-textcolor="#032f35" class="bg-myColor-800 h-[50vh] text-gray-900 hidden">
    <div>
      <h1 data-scroll data-scroll-speed="1"><span>My</span> <span>Projectz</span> </h1>
    </div>

  </section>

  <section bind:this={sectionPin} id="sectionPin" class=" min-h-screen bg-myColor-200 rounded-md">
    <div bind:this={slidingContent} class="pin-wrap flex gap-x-2 text-gray-800  ">
      <h2 class="text-7xl">My Projects</h2>
      {#each projects as project }
      <div class="flex flex-col text-gray-700   border-2 border-gray-700 rounded-md py-8 h-auto ">
      <img class="h-full w-auto py-6" src={project.img} alt={project.alt}>
      <span>{project.name}</span>
      </div>
      {/each}
    </div>
  </section>


  <section data-bgcolor="#e3857a" data-textcolor="#f1dba7" class="hidden"><img src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">
  </section>

</div>
</div>

