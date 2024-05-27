<script>
  //import { ChevronRight, Code, ExternalLink } from 'lucide-svelte';
  import { scroll, animate, ScrollOffset } from 'motion';
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

    {
      name: 'Milly Cakes website',
      url: '',
      img: 'mc-portofolio.webp',
      alt: 'screenshot of Dudi Resort Website',
      git: '',
      description: ''
    }
  ];

  let sectionPin;
  let slidingContent;
  let image1, image2, image3;

  onMount(() => {
    const sectionHeightInVh = 500; // 👈 The scrolling distance over which the horizontal section should slide across

    sectionPin.style.height = `${sectionHeightInVh}vh`;
    sectionPin.style.overflow = `visible`;
    // Adjust content
    slidingContent.style.position = 'sticky';
    slidingContent.style.top = 0;
    scroll(
      animate(slidingContent, {
        transform: ['translateX(0)', `translateX(calc(-100% + 100vw))`]
      }),
      {
        target: sectionPin,
        offset: ScrollOffset.enter
      }
    );
  });
</script>

<div class="body">
  <div class="container overflow-visible">
    <section data-bgcolor="#bcb8ad" data-textcolor="#032f35">
      <div>
        <h1 data-scroll data-scroll-speed="1">
          <span>My</span> <span>Projects</span> <span>section</span>
        </h1>
        <p data-scroll data-scroll-speed="2" data-scroll-delay="0.2">
          With Motion One
        </p>
      </div>
    </section>

    <section bind:this={sectionPin} id="sectionPin">
      <div bind:this={slidingContent} class="pin-wrap flex">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h2>
        {#each projects as project}
          <img class="h-auto w-auto" src={project.img} alt={project.alt} />
        {/each}
      </div>
    </section>

    <section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
      <img
        src="https://images.pexels.com/photos/4791474/pexels-photo-4791474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        alt=""
      />
    </section>
  </div>
</div>

<style>
  :root {
    --text-color: #111;
    --bg-color: #b9b3a9;
  }

  .body {
    font-family: termina, sans-serif;
    color: var(--text-color);
    background: var(--bg-color);
    transition: 0.3s ease-out;
    overflow-x: clip;
    width: 100%;
  }

  section {
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    position: relative;
  }

  section:not(#sectionPin) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 2rem;
    padding: 50px 10vw;
    margin: auto;
    place-items: center;
  }

  img {
    width: auto;
    object-fit: cover;
  }

  h1 {
    font-size: clamp(1.5rem, 16vw + 0.5rem, 5rem);
    line-height: 1;
    font-weight: 800;
    margin-bottom: 1rem;
    position: absolute;
    top: 10vw;
    left: 10vw;
    z-index: 4;
    overflow-wrap: break-word;
    hyphens: auto;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: clamp(1.5rem, 5vw + 0.5rem, 5rem);
    }
  }
  h1 span {
    display: block;
  }

  h2 {
    font-size: 2rem;
    max-width: 400px;
  }

  .credit {
    font-family: Termina, sans-serif;
  }
  .credit a {
    color: var(--text-color);
  }

  * {
    box-sizing: border-box;
  }

  #sectionPin {
    height: 100vh;
    overflow: hidden;
    display: flex;
    left: 0;
    background: var(--text-color);
    color: var(--bg-color);
  }

  .pin-wrap {
    height: 100vh;
    justify-content: flex-start;
    align-items: center;
    padding: 50px 10vw;
  }
  .pin-wrap > * {
    min-width: 60vw;
    padding: 0 5vw;
  }

  p {
    position: absolute;
    bottom: 10vw;
    right: 10vw;
    width: 200px;
    line-height: 1.5;
  }
</style>
