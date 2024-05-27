import { c as create_ssr_component, s as subscribe, b as each, a as add_attribute, e as escape, v as validate_component } from "../../chunks/ssr.js";
import "../../chunks/supabaseClient.js";
import { a as category_links } from "../../chunks/products.js";
const Home = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $category_links, $$unsubscribe_category_links;
  $$unsubscribe_category_links = subscribe(category_links, (value) => $category_links = value);
  $$unsubscribe_category_links();
  return `<section class="grid place-items-center w-full space-y-6"><div class="py-4 pb-10 space-y-6" data-svelte-h="svelte-v97m3y"><h1 class="text-4xl text-stone-800 font-caudex text-center w-full leading-snug">WELCOME TO RUSTIQ HOME FURNITURE</h1> <p class="text-center text-stone-700 italic">The Smarter way to buy furniture</p></div> <div class="text-[#4E5471] bg-no-repeat rounded bg-cover w-full p-4 bg-center max-w-md flex flex-col gap-4 bg-[url('$lib/ui/sofa_grey.png')]" data-svelte-h="svelte-1dt6d6p"><p>High quality sofa <br> started</p> <p><span class="text-2xl font-bold">70%</span> <span>off</span></p></div> <div data-svelte-h="svelte-19ghwzo"><span class="group text-stone-600 font-extrabold text-2xl font-caudex transition duration-300">SHOP BY ROOM
<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-stone-600"></span></span></div> <div class="grid md:grid-cols-3 gap-4 w-full">${each($category_links, (category) => {
    return `<a class="w-full relative"${add_attribute("href", category.link, 0)} data-sveltekit-preload-data="hover"><img${add_attribute("src", "ui/" + category.img, 0)} class="w-full rounded-md h-full brightness-50 object-fit hover:brightness-75 ease-in duration-300"${add_attribute("alt", category.title, 0)}> <div class="absolute text-gray-100 top-5 left-4"><p class="uppercase text-xl mb-2">${escape(category.title)}</p> <span class="border font-ubuntu p-1 rounded-sm uppercase text-xs border-gray-100" data-svelte-h="svelte-1idtbfx">explore now</span></div> </a>`;
  })}</div></section>`;
});
const MyCounterButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let count = 0;
  return `<button>clicks: ${escape(count)}</button> <p data-svelte-h="svelte-1aiy047">WTF</p>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="bg-gradient-to-r mt-20 relative from-gray-100 to-gray-300">${validate_component(MyCounterButton, "MyCounterButton").$$render($$result, {}, {}, {})} ${validate_component(Home, "Home").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
