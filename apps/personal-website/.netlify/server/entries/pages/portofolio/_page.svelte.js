import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { g as gsapWithCSS, S as ScrollTrigger } from "../../../chunks/tweenMe.js";
const Gsap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  gsapWithCSS.registerPlugin(ScrollTrigger);
  let first;
  let second;
  let third;
  let box;
  {
    {
      gsapWithCSS.from(box, { xPercent: 500, duration: 2 });
    }
  }
  return `<div data-svelte-h="svelte-1vinyzn">helloooooooooooooo</div> <div class="flex bg-sky-100 w-full h-full items-center flex-col justify-start min-h-screen overflow-hidden"><div class="box h-60 w-1/4 bg-lime-500"></div> <div class="box h-60 green w-1/4 bg-emerald-500"${add_attribute("this", box, 0)}></div> <div class="box green h-80 w-1/4 bg-sky-500"></div> <div class="box yell green h-80 w-1/4 bg-yellow-500"></div> <div class="box3 h-80 w-1/4 bg-stone-500"></div></div> <div class="flex-col gap-2"><div class="bg-green-400 w-16 h-16 rounded-md"${add_attribute("this", first, 0)}></div> <div class="bg-violet-400 w-16 h-16 rounded-md"${add_attribute("this", second, 0)}></div> <div class="bg-orange-400 w-16 h-16 rounded-md"${add_attribute("this", third, 0)}></div></div> <div class="h-screen"></div> <div class="h-screen"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="mt-24" data-svelte-h="svelte-1raec8o">Portofolio</div> <div class="min-h-screen">${validate_component(Gsap, "Gsap").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
