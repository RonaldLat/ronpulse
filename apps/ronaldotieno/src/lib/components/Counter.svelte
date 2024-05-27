<script>
  let count = 1;

  const increment = () => {
    count += 1;
  };
</script>

<div class="p-2 text-sky-400 bg-sky-100 hover:bg-sky-300" on:click={increment}>
  {count}
</div>
