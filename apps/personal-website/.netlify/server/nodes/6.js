import * as universal from '../entries/pages/blog/_slug_/_page.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_slug_/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/blog/[slug]/+page.js";
export const imports = ["_app/immutable/nodes/6.c6318802.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/scheduler.53c38381.js","_app/immutable/chunks/index.d3da53ac.js","_app/immutable/chunks/utils.9a66bb98.js"];
export const stylesheets = [];
export const fonts = [];
