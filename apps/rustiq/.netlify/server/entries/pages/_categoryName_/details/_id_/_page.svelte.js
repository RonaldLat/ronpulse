import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape } from "../../../../../chunks/ssr.js";
import { c as cart } from "../../../../../chunks/products.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cart;
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  let { data } = $$props;
  const product = data.product[0];
  console.log("product", product);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_cart();
  return ` <section class="mx-auto text-gray-700 body-font overflow-hidden min-h-screen"><div class="container px-5 py-24 mx-auto"><div class="lg:w-4/5 mx-auto flex flex-wrap"><img alt="ecommerce" class="lg:w-1/2 w-full md:object-contain object-center rounded border border-gray-200"${add_attribute("src", product.main_image, 0)}> <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"><h2 class="text-sm title-font text-gray-500 tracking-widest" data-svelte-h="svelte-xahl7f">NAME</h2> <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">${escape(product.name)}</h1> <h2 class="pt-4 text-sm title-font text-gray-500 tracking-widest" data-svelte-h="svelte-16j92vd">DESCRIPTION</h2> <p class="leading-relaxed my-2">${escape(product.description)}</p> <h2 class="pt-4 text-sm title-font text-gray-500 tracking-widest" data-svelte-h="svelte-jzhp6o">FEATURES</h2> <p class="leading-relaxed my-2 text-sm">${escape(product.features)}</p> <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"${add_attribute("src", product.detail_image, 0)}> <div class="flex mt-4"><span class="title-font font-medium text-2xl text-gray-900"><span class="text-xl font-bold whitespace-nowrap text-slate-900">KES. ${escape(new Intl.NumberFormat().format(product.special_price))}</span> <button ${""} class="flex ml-auto text-white bg-blue-500 border-0 my-3 py-2 px-6 focus:outline-none hover:bg-sky-600 transition ease-in-out delay-150 rounded">Add to Cart</button></span></div></div></div></div></section>`;
});
export {
  Page as default
};
