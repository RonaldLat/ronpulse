import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.58b8142b.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/singletons.917147b2.js","_app/immutable/chunks/index.9162b484.js","_app/immutable/chunks/stores.2ea0d7a1.js","_app/immutable/chunks/ScrollTrigger.1fe021b6.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/Icon.4797fc65.js","_app/immutable/chunks/each.b63e5cf4.js"];
export const stylesheets = ["_app/immutable/assets/0.3bea8af3.css"];
export const fonts = [];
