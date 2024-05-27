import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "../../../chunks/supabaseClient.js";
const ProductForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let name = "aaaa";
  let specialPrice = 333222;
  let descreption = "ffsdea";
  let features = "lslkdjflad";
  return `  <div><form class="grid grid-cols-1 gap-y-2.5"><label>Main Image:
			<input type="file"></label> <label>Name:
			<input type="text"${add_attribute("value", name, 0)}></label> <label>Special Price:
			<input type="text"${add_attribute("value", specialPrice, 0)}></label> <label>Description:
			<textarea>${escape(descreption)}</textarea></label> <label>Features:
			<input type="text"${add_attribute("value", features, 0)}></label> <button type="submit" data-svelte-h="svelte-1ou7dtz">Submit</button></form></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${validate_component(ProductForm, "ProductForm").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
