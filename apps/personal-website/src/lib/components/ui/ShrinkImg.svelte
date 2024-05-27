<script>
  import { scroll, animate, ScrollOffset } from 'motion';
  import { onMount } from 'svelte';

  let images = [];
  export let index;
  export let src;

  onMount(() => {
    console.log(images);

    images.forEach((image) => {
      scroll(
        animate(image, {
          clipPath: ['inset(0% 60% 0% 50%)', 'inset(0% 0% 0% 0%)']
        }),
        { target: image, offset: ScrollOffset.Enter }
      );
    });
  });
</script>

  <slot>
    <img class="-z-10 w-full h-[80vh]" bind:this={images[index]} {src} alt="" />
  </slot>
