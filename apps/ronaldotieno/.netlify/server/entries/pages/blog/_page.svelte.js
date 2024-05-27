import { c as create_ssr_component, e as escape, b as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { B as BlogCard } from "../../../chunks/BlogCard.js";
const title = "Ronald Otieno's blog";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-2zzrdj_START -->${$$result.title = `<title>${escape(title)}</title>`, ""}<!-- HEAD_svelte-2zzrdj_END -->`, ""} <div class="px-3 md:px-5 mx-auto w-full container"><h1 data-svelte-h="svelte-rrgtaa">Ronald&#39;s Blog</h1> <ul class="grid grid-cols-1 md:grid-cols-2 gap-3 w-full mx-auto text-center">${each(data.posts, (post) => {
    return `<li class="h-full rounded-none bg-gray-200"><a${add_attribute("href", `blog/${post.slug}`, 0)}>${validate_component(BlogCard, "BlogCard").$$render($$result, { post }, {}, {})}</a> </li>`;
  })}</ul></div>`;
});
export {
  Page as default
};
