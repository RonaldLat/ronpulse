import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.bdcb5c14.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/tweenMe.86cf3cfd.js","_app/immutable/chunks/ScrollTrigger.1fe021b6.js","_app/immutable/chunks/each.b63e5cf4.js","_app/immutable/chunks/BlogCard.1f125768.js","_app/immutable/chunks/utils.9a66bb98.js"];
export const stylesheets = ["_app/immutable/assets/2.bfead2bb.css"];
export const fonts = [];
