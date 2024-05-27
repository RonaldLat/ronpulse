import { c as create_ssr_component, v as validate_component, e as escape, s as subscribe } from "../../chunks/ssr.js";
import { p as page } from "../../chunks/stores.js";
import { I as Icon } from "../../chunks/Icon.js";
const Chevron_first = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "m17 18-6-6 6-6" }], ["path", { "d": "M7 6v12" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "chevron-first" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const ChevronFirst = Chevron_first;
const Github = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
      }
    ],
    ["path", { "d": "M9 18c-4.51 2-5-2-7-2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "github" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Github$1 = Github;
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "path",
      {
        "d": "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
      }
    ],
    [
      "rect",
      {
        "width": "4",
        "height": "12",
        "x": "2",
        "y": "9"
      }
    ],
    ["circle", { "cx": "4", "cy": "4", "r": "2" }]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "linkedin" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Linkedin$1 = Linkedin;
const Mail = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "16",
        "x": "2",
        "y": "4",
        "rx": "2"
      }
    ],
    [
      "path",
      {
        "d": "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "mail" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Mail$1 = Mail;
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "12",
        "y2": "12"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "6",
        "y2": "6"
      }
    ],
    [
      "line",
      {
        "x1": "4",
        "x2": "20",
        "y1": "18",
        "y2": "18"
      }
    ]
  ];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "menu" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Menu$1 = Menu;
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { class: className = "" } = $$props;
  let { route } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.route === void 0 && $$bindings.route && route !== void 0)
    $$bindings.route(route);
  return `<div class="${"h-full bg-transparent w-full z-10 " + escape(className, true)}"><aside class="w-full h-full border-r-2 text-gray-100"><nav class="p-12 text-xl"><a class="${["block", (route = "/") ? "text-white" : ""].join(" ").trim()}" href="/" data-svelte-h="svelte-190zf5q">Home</a> <a class="block" href="/about" data-svelte-h="svelte-1dyf2m3">About</a> <a class="block" href="#contact" data-svelte-h="svelte-1lzvnot">Contact</a> <a class="block" href="/projects" data-svelte-h="svelte-1ak75xl">Projects</a> <a class="block" href="/d3" data-svelte-h="svelte-s5j9lh">D3</a> <a class="block" href="/blog" data-svelte-h="svelte-ito2j5">Blog</a> <a class="block" href="/dsa" data-svelte-h="svelte-fba02d">DSA</a></nav></aside></div>`;
});
const app = "";
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
const onNavigate = /* @__PURE__ */ client_method("on_navigate");
const TheFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="flex flex-col w-full px-4 py-16 text-gray-200 bg-black md:px-24 lg:px-8 lg:py-20 gap-2"><p class="text-sm font-bold tracking-wide text-gray-200 uppercase" data-svelte-h="svelte-7vfdt5">subscribe</p> <p class="text-gray-400" data-svelte-h="svelte-m31vi4">Subscribe to my newsletter to get regular content I publish on my blog.</p> <div class="max-w-md pt-3"></div> <ul class="flex font-[Play] capitalize gap-3 text-myColor-300" data-svelte-h="svelte-qcj948"><li><a href="/">Home</a></li> <li><a href="portofolio">Portofolio</a></li> <li><a href="/blog">Blog</a></li></ul> <p class="text-sm text-gray-500">© ${escape((/* @__PURE__ */ new Date()).getFullYear())} Ronald Otieno. All Rights Reserved.</p></footer>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  const route = $page.route;
  onNavigate(() => {
    showSideNav = false;
  });
  let showSideNav = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="min-h-screen font-[Poppins] overflow-visible bg-myColor-50"><div class="${[
    "fixed z-20 top-0 left-0 h-full w-full md:w-1/2 bg-myColor-800 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300",
    (showSideNav ? "translate-x-0" : "") + " " + (!showSideNav ? "-translate-x-full" : "")
  ].join(" ").trim()}"> <button class="p-2 text-3xl text-white fixed bottom-1 right-1">${validate_component(ChevronFirst, "ChevronFirst").$$render($$result, {}, {}, {})}</button>  ${validate_component(Sidebar, "Sidebar").$$render($$result, { route }, {}, {})} </div> <main class="mx-auto w-full min-h-screen font-[Poppins] px-2 lg:px-5 py-16 overflow-hidden">${slots.default ? slots.default({}) : ``}</main> <nav class="${[
    "fixed bottom-0 left-0 px-3 py-0.5 bg-gray-300 text-myColor-500 h-13 border-t border-gray-400 drop-shadow-md font-extrabold flex flex-row items-center w-full justify-between transition ease-in",
    showSideNav ? "bg-gray-900" : ""
  ].join(" ").trim()}"><div class="flex w-full gap-3"><button class="hover:text-myColor-700 transition duration-100 delay-75">${validate_component(Menu$1, "Menu").$$render($$result, {}, {}, {})}</button> <a href="/blog" class="flex items-center hover:text-myColor-700 transition duration-100 delay-75" data-svelte-h="svelte-1qk8of1"><span class="text-sm hover:text-myColor-700 hover:scale-90 transition duration-100 delay-75 ease-in">Blog</span></a></div> <div class="flex gap-3">${validate_component(Linkedin$1, "Linkedin").$$render($$result, { class: "" }, {}, {})} ${validate_component(Mail$1, "Mail").$$render($$result, {}, {}, {})} <a href="https://github.com/RonaldLat" class="">${validate_component(Github$1, "Github").$$render($$result, {}, {}, {})}</a></div></nav> ${validate_component(TheFooter, "TheFooter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
