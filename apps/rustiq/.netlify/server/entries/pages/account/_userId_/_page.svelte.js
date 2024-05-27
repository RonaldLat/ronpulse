import { c as create_ssr_component, s as subscribe, e as escape } from "../../../../chunks/ssr.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const userId = $page.params.userId;
  $$unsubscribe_page();
  return `<h1>${escape(userId)}</h1>`;
});
export {
  Page as default
};
