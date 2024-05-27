import * as universal from '../entries/pages/d3/_page.js';

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/d3/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/d3/+page.js";
export const imports = ["_app/immutable/nodes/7.8cc35bb7.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/transform.88b13414.js","_app/immutable/chunks/each.af864823.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/Icon.3aa59c58.js"];
export const stylesheets = [];
export const fonts = [];
