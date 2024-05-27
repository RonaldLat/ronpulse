<script>
  import { scroll, animate, ScrollOffset } from 'motion';
  import { onMount } from 'svelte';

  let header, content, title1, title2, image;

  onMount(() => {
    scroll(
      animate(header, {
        backgroundPosition: ['50% 0', '50% 100%'],
        backgroundColor: [null, 'black'],
        height: [null, `0.5rem`]
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(title1, {
        paddingTop: [null, 0],
        paddingLeft: '1.5rem',
        paddingBottom: '0.5rem',
        alignItems: 'center',
        fontSize: [null, '1.5rem']
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(title2, {
        opacity: 0
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    );

    scroll(
      animate(image, {
        clipPath: ['inset(0% 60% 0% 50%)', 'inset(0% 0% 0% 0%)']
      }),
      {
        offset: ['0vh', '90vh'] // As we shrink the header to 10vh, we only need to run the animation over a distance of 90vh
      }
    ),
      { target: image, offset: ScrollOffset.enter };
  });
</script>

<div
  bind:this={header}
  class="fixed z-10 py-8 px-3 top-0 left-0 w-screen h-[calc(100vh-29px)] grid grid-rows-2 place-items-center text-left bg-gray-800 bg-[url('/lat2-smaller.webp')] bg-blend-overlay bg-cover bg-center"
  id="sticky-parallax-header"
>
  <p
    bind:this={title1}
    class="h-full w-full font-bold font[Play] text-5xl text-gray-50 flex items-start"
  >
    Ronald Otieno
  </p>
  <p
    class="text-white text-left uppercase text-6xl font-semibold font-[Ubuntu] px-1"
  >
    i make <span class="underline underline-offset-8 leading-loose">ship</span>
    happen, <br />
    with code
  </p>
  <p
    bind:this={title2}
    class=" self-end w-full h-full text-gray-300 pr-5 pb-4 italic flex text-center items-end justify-end"
  >
    Software Developer
  </p>
</div>

<div class="  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
  <div
    bind:this={content}
    class="h-screen relative flex flex-col items-start w-full max-w-xl px-4 mx-auto lg:px-8 lg:max-w-screen-xl"
    id="content"
  >
    <h2
      class="mb-5 font-[Maven] text-4xl font-extrabold first-letter:text-6xl first-letter:text-myColor-600 tracking-widest text-gray-900 sm:text-4xl sm:leading-none"
    >
      I build intelligent sytems,<br class="hidden md:block" />
      <span class="inline-block text-deep-violet-accent-400"
        >one line at a time.</span
      >
    </h2>

    <div class="flex flex-col gap-y-4 mb-5 text-base text-gray-700 md:text-lg">
      <p>
        Hello! I'm Ronald Otieno, a software developer specializing in web
        development, data visualization, and machine learning.
      </p>
      <p>
        With expertise in dynamic web applications and a focus on D3.js for
        captivating visualizations, I'm excited to collaborate on impactful
        projects. Let's make a difference together!
      </p>
    </div>

    <p class="w-full hidden mb-14">
      <img
        class="-z-10 w-full h-[80vh]"
        bind:this={image}
        src="js.svg"
        alt=""
      />
    </p>
  </div>
</div>

<style>
  #content {
    max-width: 60em;
    margin-top: 100vh;
  }
</style>
