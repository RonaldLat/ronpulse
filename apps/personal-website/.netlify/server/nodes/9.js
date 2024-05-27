import * as server from '../entries/pages/portofolio/_page.server.js';

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/portofolio/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/portofolio/+page.server.js";
export const imports = ["_app/immutable/nodes/9.6e33a3e3.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/ScrollTrigger.1fe021b6.js","_app/immutable/chunks/tweenMe.86cf3cfd.js"];
export const stylesheets = [];
export const fonts = [];
