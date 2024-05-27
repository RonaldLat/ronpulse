import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.8e356a89.js","_app/immutable/chunks/scheduler.3d810cd9.js","_app/immutable/chunks/index.ec3fb726.js","_app/immutable/chunks/singletons.8eb873f3.js","_app/immutable/chunks/index.e49d0d70.js","_app/immutable/chunks/stores.31cd59c3.js","_app/immutable/chunks/ScrollTrigger.1fe021b6.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/Icon.3aa59c58.js","_app/immutable/chunks/each.af864823.js"];
export const stylesheets = ["_app/immutable/assets/0.9c3fa5e7.css"];
export const fonts = [];
