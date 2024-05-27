<div>
  {#each links as link }
    <div>{ link }</div> 
  {/each}
  { links }
</div>

<script>
  let links = fetch('/data/product-links.json').then(res => res.json())
</script>
