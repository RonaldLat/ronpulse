import { c as create_ssr_component, v as validate_component, e as escape, s as subscribe, d as add_attribute } from "../../chunks/ssr.js";
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
  let topBar;
  const route = $page.route;
  onNavigate(() => {
    showSideNav = false;
  });
  let showSideNav = false;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_page();
  return `<div class="min-h-screen font-[Poppins] overflow-hidden bg-myColor-50"><div class="${[
    "fixed z-20 top-0 left-0 h-full w-full md:w-1/2 bg-myColor-800 shadow-lg transition-transform transform -translate-x-full ease-in-out duration-300",
    (showSideNav ? "translate-x-0" : "") + " " + (!showSideNav ? "-translate-x-full" : "")
  ].join(" ").trim()}"> <button class="p-2 text-3xl text-white fixed bottom-1 right-1">${validate_component(ChevronFirst, "ChevronFirst").$$render($$result, {}, {}, {})}</button>  ${validate_component(Sidebar, "Sidebar").$$render($$result, { route }, {}, {})} </div> <a href="/" class="bg-black bg-blend-hard-light opacity-85 h-12 w-full justify-between cursor-pointer flex flex-row hover:bg-mycolor-600 z-20 transition ease-in duration-150 delay-150 text-2xl fixed top-0 left-0 text-myColor-400"${add_attribute("this", topBar, 0)} data-svelte-h="svelte-1t711ot"><svg class="w-auto block h-full bg-black opacity-85 rounded-md rounded-t-none rounded-bl-none fill-myColor-300" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="3168.5393258426966" height="724.7191011235955" viewBox="0 0 3168.5393258426966 724.7191011235955"><g transform="scale(8.426966292134832) translate(10, 10)"><defs id="SvgjsDefs3489"></defs><g id="SvgjsG3490" featurekey="aMgJeN-0" transform="matrix(1.2705087783188422,0,0,1.2705087783188422,-13.5255176732955,-29.957180717447017)" class="fill-mycolor-300"><path xmlns="http://www.w3.org/2000/svg" d="M32.614,27.786c-0.401-0.378-1.034-0.359-1.414,0.041l-20.282,21.48c-0.363,0.386-0.363,0.987,0,1.374L31.2,72.173  c0.197,0.208,0.462,0.313,0.728,0.313c0.246,0,0.493-0.091,0.687-0.272c0.401-0.379,0.42-1.013,0.041-1.414L13.021,49.994  L32.655,29.2C33.034,28.798,33.016,28.166,32.614,27.786z M89.082,49.319L68.799,27.827c-0.38-0.4-1.012-0.419-1.414-0.041  c-0.401,0.379-0.42,1.013-0.041,1.414l19.636,20.806L67.344,70.8c-0.379,0.401-0.36,1.034,0.041,1.414  c0.193,0.182,0.44,0.272,0.687,0.272c0.266,0,0.53-0.105,0.728-0.313l20.283-21.48C89.445,50.306,89.445,49.705,89.082,49.319z   M58.499,27.861c-0.517-0.196-1.095,0.06-1.292,0.575L40.93,70.847c-0.198,0.516,0.06,1.094,0.575,1.292  c0.118,0.045,0.239,0.066,0.358,0.066c0.401,0,0.781-0.244,0.934-0.642l16.277-42.411C59.272,28.637,59.015,28.059,58.499,27.861z"></path></g><g id="SvgjsG3491" featurekey="textGroupContainer" transform="matrix(1,0,0,1,355,0)" fill="#fff"><rect xmlns="http://www.w3.org/2000/svg" y="0" height="1" width="1" opacity="0"></rect><rect xmlns="http://www.w3.org/2000/svg" y="0" x="-235" width="3" height="66"></rect></g><g id="SvgjsG3492" featurekey="8L6ael-0" transform="matrix(1.0232690820923773,0,0,1.0232690820923773,136.34230274031603,11.883658005067161)" fill="#fff"><path d="M11.1 14.1 l3.02 4.62 q0.22 0.36 0.02 0.72 q-0.08 0.16 -0.25 0.26 t-0.35 0.1 l-1.82 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 l-3.04 -4.82 l-3.56 0 l0 4.44 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -6.58 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.16 0 q1.76 0 2.34 -1 q0.2 -0.32 0.2 -0.92 q0 -0.94 -0.62 -1.48 q-0.64 -0.58 -1.84 -0.58 l-6.24 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l6.42 0 q2.34 0 3.74 1.32 q1.46 1.32 1.46 3.58 q0 1.46 -0.64 2.49 t-1.86 1.57 z M24.096000000000004 5.16 q0.24 0.2 0.24 0.54 l0 1.5 q0 0.26 -0.15 0.45 t-0.41 0.25 q-1.28 0.26 -2.18 1.22 q-1.22 1.28 -1.22 3.33 t1.22 3.35 q0.9 0.94 2.18 1.2 q0.26 0.06 0.41 0.25 t0.15 0.45 l0 1.5 q0 0.32 -0.24 0.54 q-0.22 0.16 -0.46 0.16 l-0.12 0 q-2.32 -0.38 -3.98 -2.1 q-2.08 -2.14 -2.08 -5.33 t2.08 -5.37 q1.62 -1.68 3.98 -2.08 q0.32 -0.06 0.58 0.14 z M30.376 7.1 q2.08 2.18 2.08 5.37 t-2.08 5.33 q-1.66 1.72 -3.98 2.1 l-0.12 0 q-0.24 0 -0.46 -0.16 q-0.24 -0.22 -0.24 -0.54 l0 -1.5 q0 -0.26 0.15 -0.45 t0.41 -0.25 q1.28 -0.26 2.18 -1.2 q1.22 -1.3 1.22 -3.35 t-1.22 -3.33 q-0.9 -0.96 -2.18 -1.22 q-0.26 -0.06 -0.41 -0.25 t-0.15 -0.45 l0 -1.5 q0 -0.34 0.25 -0.54 t0.57 -0.14 q2.36 0.4 3.98 2.08 z M48.87200000000001 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.76 0 q-0.36 0 -0.58 -0.28 l-9.78 -13.4 q-0.12 -0.16 -0.14 -0.36 t0.07 -0.38 t0.26 -0.28 t0.37 -0.1 l1.76 0 q0.16 0 0.32 0.07 t0.24 0.21 l7.02 9.54 l0 -9.12 q0 -0.28 0.2 -0.49 t0.5 -0.21 l1.52 0 z M38.83200000000001 14.7 q0.28 0 0.49 0.2 t0.21 0.5 l0 3.7 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -3.7 q0 -0.3 0.21 -0.5 t0.49 -0.2 l1.52 0 z M67.72800000000001 18.86 q0.14 0.32 -0.07 0.65 t-0.57 0.33 l-13.32 0 q-0.18 0 -0.34 -0.09 t-0.24 -0.23 q-0.22 -0.32 -0.06 -0.66 l0.62 -1.46 q0.08 -0.2 0.26 -0.32 t0.38 -0.12 l9.32 0 l-3.28 -7.84 l-2.68 6.4 q-0.08 0.2 -0.25 0.31 t-0.39 0.11 l-1.68 0 q-0.38 0 -0.6 -0.32 q-0.08 -0.14 -0.1 -0.32 t0.04 -0.34 l4.06 -9.52 q0.08 -0.2 0.25 -0.32 t0.39 -0.12 l1.92 0 q0.22 0 0.39 0.12 t0.25 0.32 z M73.48400000000001 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -13.4 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 z M80.784 16.94 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.46 q0 0.28 -0.2 0.49 t-0.5 0.21 l-4.66 0 q-0.3 0 -0.5 -0.21 t-0.2 -0.49 l0 -1.46 q0 -0.28 0.2 -0.49 t0.5 -0.21 l4.66 0 z M94.12 5.52 q1.22 0.46 2.2 1.48 q2.1 2.12 2.1 5.41 t-2.1 5.43 q-0.98 1.02 -2.2 1.48 q-1.26 0.52 -2.58 0.52 l-5.66 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.44 q0 -0.3 0.21 -0.51 t0.49 -0.21 l5.6 0 q1.78 0 2.89 -1.3 t1.11 -3.26 t-1.11 -3.26 t-2.89 -1.3 l-5.6 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.44 q0 -0.28 0.21 -0.49 t0.49 -0.21 l5.66 0 q1.32 0 2.58 0.52 z M114.352 5.16 q0.24 0.2 0.24 0.54 l0 1.5 q0 0.26 -0.15 0.45 t-0.41 0.25 q-1.28 0.26 -2.18 1.22 q-1.22 1.28 -1.22 3.33 t1.22 3.35 q0.9 0.94 2.18 1.2 q0.26 0.06 0.41 0.25 t0.15 0.45 l0 1.5 q0 0.32 -0.24 0.54 q-0.22 0.16 -0.46 0.16 l-0.12 0 q-2.32 -0.38 -3.98 -2.1 q-2.08 -2.14 -2.08 -5.33 t2.08 -5.37 q1.62 -1.68 3.98 -2.08 q0.32 -0.06 0.58 0.14 z M120.632 7.1 q2.08 2.18 2.08 5.37 t-2.08 5.33 q-1.66 1.72 -3.98 2.1 l-0.12 0 q-0.24 0 -0.46 -0.16 q-0.24 -0.22 -0.24 -0.54 l0 -1.5 q0 -0.26 0.15 -0.45 t0.41 -0.25 q1.28 -0.26 2.18 -1.2 q1.22 -1.3 1.22 -3.35 t-1.22 -3.33 q-0.9 -0.96 -2.18 -1.22 q-0.26 -0.06 -0.41 -0.25 t-0.15 -0.45 l0 -1.5 q0 -0.34 0.25 -0.54 t0.57 -0.14 q2.36 0.4 3.98 2.08 z M128.288 5 q0.3 0 0.51 0.21 t0.21 0.51 l0 1.46 q0 0.3 -0.21 0.51 t-0.51 0.21 l-2.06 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.3 0.21 -0.51 t0.49 -0.21 l2.06 0 z M137.228 5 q0.28 0 0.49 0.21 t0.21 0.51 l0 1.46 q0 0.3 -0.21 0.51 t-0.49 0.21 l-4.02 0 l0 11.36 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.54 0 q-0.3 0 -0.51 -0.21 t-0.21 -0.49 l0 -13.54 q0 -0.3 0.21 -0.51 t0.51 -0.21 l6.26 0 z M143.804 10.94 q0.3 0 0.5 0.21 t0.2 0.51 l0 7.48 q0 0.28 -0.2 0.49 t-0.5 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -7.48 q0 -0.3 0.21 -0.51 t0.49 -0.21 l1.52 0 z M143.804 5 q0.3 0 0.5 0.21 t0.2 0.49 l0 3.7 q0 0.3 -0.2 0.51 t-0.5 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -3.7 q0 -0.28 0.21 -0.49 t0.49 -0.21 l1.52 0 z M160.07999999999998 16.96 q0.3 0 0.5 0.21 t0.2 0.51 l0 1.46 q0 0.28 -0.2 0.49 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.46 q0 -0.3 0.21 -0.51 t0.49 -0.21 l9.88 0 z M150.2 13.86 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -1.5 q0 -0.28 0.21 -0.49 t0.49 -0.21 l8.98 0 q0.3 0 0.51 0.21 t0.21 0.49 l0 1.5 q0 0.28 -0.21 0.49 t-0.51 0.21 l-8.98 0 z M160.07999999999998 5 q0.3 0 0.5 0.21 t0.2 0.49 l0 1.46 q0 0.3 -0.2 0.51 t-0.5 0.21 l-9.88 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.51 l0 -1.46 q0 -0.28 0.21 -0.49 t0.49 -0.21 l9.88 0 z M177.21599999999998 5 q0.28 0 0.49 0.21 t0.21 0.49 l0 13.4 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.76 0 q-0.36 0 -0.58 -0.28 l-9.78 -13.4 q-0.12 -0.16 -0.14 -0.36 t0.07 -0.38 t0.26 -0.28 t0.37 -0.1 l1.76 0 q0.16 0 0.32 0.07 t0.24 0.21 l7.02 9.54 l0 -9.12 q0 -0.28 0.2 -0.49 t0.5 -0.21 l1.52 0 z M167.176 14.7 q0.28 0 0.49 0.2 t0.21 0.5 l0 3.7 q0 0.28 -0.21 0.49 t-0.49 0.21 l-1.52 0 q-0.28 0 -0.49 -0.21 t-0.21 -0.49 l0 -3.7 q0 -0.3 0.21 -0.5 t0.49 -0.2 l1.52 0 z M188.71199999999996 5.16 q0.24 0.2 0.24 0.54 l0 1.5 q0 0.26 -0.15 0.45 t-0.41 0.25 q-1.28 0.26 -2.18 1.22 q-1.22 1.28 -1.22 3.33 t1.22 3.35 q0.9 0.94 2.18 1.2 q0.26 0.06 0.41 0.25 t0.15 0.45 l0 1.5 q0 0.32 -0.24 0.54 q-0.22 0.16 -0.46 0.16 l-0.12 0 q-2.32 -0.38 -3.98 -2.1 q-2.08 -2.14 -2.08 -5.33 t2.08 -5.37 q1.62 -1.68 3.98 -2.08 q0.32 -0.06 0.58 0.14 z M194.99199999999996 7.1 q2.08 2.18 2.08 5.37 t-2.08 5.33 q-1.66 1.72 -3.98 2.1 l-0.12 0 q-0.24 0 -0.46 -0.16 q-0.24 -0.22 -0.24 -0.54 l0 -1.5 q0 -0.26 0.15 -0.45 t0.41 -0.25 q1.28 -0.26 2.18 -1.2 q1.22 -1.3 1.22 -3.35 t-1.22 -3.33 q-0.9 -0.96 -2.18 -1.22 q-0.26 -0.06 -0.41 -0.25 t-0.15 -0.45 l0 -1.5 q0 -0.34 0.25 -0.54 t0.57 -0.14 q2.36 0.4 3.98 2.08 z"></path></g><g id="SvgjsG3493" featurekey="sloganFeature-0" transform="matrix(0.540423700641916,0,0,0.540423700641916,137.47038450536905,39.157371468624454)" fill="#fff"><path d="M12 9.84 l-1.82 0 c-0.1 -2.22 -1.94 -2.92 -3.56 -2.92 c-1.22 0 -3.28 0.34 -3.28 2.52 c0 1.22 0.86 1.62 1.7 1.82 l4.1 0.94 c1.86 0.44 3.26 1.56 3.26 3.84 c0 3.4 -3.16 4.34 -5.62 4.34 c-2.66 0 -3.7 -0.8 -4.34 -1.38 c-1.22 -1.1 -1.46 -2.3 -1.46 -3.64 l1.82 0 c0 2.6 2.12 3.36 3.96 3.36 c1.4 0 3.76 -0.36 3.76 -2.42 c0 -1.5 -0.7 -1.98 -3.06 -2.54 l-2.94 -0.68 c-0.94 -0.22 -3.06 -0.88 -3.06 -3.38 c0 -2.24 1.46 -4.44 4.94 -4.44 c5.02 0 5.52 3 5.6 4.58 z M29.451999999999998 12.82 c0 -3.38 -1.88 -5.84 -5 -5.84 s-5 2.46 -5 5.84 s1.88 5.84 5 5.84 s5 -2.46 5 -5.84 z M31.451999999999998 12.82 c0 3.1 -1.64 7.56 -7 7.56 s-7 -4.46 -7 -7.56 s1.64 -7.56 7 -7.56 s7 4.46 7 7.56 z M39.224000000000004 13.48 l0 6.52 l-1.94 0 l0 -14.36 l9.94 0 l0 1.72 l-8 0 l0 4.4 l7.04 0 l0 1.72 l-7.04 0 z M51.39600000000001 7.359999999999999 l0 -1.72 l11.66 0 l0 1.72 l-4.86 0 l0 12.64 l-1.94 0 l0 -12.64 l-4.86 0 z M76.08800000000001 8.1 l-3.32 11.9 l-2.04 0 l-3.74 -14.36 l2.1 0 l2.68 11.68 l0.04 0 l3.22 -11.68 l2.12 0 l3.22 11.68 l0.04 0 l2.68 -11.68 l2.14 0 l-3.78 14.36 l-2.04 0 l-3.28 -11.9 l-0.04 0 z M98.42000000000002 15.82 l-5.76 0 l-1.5 4.18 l-2 0 l5.4 -14.36 l2.2 0 l5.2 14.36 l-2.12 0 z M93.26 14.1 l4.46 0 l-2.12 -6.32 l-0.04 0 z M109.25200000000001 13.84 l0 6.16 l-1.94 0 l0 -14.36 l6.64 0 c2.36 0 4.72 0.82 4.72 3.86 c0 2.12 -1.08 2.9 -2 3.44 c0.82 0.34 1.64 0.7 1.72 2.7 l0.12 2.6 c0.02 0.8 0.12 1.1 0.72 1.44 l0 0.32 l-2.38 0 c-0.28 -0.88 -0.34 -3.06 -0.34 -3.6 c0 -1.18 -0.24 -2.56 -2.56 -2.56 l-4.7 0 z M109.25200000000001 7.300000000000001 l0 4.88 l4.5 0 c1.42 0 2.92 -0.36 2.92 -2.48 c0 -2.22 -1.62 -2.4 -2.58 -2.4 l-4.84 0 z M135.644 18.28 l0 1.72 l-10.6 0 l0 -14.36 l10.46 0 l0 1.72 l-8.52 0 l0 4.4 l7.86 0 l0 1.72 l-7.86 0 l0 4.8 l8.66 0 z M150.508 20 l0 -14.36 l5.82 0 c3.74 0 6.04 2.84 6.04 6.98 c0 3.22 -1.4 7.38 -6.12 7.38 l-5.74 0 z M152.448 7.300000000000001 l0 11.04 l3.76 0 c2.52 0 4.16 -1.98 4.16 -5.6 s-1.66 -5.44 -4.3 -5.44 l-3.62 0 z M178.98 18.28 l0 1.72 l-10.6 0 l0 -14.36 l10.46 0 l0 1.72 l-8.52 0 l0 4.4 l7.86 0 l0 1.72 l-7.86 0 l0 4.8 l8.66 0 z M190.03199999999998 17.88 l4.06 -12.24 l2.18 0 l-5.24 14.36 l-2.06 0 l-5.24 -14.36 l2.16 0 l4.1 12.24 l0.04 0 z M212.32399999999998 18.28 l0 1.72 l-10.6 0 l0 -14.36 l10.46 0 l0 1.72 l-8.52 0 l0 4.4 l7.86 0 l0 1.72 l-7.86 0 l0 4.8 l8.66 0 z M220.136 5.640000000000001 l0 12.64 l7.28 0 l0 1.72 l-9.22 0 l0 -14.36 l1.94 0 z M243.908 12.82 c0 -3.38 -1.88 -5.84 -5 -5.84 s-5 2.46 -5 5.84 s1.88 5.84 5 5.84 s5 -2.46 5 -5.84 z M245.908 12.82 c0 3.1 -1.64 7.56 -7 7.56 s-7 -4.46 -7 -7.56 s1.64 -7.56 7 -7.56 s7 4.46 7 7.56 z M253.67999999999998 7.300000000000001 l0 4.98 l3.86 0 c1.74 0 2.92 -0.64 2.92 -2.58 c0 -1.82 -1.24 -2.4 -2.84 -2.4 l-3.94 0 z M253.67999999999998 13.940000000000001 l0 6.06 l-1.94 0 l0 -14.36 l6.46 0 c2.66 0 4.26 1.72 4.26 4.04 c0 2 -1.14 4.26 -4.26 4.26 l-4.52 0 z M279.012 18.28 l0 1.72 l-10.6 0 l0 -14.36 l10.46 0 l0 1.72 l-8.52 0 l0 4.4 l7.86 0 l0 1.72 l-7.86 0 l0 4.8 l8.66 0 z M287.064 13.84 l0 6.16 l-1.94 0 l0 -14.36 l6.64 0 c2.36 0 4.72 0.82 4.72 3.86 c0 2.12 -1.08 2.9 -2 3.44 c0.82 0.34 1.64 0.7 1.72 2.7 l0.12 2.6 c0.02 0.8 0.12 1.1 0.72 1.44 l0 0.32 l-2.38 0 c-0.28 -0.88 -0.34 -3.06 -0.34 -3.6 c0 -1.18 -0.24 -2.56 -2.56 -2.56 l-4.7 0 z M287.064 7.300000000000001 l0 4.88 l4.5 0 c1.42 0 2.92 -0.36 2.92 -2.48 c0 -2.22 -1.62 -2.4 -2.58 -2.4 l-4.84 0 z"></path></g></g></svg></a> <main class="max-w-5xl mx-auto w-full min-h-screen font-[Poppins] px-2 lg:px-5 py-16 overflow-hidden">${slots.default ? slots.default({}) : ``}</main> <nav class="${[
    "fixed bottom-0 left-0 px-3 py-0.5 bg-gray-300 text-myColor-500 h-13 border-t border-gray-400 drop-shadow-md font-extrabold flex flex-row items-center w-full justify-between transition ease-in",
    showSideNav ? "bg-gray-900" : ""
  ].join(" ").trim()}"><div class="flex w-full gap-3"><button class="hover:text-myColor-700 transition duration-100 delay-75">${validate_component(Menu$1, "Menu").$$render($$result, {}, {}, {})}</button> <a href="/blog" class="flex items-center hover:text-myColor-700 transition duration-100 delay-75" data-svelte-h="svelte-1qk8of1"><span class="text-sm hover:text-myColor-700 hover:scale-90 transition duration-100 delay-75 ease-in">Blog</span></a></div> <div class="flex gap-3">${validate_component(Linkedin$1, "Linkedin").$$render($$result, { class: "" }, {}, {})} ${validate_component(Mail$1, "Mail").$$render($$result, {}, {}, {})} <a href="https://github.com/RonaldLat" class="">${validate_component(Github$1, "Github").$$render($$result, {}, {}, {})}</a></div></nav> ${validate_component(TheFooter, "TheFooter").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Layout as default
};
