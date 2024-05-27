import { c as create_ssr_component, v as validate_component, d as add_attribute, b as each, e as escape } from "../../../chunks/ssr.js";
import * as d3 from "d3";
import { I as Icon } from "../../../chunks/Icon.js";
const Minus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "minus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Minus$1 = Minus;
const Plus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  return `${validate_component(Icon, "Icon").$$render($$result, Object.assign({}, { name: "plus" }, $$props, { iconNode }), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
const Plus$1 = Plus;
const LineChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div data-svelte-h="svelte-zbj9f6">line chart</div>`;
});
let height = 400;
const SecondChart = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let xScale;
  let yScale;
  let xAxis;
  let yAxis;
  let width;
  let margin = { top: 20, bottom: 30, left: 20, right: 70 };
  let data = [];
  const colorScale = d3.interpolateSpectral();
  {
    console.log(width);
  }
  {
    console.log("data", data);
  }
  xScale = d3.scaleBand().domain(data.map((d) => d.team.slice(0, 3))).range([margin.left, width - margin.right]);
  yScale = d3.scaleLinear().domain([0, d3.max(data, (d) => d.points)]).range([height - margin.bottom, margin.top]);
  {
    {
      d3.select(xAxis).call(d3.axisBottom(xScale));
      d3.select(yAxis).call(d3.axisLeft(yScale));
    }
  }
  {
    console.log("sc", colorScale);
  }
  return ` <div class="h-full w-full max-w-3xl mx-4 overflow-auto"><h2 data-svelte-h="svelte-ignm30">First Chart</h2> <svg${add_attribute("height", height, 0)}${add_attribute("width", width, 0)} class="w-full bg-emerald-300 px-5 mx-auto">${each(data, (d) => {
    return `<rect class="fill-stone-400"${add_attribute("x", xScale(d.team.slice(0, 3)), 0)}${add_attribute("y", yScale(d.points), 0)}${add_attribute("width", xScale.bandwidth(), 0)}${add_attribute("height", yScale(0) - yScale(d.points), 0)} stroke="black"></rect>`;
  })}<g transform="${"translate(0, " + escape(height - margin.bottom, true) + ")"}"${add_attribute("this", xAxis, 0)}></g><g transform="${"translate( " + escape(margin.left, true) + ", 0)"}"${add_attribute("this", yAxis, 0)}></g></svg> <div class="inline-flex rounded-md shadow-sm" role="group"><button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">${validate_component(Minus$1, "Minus").$$render($$result, {}, {}, {})}</button> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white" data-svelte-h="svelte-8kw4p1">Season</button> <button type="button" class="px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">${validate_component(Plus$1, "Plus").$$render($$result, {}, {}, {})}</button></div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="min-h-screen w-full"><h1 class="text-2xl bold" data-svelte-h="svelte-134tdvs">D3 Playground</h1> <h2 class="text-2xl bold" data-svelte-h="svelte-4qqove">EPL Tables</h2> ${validate_component(SecondChart, "SecondChart").$$render($$result, {}, {}, {})} ${validate_component(LineChart, "LineChart").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
