<script>
  import { fly } from "svelte/transition";
  export let data ;
  const pageTransitionDuration = 500;
</script>

{#key data.currentPath}
  <div in:fly={{  x:-5, duration: pageTransitionDuration, delay: pageTransitionDuration }}
       out:fly={{ x: 5, duration: pageTransitionDuration }}>
    <slot />
  </div>
{/key}
