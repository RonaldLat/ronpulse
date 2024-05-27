import * as universal from '../entries/pages/dsa/_page.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dsa/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dsa/+page.js";
export const imports = ["_app/immutable/nodes/8.c4476a31.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/QuickSort.e64ca59f.js","_app/immutable/chunks/each.b63e5cf4.js","_app/immutable/chunks/transform.88b13414.js"];
export const stylesheets = [];
export const fonts = [];
