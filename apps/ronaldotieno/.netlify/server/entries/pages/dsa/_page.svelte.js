import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { Q as QuickSort } from "../../../chunks/QuickSort.js";
const BreathingGrids = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-l4tzio">bbb</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h2 data-svelte-h="svelte-1vdxp5p">Data Structures and Algorithms</h2> ${validate_component(QuickSort, "QuickSort").$$render($$result, {}, {}, {})} ${validate_component(BreathingGrids, "BreathingGrids").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
