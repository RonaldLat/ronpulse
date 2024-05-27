import * as universal from '../entries/pages/dsa/_page.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dsa/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/dsa/+page.js";
export const imports = ["_app/immutable/nodes/9.7776972b.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/QuickSort.0c2328f2.js","_app/immutable/chunks/each.af864823.js","_app/immutable/chunks/transform.88b13414.js"];
export const stylesheets = [];
export const fonts = [];
