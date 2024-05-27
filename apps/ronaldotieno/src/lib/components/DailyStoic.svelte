<script>
  import { example } from '$lib/gsapAnimations/tweenMe';

  export let quote;
</script>

<div
  use:example
  class="bg-gray-900 my-7 md:mt-20 max-w-2xl space-y-2 border border-myColor-600 mx-auto p-2 rounded-md"
>
  <p class="text-myColor-400 font-[Play]">Daily Stoic</p>
  <img
    class="h-20 w-auto rounded-md"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUV854JIL0_j2RTDqxwS1E_RHToQQYProgsw&usqp=CAU"
    alt="Marcus Aurelius"
  />
  <p class="italic font-[Maven] text-myColo-100">{quote.text}</p>
  <p class="text-myColo-50 text-xs">{quote.author}</p>
</div>
