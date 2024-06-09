<script>
  export let action = '?/register';
  export let method = 'POST';
</script>

<form {action} {method} class="max-w-sm mx-auto flex flex-col gap-2.5">
  <label class="input input-bordered flex items-center gap-2">
    Email
    <input type="text" class="grow" placeholder="example@email.com" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    Password
    <input type="password" class="grow" placeholder="********" />
  </label>
  <button class="btn max-w-sm btn-primary">Register</button>
</form>
