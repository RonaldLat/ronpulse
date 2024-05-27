import { c as create_ssr_component, e as escape, v as validate_component } from "./ssr.js";
const Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 1;
  return `<div class="p-2 text-sky-400 bg-sky-100 hover:bg-sky-300">${escape(count)}</div>`;
});
const metadata = {
  "title": "Foo Bar",
  "author": "Jeff",
  "date": "2022-04-15T00:00:00.000Z",
  "layout": "blog",
  "published": true,
  "excerpt": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum odio nisl, nec pretium dolor varius in."
};
const Post1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 id="post-foo-bar" data-svelte-h="svelte-1l432ew">Post Foo bar</h1> <p data-svelte-h="svelte-19w9ss">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas vestibulum odio nisl, nec pretium dolor varius in. Quisque tincidunt egestas libero rhoncus blandit. Etiam elit leo, facilisis id magna sit amet, vestibulum finibus nulla. Vestibulum porttitor nisl id ligula accumsan, et dapibus justo cursus. Phasellus congue mauris vitae dictum auctor. Sed vitae mollis quam. Morbi venenatis metus ligula, sit amet consectetur eros pharetra vel.</p> <p data-svelte-h="svelte-498nb7">Maecenas efficitur mauris eu ex viverra, ut consequat metus ultrices. Sed imperdiet leo odio, in aliquam orci sagittis ut. Vivamus eget sem et nibh faucibus luctus vel a enim. Sed orci tortor, semper ut vulputate at, hendrerit dapibus dolor. Pellentesque tincidunt tempor efficitur. Etiam efficitur pellentesque nisi, sit amet feugiat nisi. Maecenas nisl odio, viverra vitae rhoncus eu, placerat vitae ante. Quisque suscipit nibh lacus, sit amet facilisis tellus fermentum in. Integer nec lacinia risus, ut lobortis ex.</p> <p data-svelte-h="svelte-fjutvw">Integer nec ultricies nisi. Curabitur odio mauris, scelerisque at luctus a, bibendum eget velit. Vivamus id tellus lectus. Nulla in purus sit amet mi tincidunt commodo. Ut auctor ante a mauris dignissim laoreet. Nullam magna arcu, tincidunt nec risus et, mattis fringilla augue. Suspendisse imperdiet, purus vel pharetra bibendum, enim purus convallis quam, ut faucibus nibh libero in enim. Curabitur feugiat leo ac accumsan tempor. Ut non convallis mauris, sed rutrum libero.</p> <p data-svelte-h="svelte-1jl4ypv">Maecenas vehicula maximus justo, pellentesque consequat sem dignissim a. Proin quis lectus molestie, pellentesque massa in, egestas orci. Vestibulum facilisis enim at magna scelerisque, quis suscipit quam ultrices. Proin a rutrum tortor. Proin vel scelerisque nunc. Nullam condimentum sit amet magna eu rutrum. Quisque magna enim, aliquet ut blandit et, viverra eu leo. Sed molestie sem et quam consequat mattis. Donec elit velit, cursus at ipsum nec, ullamcorper tincidunt neque.</p> ${validate_component(Counter, "Counter").$$render($$result, {}, {}, {})}
Nunc convallis odio justo, non interdum dolor ultricies interdum. Curabitur accumsan sem a iaculis placerat. Donec eu facilisis sem, vel bibendum risus. Aliquam non tincidunt est, a auctor magna. Ut erat libero, commodo non malesuada quis, porttitor sit amet libero. Curabitur pulvinar ornare leo id efficitur. Donec sollicitudin arcu venenatis odio elementum, at venenatis erat efficitur. In porta mi et sollicitudin faucibus. Vivamus vel metus interdum, facilisis nisl at, ullamcorper mauris. Sed ac nisl at dolor varius aliquam. In facilisis pretium interdum. Sed tempus purus at pulvinar scelerisque. Etiam eu purus eleifend, commodo turpis eget, aliquet turpis. Mauris fermentum magna dictum lorem bibendum tempor.`;
});
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Post1,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
export {
  __vite_glob_0_6 as _
};
