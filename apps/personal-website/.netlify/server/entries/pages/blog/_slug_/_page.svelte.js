import { c as create_ssr_component, e as escape, v as validate_component, m as missing_component } from "../../../../chunks/ssr.js";
import { f as formatDate } from "../../../../chunks/utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log(data);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-6xqnh0_START -->${$$result.title = `<title>${escape(data.meta.title)}</title>`, ""}<meta property="og:type" content="article"><meta property="og:title" content="article"><!-- HEAD_svelte-6xqnh0_END -->`, ""} <div class="px-3 md:px-5 w-full bg-transparent pb-28 min-h-screen py-8 flex flex-col items-center justify-center relative overflow-hidden lg:py-12"><article class="prose text-gray-800 prose-h1:font-[Maven] prose-h2:font-[Caudex] w-full bg-transparent"><hgroup><h1 class="">${escape(data.meta.title)}</h1> <p>Published at ${escape(formatDate(data.meta.date))}</p></hgroup>  ${validate_component(data.content || missing_component, "svelte:component").$$render($$result, {}, {}, {})} <div></div></article></div>`;
});
export {
  Page as default
};
