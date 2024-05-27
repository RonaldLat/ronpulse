import { c as create_ssr_component, s as subscribe } from "../../../chunks/ssr.js";
import { c as currentUser } from "../../../chunks/authState.js";
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const beforeNavigate = /* @__PURE__ */ client_method("before_navigate");
const afterNavigate = /* @__PURE__ */ client_method("after_navigate");
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentUser, $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => $currentUser = value);
  beforeNavigate((navigation) => {
    console.log(navigation);
    if ($currentUser) {
      console.log("login first");
    }
  });
  afterNavigate((navigation) => {
    if (!$currentUser) {
      console.log("after", navigation);
      return;
    }
  });
  $$unsubscribe_currentUser();
  return `<div class="mt-20"><h1 data-svelte-h="svelte-13hwxmh">My Account</h1> ${$currentUser ? `${slots.default ? slots.default({}) : ``}` : `<a href="/login" class="text-lg text-sky-700 border-2 rounded-md border-sky-600" data-svelte-h="svelte-bq4nt3">Login</a>`}</div>`;
});
export {
  Layout as default
};
