import { c as create_ssr_component, s as subscribe, e as escape, a as add_attribute, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { c as cart } from "../../../chunks/products.js";
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  let $$unsubscribe_cart;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_cart = subscribe(cart, (value) => value);
  let { item } = $$props;
  const pathname = $page.data.pathname;
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$unsubscribe_page();
  $$unsubscribe_cart();
  return `<div class="relative m-x-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-2xl"><a class="relative mx-3 mt-3 flex w-full overflow-hidden rounded-xl" href="${escape(pathname, true) + "/details/" + escape(item.id, true)}"><img class="object-cover h-full"${add_attribute("src", item.main_image, 0)} alt="product image"> <span class="absolute hidden top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white" data-svelte-h="svelte-1nol6cq">39% OFF</span></a> <div class="mt-4 px-5 pb-5"><a href="${escape(pathname, true) + "/details/" + escape(item.id, true)}"><h5 class="text-lg tracking-tight text-slate-900">${escape(item.name)}</h5></a> <div class="mt-2 mb-5 flex items-center justify-between"><p><span class="text-lg font-bold whitespace-nowrap text-slate-900">KES. ${escape(new Intl.NumberFormat().format(item.special_price))}</span> <span class="text-sm text-slate-900 line-through hidden">${escape(item.old_price)}</span></p></div> <button ${""} class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"><svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
			Add to cart</button></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const category = $page.params.categoryName;
  let { data } = $$props;
  let items = data.categoryData;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<section><h2 class="bg-slate-50 rounded-md capitalize text-center py-6 mb-8 text-2xl tracking-wide font-bold text-gray-700">${escape(category)} Category</h2> <div class="mx-auto"><ul class="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2 md:gap-4 ">${each(items, (item) => {
    return `<li class="w-full">${validate_component(ProductCard, "ProductCard").$$render($$result, { item }, {}, {})} </li>`;
  })}</ul></div></section>`;
});
export {
  Page as default
};
