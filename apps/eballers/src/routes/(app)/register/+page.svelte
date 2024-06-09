<script>
  import {RegisterForm} from '@repo/ui'
  export let form
  $:console.log('form',form)
</script>

<section>
  <h1 class="text-4xl text-center font-bold mb-5">Register</h1>
</section>
<hr/>
<form action="" method="POST" class="mt-7 max-w-sm mx-auto flex flex-col gap-2.5">
  <label class="input input-bordered flex items-center gap-2">
    Email
    <input name="email" type="text" class="grow" placeholder="example@email.com" />
  </label>
  <label class="input input-bordered flex items-center gap-2">
    Password
    <input  name="password"type="password" class="grow" placeholder="********" />
  </label>
  <button type="submit" class="btn max-w-sm btn-primary">Register</button>
</form>
