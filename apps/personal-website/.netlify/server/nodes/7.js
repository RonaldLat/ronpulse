import * as universal from '../entries/pages/d3/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/d3/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/d3/+page.js";
export const imports = ["_app/immutable/nodes/7.ef2f53b9.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/transform.88b13414.js","_app/immutable/chunks/each.b63e5cf4.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/Icon.4797fc65.js"];
export const stylesheets = [];
export const fonts = [];
