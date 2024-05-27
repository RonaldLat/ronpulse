<script>
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { scrowlly, example } from '$lib/gsapAnimations/tweenMe.js';

  gsap.registerPlugin(ScrollTrigger);
  let first;
  let second;
  let third;
  let box;

  $: {
    gsap.from(box, {
      xPercent: 500,
      duration: 2
    });
  }
  $: {
    //let tl = gsap.timeline()
    //tl.to(first, {x: 600, duration: 2}, 1)
    //tl.to(second, {x: 600, duration: 1}, "<")
    //tl.to(third, {x: 600, duration: 1}, "+=1")
  }
</script>

<div>helloooooooooooooo</div>

<div
  class="flex bg-sky-100 w-full h-full items-center flex-col justify-start min-h-screen overflow-hidden"
>
  <div use:example class="box h-60 w-1/4 bg-lime-500" />
  <div bind:this={box} class="box h-60 green w-1/4 bg-emerald-500" />
  <div class="box green h-80 w-1/4 bg-sky-500" />
  <div class="box yell green h-80 w-1/4 bg-yellow-500" />
  <div use:scrowlly class="box3 h-80 w-1/4 bg-stone-500" />
</div>

<div class="flex-col gap-2">
  <div
    use:example
    bind:this={first}
    class="bg-green-400 w-16 h-16 rounded-md"
  />
  <div
    use:example
    bind:this={second}
    class="bg-violet-400 w-16 h-16 rounded-md"
  />
  <div
    use:example
    bind:this={third}
    class="bg-orange-400 w-16 h-16 rounded-md"
  />
</div>
<div class="h-screen" />
<div class="h-screen" />
