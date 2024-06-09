<script>
  export let action = '?/login';
  export let method = 'POST';
</script>

<form {action} {method} class="max-w-sm mx-auto flex flex-col gap-2.5">
  <label class="input input-bordered flex items-center gap-2">
    Email
    <input name="email" type="text" class="grow" placeholder="example@email.com" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    Password
    <input name="password" type="password" class="grow" placeholder="********" />
  </label>
  <button type="submit" class="btn max-w-sm btn-accent">Login</button>
</form>
