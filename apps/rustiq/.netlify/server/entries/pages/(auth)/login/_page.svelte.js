import { c as create_ssr_component, s as subscribe, a as add_attribute } from "../../../../chunks/ssr.js";
import "../../../../chunks/supabaseClient.js";
import { c as currentUser } from "../../../../chunks/authState.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_currentUser;
  $$unsubscribe_currentUser = subscribe(currentUser, (value) => value);
  let credentials = { email: "", password: "" };
  $$unsubscribe_currentUser();
  return `<form class="relative space-y-3 rounded-md p-6 lg:p-10 m-10"><h1 class="text-xl font-semibold lg:text-2xl" data-svelte-h="svelte-1qvznw0">Login</h1> <p class="pb-4 text-gray-500" data-svelte-h="svelte-gor2d5">Login to access your account</p> ${``} <div class=""><label class="" data-svelte-h="svelte-1lmkhcx">Email Address</label> <input type="email" placeholder="Info@example.com" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"${add_attribute("value", credentials.email, 0)}></div> <div><label class="" data-svelte-h="svelte-7evhb2">Password</label> <input type="password" placeholder="******" class="mt-2 h-12 w-full rounded-md bg-gray-100 px-3 outline-none focus:ring"${add_attribute("value", credentials.password, 0)}></div> <div data-svelte-h="svelte-1pff0jm"><button type="submit" class="mt-5 w-full rounded-md bg-sky-600 p-2 text-center font-semibold text-white outline-none focus:ring">Login</button></div> <div><button type="submit" class="mt-5 w-full rounded-md border-2 border-sky-500 p-2 text-center font-semibold text-sky-600 outline-none focus:ring" data-svelte-h="svelte-chh8ef">Register</button></div></form>`;
});
export {
  Page as default
};
